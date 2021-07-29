import React, { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import { Link } from "react-router-dom";
import { deleteProduct, getAllProductsFromCurrentUser } from "../../modules/productManager";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        getAllProductsFromCurrentUser().then(products => setProducts(products));
    }

    const deleteAndSetProducts = (productId) => {
        deleteProduct(productId)
            .then(() => getProducts())

    }

    useEffect(() => {
        getProducts();
    }, []);
    // add link to when you have created add form 
    return (
        <>
            <Link to="/usersProducts/create" > Add Product </Link>
            <div>
                <div>
                    {products.map((product) => (
                        <ProductCard product={product} key={product.id} deleteAndSetProducts={deleteAndSetProducts} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default ProductList;