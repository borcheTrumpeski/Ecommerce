import React, { useEffect, useState } from 'react'
import { getCategories, getProductsByCategory } from '../api/ProductsApi'
import { Pagination } from '../Components/Pagination/Pagination'
import ProductsDisplay from '../Components/ProductDisplay/ProductsDisplay'
import { useParams } from 'react-router-dom';
import './CSS/AllProducts.css'

const AllProducts = () => {
    const limit = 3
    const { category } = useParams();
    const [products, setProducts] = useState([])
    const [skip, setskip] = useState(0)
    const [page, setPage] = useState(1)
    const [total, setTotal] = useState(0)
    const [categories, setCategories] = useState([{
        slug: "all",
        name: "All",
        url: 'https://dummyjson.com/products'
    }])
    const [selectedCategory, setSelectedCategory] = useState("All");

    useEffect(() => {
        getCategories(categories, setCategories)
    }, [])
    useEffect(() => {

        if (categories.length > 1) {
            const selectedCategoryChange = categories.find(el => el.slug === category)
            if (selectedCategoryChange) {
                getProductsByCategory(selectedCategoryChange.url + `?limit=${limit}&skip=${skip}`, setProducts, setTotal)
                setSelectedCategory(category)
            }
        }
    }, [categories])

    const handleChangeCategory = (event) => {
        setSelectedCategory(event.target.value);
        const selectedCategoryChange = categories.find(el => el.slug === event.target.value)
        setskip(0)
        setPage(1)
        getProductsByCategory(selectedCategoryChange.url + `?limit=${limit}&skip=${skip}`, setProducts, setTotal)
    };

    const onNextPage = () => {
        const nextPageSkip = skip + limit
        const selectedCategoryChange = categories.find(el => el.slug === selectedCategory)
        getProductsByCategory(selectedCategoryChange.url + `?limit=${limit}&skip=${nextPageSkip}`, setProducts, setTotal)
        setskip(nextPageSkip)
        setPage(page + 1)
    }

    const onPrevPage = () => {
        const nextPageSkip = skip - limit
        const selectedCategoryChange = categories.find(el => el.slug === selectedCategory)
        getProductsByCategory(selectedCategoryChange.url + `?limit=${limit}&skip=${nextPageSkip}`, setProducts, setTotal)
        setskip(nextPageSkip)
        setPage(page - 1)
    }

    const disableNext = page * limit >= total
    return (
        <div >
            <div className='category-dropdown-main' >
                <label htmlFor="category-dropdown">Select Category</label>
                <select
                    id="category-dropdown"
                    value={selectedCategory}
                    onChange={handleChangeCategory}
                >
                    {categories.map((category) => (
                        <option key={category.slug} value={category.slug}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>
            <ProductsDisplay products={products}></ProductsDisplay>
            <Pagination currentPage={page} onNextPage={onNextPage} onPrevPage={onPrevPage} disableNext={disableNext} />
        </div>
    )
}

export default AllProducts