import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";

export const ProductCard = ({ product, deleteAndSetProducts }) => {
    return (
        <Card>
            <CardBody>
                <h3>{product.name}</h3>
                <div>brand</div>
                <div>ImageLink</div>
                <div>Experation date</div>
                <br></br>
                <button onClick={() => deleteAndSetProducts(product.id)}>Delete</button>
                <Link to={`/post/${product.id}`}><button>Details</button></Link>
                <Link to={`/post/edit/${product.id}`}><button>Edit</button></Link>
            </CardBody>
        </Card>
    )
};

export default ProductCard;