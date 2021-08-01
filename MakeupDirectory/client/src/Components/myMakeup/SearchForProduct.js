import React, { useEffect, useState } from "react";
import { ProductSearchCard } from "./ProductSearchCard"
import { ObjectFromAPI, loadEyeshadows } from "../../modules/apiManager";

const ProductSearch2 = () => {
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        return ObjectFromAPI().then(Obj => setProducts(Obj))

    }
    // jsonObj["values"].map(([html, text]) => (
    //     <div>
    //       <label htmlFor={html}>{text}</label>
    //     </div>
    //   ));
    // return listOfProducts.then(products => setProducts(products));

    // console.log(listOfProducts)

    console.log(products)


    // const handleinput = (e) => {
    //     let enteredValue = e.target.value;
    //     searchForProduct(enteredValue).then(products => setProducts(products));
    // }

    useEffect(() => {
        getProducts();
    }, []);
    // http://localhost:3000/usersProducts/create/search2

    return (
        <>
            <div>
                <input type="text" placeholder="search for product"  ></input><button >Search</button>
            </div>

            <div className="container">
                {/* <div className="row justify-content-center">
                    {products.map((product) => (
                        <ProductSearchCard product={product} key={product.id} />
                    ))}
                </div> */}
            </div>
        </>
    );
};

export default ProductSearch2;
