import React, { useEffect, useState } from 'react';
import { getWomanShoes } from '../../api/ProductsApi';
import './Item.css'

const NewItem = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getWomanShoes(setProducts)
    }, []);

    return (
        <div className='item-container'>
            {
                products.map((product) => (
                    <div key={product.id} className='item'>
                        <img src={product.thumbnail} alt='productimage' className='item-img' />
                        <p>{product.title}</p>
                        <div className='item-prices'>
                            <div className='item-price-old'>old price:{(product.price * (1 + product.discountPercentage / 100)).toFixed(2)}</div>
                            <div className='item-price-new'>New Price{product.price}</div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default NewItem