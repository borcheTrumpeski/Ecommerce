import axios from 'axios';
const api = "https://dummyjson.com/"

export const getWomanWatches = (setProducts) => {
    const token = localStorage.getItem('token');

    axios.get(api + 'products/category/womens-watches', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,

        }
    })
        .then(response => {
            setProducts(response.data.products);

        })
        .catch(error => {
            console.error(error)
        });
}

export const getWomanShoes = (setProducts) => {
    const token = localStorage.getItem('token');

    axios.get(api + 'products/category/womens-shoes', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,

        }
    })
        .then(response => {
            setProducts(response.data.products);

        })
        .catch(error => {
            console.error(error)
        });
}

export const getWomanJewellery = (setProducts) => {
    const token = localStorage.getItem('token');

    axios.get(api + 'products/category/womens-jewellery', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,

        }
    })
        .then(response => {
            setProducts(response.data.products);

        })
        .catch(error => {
            console.error(error)
        });
}

export const getWomanDresses = (setProducts) => {
    const token = localStorage.getItem('token');

    axios.get(api + 'products/category/womens-dresses', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,

        }
    })
        .then(response => {
            setProducts(response.data.products);

        })
        .catch(error => {
            console.error(error)
        });
}

export const getWomanBags = (setProducts) => {
    const token = localStorage.getItem('token');

    axios.get(api + 'products/category/womens-bags', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,

        }
    })
        .then(response => {
            setProducts(response.data.products);

        })
        .catch(error => {
            console.error(error)
        });
}

export const getVehicle = (setProducts) => {
    const token = localStorage.getItem('token');

    axios.get(api + 'products/category/vehicle', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,

        }
    })
        .then(response => {
            setProducts(response.data.products);

        })
        .catch(error => {
            console.error(error)
        });
}

export const getTops = (setProducts) => {
    const token = localStorage.getItem('token');

    axios.get(api + 'products/category/tops', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,

        }
    })
        .then(response => {
            setProducts(response.data.products);

        })
        .catch(error => {
            console.error(error)
        });
}

export const getTablets = (setProducts) => {
    const token = localStorage.getItem('token');

    axios.get(api + 'products/category/tablets', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,

        }
    })
        .then(response => {
            setProducts(response.data.products);

        })
        .catch(error => {
            console.error(error)
        });
}

export const getSunglasses = (setProducts) => {
    const token = localStorage.getItem('token');

    axios.get(api + 'products/category/sunglasses', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,

        }
    })
        .then(response => {
            setProducts(response.data.products);

        })
        .catch(error => {
            console.error(error)
        });
}

export const getSportsAccessoriess = (setProducts) => {
    const token = localStorage.getItem('token');

    axios.get(api + 'products/category/sports-accessoriess', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,

        }
    })
        .then(response => {
            setProducts(response.data.products);

        })
        .catch(error => {
            console.error(error)
        });
}

export const getSmartphones = (setProducts) => {
    const token = localStorage.getItem('token');

    axios.get(api + 'products/category/smartphones', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,

        }
    })
        .then(response => {
            setProducts(response.data.products);

        })
        .catch(error => {
            console.error(error)
        });
}

export const getSkinCare = (setProducts) => {
    const token = localStorage.getItem('token');

    axios.get(api + 'products/category/skin-care', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,

        }
    })
        .then(response => {
            setProducts(response.data.products);

        })
        .catch(error => {
            console.error(error)
        });
}

export const getMotorcycle = (setProducts) => {
    const token = localStorage.getItem('token');

    axios.get(api + 'products/category/motorcycle', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,

        }
    })
        .then(response => {
            setProducts(response.data.products);

        })
        .catch(error => {
            console.error(error)
        });
}

export const getMobileAccessories = (setProducts) => {
    const token = localStorage.getItem('token');

    axios.get(api + 'products/category/mobile-accessories', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,

        }
    })
        .then(response => {
            setProducts(response.data.products);

        })
        .catch(error => {
            console.error(error)
        });
}

export const getMensWatches = (setProducts) => {
    const token = localStorage.getItem('token');

    axios.get(api + 'products/category/mens-watches', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,

        }
    })
        .then(response => {
            setProducts(response.data.products);

        })
        .catch(error => {
            console.error(error)
        });
}

export const getMensShoes = (setProducts) => {
    const token = localStorage.getItem('token');

    axios.get(api + 'products/category/mens-shoes', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,

        }
    })
        .then(response => {
            setProducts(response.data.products);

        })
        .catch(error => {
            console.error(error)
        });
}

export const getMensShirts = (setProducts) => {
    const token = localStorage.getItem('token');

    axios.get(api + 'products/category/mens-shirts', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,

        }
    })
        .then(response => {
            setProducts(response.data.products);

        })
        .catch(error => {
            console.error(error)
        });
}

export const getLaptops = (setProducts) => {
    const token = localStorage.getItem('token');

    axios.get(api + 'products/category/laptops', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,

        }
    })
        .then(response => {
            setProducts(response.data.products);

        })
        .catch(error => {
            console.error(error)
        });
}

export const getKitchenAccessories = (setProducts) => {
    const token = localStorage.getItem('token');

    axios.get(api + 'products/category/kitchen-accessories', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,

        }
    })
        .then(response => {
            setProducts(response.data.products);

        })
        .catch(error => {
            console.error(error)
        });
}

export const getHomeDecoration = (setProducts) => {
    const token = localStorage.getItem('token');

    axios.get(api + 'products/category/home-decoration', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,

        }
    })
        .then(response => {
            setProducts(response.data.products);

        })
        .catch(error => {
            console.error(error)
        });
}

export const getGroceries = (setProducts) => {
    const token = localStorage.getItem('token');

    axios.get(api + 'products/category/groceries', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,

        }
    })
        .then(response => {
            setProducts(response.data.products);

        })
        .catch(error => {
            console.error(error)
        });
}

export const getFurniture = (setProducts) => {
    const token = localStorage.getItem('token');

    axios.get(api + 'products/category/furniture', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,

        }
    })
        .then(response => {
            setProducts(response.data.products);

        })
        .catch(error => {
            console.error(error)
        });
}

export const getFragrances = (setProducts) => {
    const token = localStorage.getItem('token');

    axios.get(api + 'products/category/fragrances', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,

        }
    })
        .then(response => {
            setProducts(response.data.products);

        })
        .catch(error => {
            console.error(error)
        });
}

export const getBeauty = (setProducts) => {
    const token = localStorage.getItem('token');

    axios.get(api + 'products/category/beauty', {

        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,

        }
    })
        .then(response => {
            setProducts(response.data.products);

        })
        .catch(error => {
            console.error(error)
        });
}


// export const getAllProductsWithFilters = (limit, skip, setProducts) => {
//     const token = localStorage.getItem('token');

//     axios.get(api + `products?limit=${limit}&skip=${skip}`, {
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${token}`,

//         }
//     })
//         .then(response => {
//             setProducts(response.data.products);

//         })
//         .catch(error => {
//             console.error(error)
//         });
// }


export const getProuctbyID = (id, setProduct) => {
    const token = localStorage.getItem('token');

    axios.get(api + 'products/' + id, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,

        }
    })
        .then(response => {
            setProduct(response.data.products);

        })
        .catch(error => {
            console.error(error)

        });


}
export const getCategories = (categories, setCategories) => {
    const token = localStorage.getItem('token');

    axios.get(api + 'products/categories', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,

        }
    })
        .then(response => {
            const addedCategories = categories.concat(response.data)
            console.log(addedCategories)
            setCategories(addedCategories);

        })
        .catch(error => {
            console.error(error)

        });
}
export const getProductsByCategory = (categoryUrl, setProduct, setTotal) => {

    const token = localStorage.getItem('token');

    axios.get(categoryUrl, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,

        }
    })
        .then(response => {
            console.log(response)

            setProduct(response.data.products);
            setTotal(response.data.total)
        })
        .catch(error => {
            console.error(error)

        });


}

export const LoginWithUsername = (username, password) => {

    fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',

        },
        body: JSON.stringify({

            username: username,
            password: password,
            expiresInMins: 30,
        })
    })
        .then(res => res.json())
        .then(res => {
            console.log("User", res)
            localStorage.setItem("token", res.token);
            window.location.href = '/';

        });
}
