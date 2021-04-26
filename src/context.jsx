import { createContext, useReducer } from 'react';
import { reducer } from './reducer';

export const ShopContext = createContext();

const initialState = {
    goods: [],
    loading: true,
    order: [],
    isBasketShow: false,
    alertName: '',
};

export const ContextProvider = ({ children }) => {
    const [value, dispatch] = useReducer(reducer, initialState);

    value.closeAlert = () => {
        dispatch({ type: 'CLOSE_ALERT' });
    };

    value.removeFromBasket = (itemId) => {
        dispatch({ type: 'REMOVE_FROM_BASKET', payload: { id: itemId } });
    };

    value.handleBasketShow = () => {
        dispatch({ type: 'HANDLE_BASKET_SHOW' });
    };

    value.incrQuantity = (itemId) => {
        dispatch({type: 'INCR_QUANTITY', payload: {id: itemId}});
    };
    
    value.decrQuantity = (itemId) => {
        dispatch({type: 'DECR_QUANTITY', payload: {id: itemId}});
    };

    value.addToBasket = (item) => {
        dispatch({type: 'ADD_TO_BASKET', payload: item});
    };

    value.setGoods = (data) => {
        dispatch({type: 'SET_GOODS', payload: data});
    }

    return (
        <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
    );
};
