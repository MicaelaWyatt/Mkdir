import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";

export const ProductCard = ({ product, deleteAndSetProducts }) => {
    return (
        <Card>
            <CardBody>
                <h3>{product.name}</h3>
                <div>{product.brand}</div>
                <img src={product.image_link} alt="Product Image" width="150" height="100" ></img>
                <div> EXPIRES ON {product.experationDate}</div>
                <br></br>
                <button onClick={() => deleteAndSetProducts(product.id)}>Delete</button>
                <Link to={`/usersProducts/${product.id}`}><button>Details</button></Link>
            </CardBody>
        </Card>
    )
};

export default ProductCard;