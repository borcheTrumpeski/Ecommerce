import './Popular.css'
import PopularItems from '../Item/PopularItems'
import React, { useEffect, useState } from 'react';
import { getWomanJewellery } from '../../api/ProductsApi';

const Popular = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getWomanJewellery(setProducts)
    }, []);

    return (
        <div className='popular'>
            <h1>Popular Products</h1>
            <hr />
            <div className='popular-item'>
                <PopularItems products={products} />
            </div>
        </div>
    )
}

export default Popular