import React, { useEffect, useState } from "react";
import { ProductSearchCard } from "./ProductSearchCard"
import { ObjectFromAPI, searchForProduct } from "../../modules/apiManager";

const ProductSearch = () => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState([]);
    const getProducts = () => {
        return ObjectFromAPI().then(Obj => {
            setProducts(Obj)
        })

    }


    console.log()


    const handleinput = (event) => {
        const newSearch = { ...search }
        let selectedVal = event.target.value
        newSearch[event.target.id] = selectedVal
        setSearch(newSearch)
    }

    const searchProducts = (event) => {
        event.preventDefault();
        console.log(search.searchparam)
        searchForProduct(search.searchparam)
            .then(response => {
                setProducts(response)
            })
    }

    useEffect(() => {
        getProducts();
    }, []);
    // http://localhost:3000/usersProducts/create/search2

    return (
        <>
            <div>
                <input id="searchparam" type="text" placeholder="search for product" onChange={handleinput}></input><button onClick={searchProducts} >Search</button>
            </div>

            <div className="container">
                <div className="row justify-content-center">
                    {products.map((product, index) => (
                        <ProductSearchCard product={product} key={index} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProductSearch;
