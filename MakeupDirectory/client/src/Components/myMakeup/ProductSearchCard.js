import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";

export const ProductSearchCard = ({ product }) => {


    return (
        <Card>
            <CardBody>
                <h3>{product.displayName}</h3>
                <div>{product.brandName}</div>
                <img src={product.heroImage} alt="Product Image" width="150" height="100" ></img>
                <br></br>
                <Link to={{
                    pathname: '/usersProducts/create/search/form',
                    state: {
                        productObj: product
                    }
                }} ><button>select</button></Link>
            </CardBody>
        </Card >
    )
};

export default ProductSearchCard;