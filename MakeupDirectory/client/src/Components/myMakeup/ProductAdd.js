import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Card, CardBody } from "reactstrap";

export const ProductAdd = () => {
    const history = useHistory();

    const handleManual = (evt) => {
        evt.preventDefault();
        history.push("/usersProducts/create/manual");

    };

    const handleSearch = (evt) => {
        evt.preventDefault();
        history.push("/usersProducts/create/search");

    };

    return (
        <>
            <h2>New Product</h2>
            <div> <button onClick={handleSearch} >Search for product</button> <h6>or</h6> <button onClick={handleManual}  >Enter Manually</button></div>
        </>
    )
};

export default ProductAdd;