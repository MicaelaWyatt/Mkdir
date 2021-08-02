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

    // const productCheck = () => {
    //     if (products === undefined) {
    //         return (
    //             <h1>no products</h1>
    //         )
    //     }
    //     else {
    //         <div className="row justify-content-center">
    //             {products?.map((product, index) => (
    //                 <ProductSearchCard product={product} key={index} />
    //             ))}
    //         </div>

    //     }
    // }



    const handleinput = (event) => {
        const newSearch = { ...search }
        let selectedVal = event.target.value
        newSearch[event.target.id] = selectedVal
        setSearch(newSearch)
    }
    // console.log(products)

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
                <input id="searchparam" type="text" placeholder="search for product" onChange={handleinput}></input><button onClick={searchProducts}  >Search</button>
            </div>

            <div className="container">
                {/* {productCheck()} */}
                <div className="row justify-content-center">
                    {!products ?
                        <h2>no results</h2>
                        :
                        ""}
                    {products?.map((product, index) => (
                        <ProductSearchCard product={product} key={index} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProductSearch;
