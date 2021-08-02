import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { Button, Form, FromGroup, Label, Input, FormText, FormGroup } from "reactstrap";
import { addProduct, } from "../../modules/productManager";

const ProductSearchForm = () => {
    const [product, setProduct] = useState({
        name: "",
        brand: "",
        Image_link: "",
        categoryId: "",
        periodAfterOpening: ""
    });
    const history = useHistory();
    const location = useLocation();
    const { productObj } = location.state;



    const handleInputChange = (evt) => {
        const value = evt.target.value;
        const key = evt.target.id;

        const productCopy = { ...product };

        productCopy[key] = value;
        setProduct(productCopy);
    };

    const handleSave = (evt) => {
        evt.preventDefault();
        const productFromSearch = {
            name: productObj.displayName,
            brand: productObj.brandName,
            Image_link: productObj.heroImage,
            categoryId: product.categoryId,
            periodAfterOpening: product.periodAfterOpening
        }
        console.log(productFromSearch)
        addProduct(productFromSearch).then(() => {
            history.push("/usersProducts/myproducts");
        });
    };
    return (
        <>
            <Form>
                <FormGroup>
                    <Label>Product</Label>
                    <FormGroup>
                        <Input id="name" type="text" value={productObj.displayName} onChange={handleInputChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Input id="brand" type="text" placeholder="Name of Brand" value={productObj.brandName} onChange={handleInputChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Input id="image_link" type="text" placeholder="image Url (optional)" value={productObj.heroImage} onChange={handleInputChange}></Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for="categoryId">Category</Label >
                        <select type="select" name="select" value={product.categoryId} id="categoryId" onChange={handleInputChange}>
                            <option >Categories</option>
                            <option value="1">Foundation</option>
                            <option value="2">Blush/Bronzer</option>
                            <option value="3">Lips</option>
                            <option value="4">Eyes</option>
                            <option value="5">Skin Care</option>
                        </select>
                    </FormGroup>
                    <FormGroup>
                        <Label>Period After Opening</Label>
                        <br></br>
                        <input id="periodAfterOpening" type="text" value={product.periodAfterOpening} onChange={handleInputChange}></input>
                    </FormGroup>
                </FormGroup>
                <Button onClick={handleSave}>Save</Button>
                {/* <Button onClick={handleCancelSave}>Cancel</Button> */}
            </Form>
        </>
    )
};


export default ProductSearchForm;