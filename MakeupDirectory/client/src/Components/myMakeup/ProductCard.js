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
                <div>{product.image_link}</div>
                <div> EXPIRES ON {product.experationDate}</div>
                <br></br>
                <button onClick={() => deleteAndSetProducts(product.id)}>Delete</button>
                <Link to={`/usersProducts/${product.id}`}><button>Details</button></Link>
                <Link to={`/post/edit/${product.id}`}><button>Edit</button></Link>
            </CardBody>
        </Card>
    )
};

export default ProductCard;