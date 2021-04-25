const BasketItem = (props) => {
    const {
        id,
        name,
        price,
        quantity,
        removeFromBasket = Function.prototype,
        incrQuantity = Function.prototype,
        decrQuantity = Function.prototype,
    } = props;
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
