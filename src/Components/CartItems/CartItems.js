import React, { useState } from 'react'
import './CartItems.css'
import { useSelector } from 'react-redux';
import { decreaseQuantity, increaseQuantity, removeItemFromCart } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';

const CartItems = () => {

    const dispatch = useDispatch();

    const [promoCode, setPromoCode] = useState('');
    const [validCode, setValidCode] = useState(false);

    const bonusCode = "bonus"

    const handlePromoCode = (e) => {
        setPromoCode(e.target.value)

    }

    const checkPromoCode = () => {
        if (promoCode === bonusCode) {
            setValidCode(true)
        } else {
            setValidCode(false)
        }
    }

    const cartItems = useSelector((state) => state.cart.items);
    const removeFromCartHandler = (id) => {
        dispatch(removeItemFromCart(id));
    };
    const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2);
    const onIncrease = (prod) => {

        dispatch(increaseQuantity(prod));

    }
    const onDecrease = (prod) => {
        dispatch(decreaseQuantity(prod));


    }
    return (
        <>
            <div className='cart-items'>
                <div className='cart-items-main'>
                    <p>Products</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <hr />
                <div>
                    {cartItems.map(cartItem => {
                        return <div className='cart-items-format cart-items-main'>
                            <img src={cartItem.thumbnail} alt='productimage' className='cart-icon-product-icon' />
                            <p>{cartItem.title}</p>
                            <p>{cartItem.price}$</p>
                            <p> <button onClick={() => onDecrease(cartItem)}>-</button> {cartItem.quantity}<button onClick={() => onIncrease(cartItem)}>+</button></p>
                            <p>{(cartItem.price * cartItem.quantity).toFixed(2)}$    </p>
                            <button onClick={() => removeFromCartHandler(cartItem.id)}><img src='' alt='remove' className='cart-items-remove-icon' /></button>
                        </div>

                    })}
                    <hr />
                </div>
                <div className='cart-items-down'>
                    <div className='cart-items-total'>
                        <h1>Total</h1>
                        <div>

                            <div className='cart-items-total-item'>
                                <p>Shiping Free</p>
                                <p>Free</p>
                            </div>
                            <hr />
                            {validCode ? <>
                                <div className='cart-items-total-item'>
                                    <p>Discount</p>

                                    <p> -10%</p>
                                </div>                            <hr />
                            </> : null}


                            <div className='cart-items-total-item'>
                                <p>Total</p>
                                <p>{validCode ? (totalPrice - (totalPrice * 0.1).toFixed(2)) : totalPrice}$</p>
                            </div>
                        </div>
                        <button>Proceed</button>
                    </div>
                    <div className='cart-items-promo-code'>
                        <p>Enter your promo code</p>
                        <div className='cart-items-promo-box'>
                            <input type='text' placeholder='promocode' value={promoCode} onChange={handlePromoCode} />
                            <button onClick={checkPromoCode}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default CartItems