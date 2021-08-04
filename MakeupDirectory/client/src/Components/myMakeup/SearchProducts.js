import React, { useEffect, useState } from "react";
import { ProductSearchCard } from "./ProductSearchCard"
import { getListOfProducts } from "../../modules/apiManager";

const ProductSearch1 = () => {
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        return getListOfProducts().then(productsFromApi => setProducts(productsFromApi));
    }

    console.log(getListOfProducts)


    // const handleinput = (e) => {
    //     let enteredValue = e.target.value;
    //     searchForProduct(enteredValue).then(products => setProducts(products));
    // }

    useEffect(() => {
        getProducts();
    }, []);


    return (
        <>
            <div>
                <input type="text" placeholder="search for product"  ></input><button >Search</button>
            </div>

            <div className="container">
                <div className="row justify-content-center">
                    {products.map((product) => (
                        <ProductSearchCard product={product} key={product.id} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProductSearch1;
