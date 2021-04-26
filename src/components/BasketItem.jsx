import { useContext } from 'react';
import { ShopContext } from '../context';

const BasketItem = (props) => {
    const { id, name, price, quantity } = props;

    const { decrQuantity, incrQuantity, removeFromBasket } = useContext(
        ShopContext
    );

    return (
        <li className='collection-item'>
            {name}{' '}
            <i
                className='material-icons basket-icon'
                onClick={() => decrQuantity(id)}
            >
                remove
            </i>
            x{quantity}
            <i
                className='material-icons basket-icon'
                onClick={() => incrQuantity(id)}
            >
                add
            </i>{' '}
            = {price * quantity} руб.
            <span
                className='secondary-content'
                onClick={() => removeFromBasket(id)}
            >
                <i className='material-icons basket-delete'>close</i>
            </span>
        </li>
    );
};

export default BasketItem;
