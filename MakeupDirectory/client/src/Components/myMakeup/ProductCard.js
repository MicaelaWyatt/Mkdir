import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";
import './ProductList.css';

export const ProductCard = ({ product, deleteAndSetProducts }) => {
    const date = new Date(product.experationDate);
    const createDateTime = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
    console.log(product.categoryId)
    return (
        <Card className={product.category.name}>
            <CardBody className={product.categoryId} >
                <h3 class="card-name">{product.name}</h3>
                <div class="card-brand">{product.brand}</div>
                <img class="card-image" src={product.image_link} alt="Product Image" width="200" height="180" ></img>
                <div className="card-expiration"> EXPIRES ON {createDateTime}</div>
                <br></br>
                <button class="card-delete-button" onClick={() => deleteAndSetProducts(product.id)}>Delete</button>
                <Link class="card-details-button" to={`/usersProducts/${product.id}`}><button>Details</button></Link>
            </CardBody>
        </Card >
    )
};

export default ProductCard;