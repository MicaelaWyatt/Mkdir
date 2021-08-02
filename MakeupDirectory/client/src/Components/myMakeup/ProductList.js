import React, { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import { Link } from "react-router-dom";
import { deleteProduct, getAllProductsFromCurrentUser, getAllProductsFromUserByCategory } from "../../modules/productManager";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        getAllProductsFromCurrentUser().then(products => setProducts(products));
    }

    const deleteAndSetProducts = (productId) => {
        deleteProduct(productId)
            .then(() => getProducts())

    }
    const handleInputChange = (evt) => {
        const value = evt.target.value;
        console.log(value)
        if (value < 1) {
            getProducts();
        } else {
            getAllProductsFromUserByCategory(value).then(products => setProducts(products))
        }
    }

    useEffect(() => {
        getProducts();
    }, []);
    // add link to when you have created add form 
    return (
        <>
            <Link to="/usersProducts/create" > Add Product </Link>
            <div>
                <select onChange={handleInputChange} type="select" name="select" id="categoryId" >
                    <option value="0" >My Products</option>
                    <option value="1">Foundation</option>
                    <option value="2">Blush/Bronzer</option>
                    <option value="3">Lips</option>
                    <option value="4">Eyes</option>
                    <option value="5">Skin Care</option>
                </select>
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