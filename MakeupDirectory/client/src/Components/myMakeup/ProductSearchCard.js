import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";

export const ProductSearchCard = ({ product }) => {
    return (
        <Card>
            <CardBody>
                <h3>{product.name}</h3>
                <div>{product.brand}</div>
                <img src={product.image_link} alt="Product Image" width="250" height="200" ></img>
                <br></br>
                {/* <Link to={`/usersProducts/${product.id}`}><button>select</button></Link> */}
            </CardBody>
        </Card >
    )
};

export default ProductSearchCard;