import './Item.css'
import { useSelector } from 'react-redux';


const PopularItems = ({ products }) => {
    const targetCurrency = useSelector((state) => state.currency.targetCurrency);
    const rate = useSelector((state) => state.currency.rate);


    return (
        <div className='item-container'>
            {
                products.map((product) => (
                    <div className='item' key={product.id}>
                        <img src={product.thumbnail} alt='productimage' />
                        <p>{product.title}</p>
                        <div className='item-prices'>
                            <div className='item-price-old'>old price:{((product.price * rate) * (1 + product.discountPercentage / 100)).toFixed(2) + targetCurrency}</div>
                            <div className='item-price-new'>New Price{(product.price * rate).toFixed(2) + targetCurrency}</div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default PopularItems