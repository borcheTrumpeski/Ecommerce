import './Item.css'

const PopularItems = ({ products }) => {

    return (
        <div className='item-container'>
            {
                products.map((product) => (
                    <div className='item' key={product.id}>
                        <img src={product.thumbnail} alt='productimage' />
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

export default PopularItems