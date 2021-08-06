import React, { useEffect, useState } from "react";
import { ProductSearchCard } from "./ProductSearchCard"
import { ObjectFromAPI, searchForProduct } from "../../modules/apiManager";
import { useHistory } from "react-router-dom";
import './Search.css';



const ProductSearch = () => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState([]);
    const history = useHistory();
    const getProducts = () => {
        return ObjectFromAPI().then(Obj => {
            setProducts(Obj)
        })

    }

    const handleinput = (event) => {
        const newSearch = { ...search }
        let selectedVal = event.target.value
        newSearch[event.target.id] = selectedVal
        setSearch(newSearch)
    }

    const handleManual = (evt) => {
        evt.preventDefault();
        history.push("/usersProducts/create/manual");

    };

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
            <h1 className="api-search-header">Search for product</h1>
            <a className="no-product" href="http://localhost:3000/usersProducts/create/manual">cant find the product you were looking for?</a>
            <div className="search-div">
                <input id="searchparam" type="text" placeholder="search for product" onChange={handleinput}></input><button onClick={searchProducts}  >Search</button>
            </div>

            <div className="container">
                {/* {productCheck()} */}
                <div className="row justify-content-center">
                    {!products ?
                        <>
                            <div className="error">
                                <h3>We're sorry. We were not able to find a match.</h3>
                                <button className="enter-manually" onClick={handleManual}  >Enter Manually</button>

                            </div>

                        </>
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
