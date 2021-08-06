import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Button, Form, FromGroup, Label, Input, FormText, FormGroup } from "reactstrap";
import { getProductById, updateProduct } from "../../modules/productManager";

const EditProduct = () => {
    const [product, setProduct] = useState({});
    const { productId } = useParams();
    const history = useHistory();


    const handleInputChange = (evt) => {
        const editedProduct = { ...product };
        let selectedValue = evt.target.value
        editedProduct[evt.target.id] = selectedValue

        setProduct(editedProduct);
    };


    const handleCancelSave = (evt) => {
        evt.preventDefault();
        history.push(`/usersProducts/${productId}`);
    };

    useEffect(() => {
        getProductById(productId).then(setProduct)
    }, [productId])


    const handleSaveEvent = (evt) => {
        evt.preventDefault();

        if (product.name === "" || product.brand === "" || product.categoryId === "" || product.periodAfterOpening === "") {
            window.alert("Please fill in all feilds")
        } else {
            updateProduct(product)
                .then(() => history.push(`/usersProducts/${productId}`));
        };
    };


    return (
        <>
            <div className="form">
                <Form>
                    <FormGroup>
                        <h2 className="form-header"> Product</h2>
                        <FormGroup>
                            <Input className="input" id="name" type="text" value={product.name} onChange={handleInputChange}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Input className="input" id="brand" type="text" placeholder="Name of Brand" value={product.brand} onChange={handleInputChange}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Input className="input" id="image_link" type="text" placeholder="image Url (optional)" value={product.image_link} onChange={handleInputChange}></Input>
                        </FormGroup>

                        <FormGroup className="category-select">
                            <Label className="descriptor" for="categoryId">Category</Label >
                            <select type="select" name="select" id="categoryId" value={product.categoryId} onChange={handleInputChange}>
                                <option >Categories</option>
                                <option value="1">Foundation</option>
                                <option value="2">Blush/Bronzer</option>
                                <option value="3">Lips</option>
                                <option value="4">Eyes</option>
                                <option value="5">Skin Care</option>
                            </select>
                        </FormGroup>
                        <FormGroup className="PAO">
                            <Label className="descriptor">Period After Opening</Label><img src="http://www.paosymbol.com/assets/pao-db0bb06b97a84fe5be6986acc45f99452925410732f7fee87f8108d9f810c64c.svg" alt="Period After Opening" width="30px" height="30px"></img>
                            <br></br>
                            <input id="periodAfterOpening" type="text" value={product.periodAfterOpening} onChange={handleInputChange}></input>
                        </FormGroup>
                    </FormGroup>
                    <FormGroup className="save-and-cancel">
                        <button className="save" id="update-save" onClick={handleSaveEvent}>Save</button>
                        <button className="cancel" onClick={handleCancelSave}>Cancel</button>
                    </FormGroup>
                </Form>
            </div>
        </>
    )
}

export default EditProduct