import BasketItem from './BasketItem';
const BasketList = (props) => {
    const {
        order = [],
        handleBasketShow = Function.prototype,
        removeFromBasket = Function.prototype,
        incrQuantity = Function.prototype,
        decrQuantity = Function.prototype,
    } = props;
    const totalPrice = order.reduce(
        (sum, el) => sum + el.price * el.quantity,
        0
    );

    return (
        <ul className='collection basket-list'>
            <li className='collection-item active'>
                Корзина
                <i
                    className='material-icons basket-close'
                    onClick={handleBasketShow}
                >
                    close
                </i>
            </li>
            {order.length ? (
                order.map((item) => (
                    <BasketItem
                        key={item.id}
                        {...item}
                        removeFromBasket={removeFromBasket}
                        incrQuantity={incrQuantity}
                        decrQuantity={decrQuantity}
                    />
                ))
            ) : (
                <li className='collection-item'>Корзина пуста</li>
            )}
            <li className='collection-item active'>
                Общая стоимость: {totalPrice} руб.
            </li>
            <li className='collection-item'>
                <button className='btn-small'>Оформить заказ</button>
            </li>
        </ul>
    );
};

export default BasketList;
