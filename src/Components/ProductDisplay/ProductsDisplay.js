import React, { useEffect, useState } from 'react'
import './ProductDisplay.css'
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../redux/cartSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ProductsDisplay = ({ products }) => {
    const targetCurrency = useSelector((state) => state.currency.targetCurrency);
    const rate = useSelector((state) => state.currency.rate);

    const dispatch = useDispatch();
    const [productsToDisplay, setproductsToDisplay] = useState([])
    const addToCartHandler = (addProduct) => {
        dispatch(addItemToCart(addProduct));
        toast(addProduct.title + " has been succesfully added to cart")
    };
    const increaseQuantity = (addProduct) => {
        let prodWithQuantity = productsToDisplay.map(product => product.id === addProduct.id ? { ...product, quantity: product.quantity + 1 } : product)
        setproductsToDisplay(prodWithQuantity)
    };
    const decreaseQuantity = (addProduct) => {
        setproductsToDisplay(productsToDisplay.map(product => product.id === addProduct.id ? { ...product, quantity: Math.max(product.quantity - 1, 1) } : product));
    };
    useEffect(() => {
        if (products) {
            let prodWithQuantity = products.map(el => {
                el.quantity = 1
                return el
            })
            setproductsToDisplay(prodWithQuantity)
        }
    }, [products])

    return (
        <>
            {productsToDisplay?.map(product => <div key={product.id} className='product-display'>
                <div className='product-display-left'>
                    <div className='product-display-img-list'>
                        {product?.images.map((imgUrl, index) => (
                            <img key={index} src={imgUrl} alt='productimage' />
                        ))}
                    </div>
                    <div className='product-display-image'>
                        <img src={product.thumbnail} alt='productimage' className='product-display-main-image'></img>
                    </div>
                </div>
                <div className='product-display-right'>
                    <h1>{product.title}</h1>
                    <div className='product-display-right-prices'>
                        <div className='product-display-right-prices-old'>
                            old price:{(product.price * (1 + product.discountPercentage / 100) * rate).toFixed(2) + targetCurrency}
                        </div>
                        <div className='product-display-right-prices-new'>
                            Price: {(product.price * rate).toFixed(2) + targetCurrency}
                        </div>
                    </div>
                    <div className='product-display-right-decription'>
                        {product.description}
                    </div>
                    <div className='product-display-right-size'>
                        <h1>Dimensions: </h1>
                        <div className='product-display-right-sizes'>
                            {Object.keys(product.dimensions).map((key, index) => (
                                <div key={index}>
                                    {key}:{product.dimensions[key]}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='quantity-container'>
                        <button className='quantity-buttons' onClick={() => decreaseQuantity(product)}>-</button>
                        <span>{product.quantity}</span>
                        <button className='quantity-buttons' onClick={() => increaseQuantity(product)}>+</button>
                    </div>
                    <div className='quantity-container'>
                        <button className='product-display-right-button' onClick={() => addToCartHandler(product)}>ADD TO CART</button>
                    </div>
                    <p className='product-display-right-category'><span className='product-display-right-category-span'>Category:</span>{product.category}</p>
                    <p className='product-display-right-category'><span className='product-display-right-category-span'>Tags:</span>
                        {product.tags.map((tag, index) => (
                            <span key={index}>{tag}</span>
                        ))}
                    </p>
                </div>
            </div>)}</>
    )
}

export default ProductsDisplay