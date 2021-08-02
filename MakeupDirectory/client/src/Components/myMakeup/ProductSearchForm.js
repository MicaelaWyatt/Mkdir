import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { Button, Form, FromGroup, Label, Input, FormText, FormGroup } from "reactstrap";
import { addProduct, getAllProductsFromCurrentUser } from "../../modules/productManager";

const ProductSearchForm = () => {
    const [product, setProduct] = useState({});
    const [products, setProducts] = useState([]);
    // const { productId } = useParams();
    const history = useHistory();
    const location = useLocation();
    const { name } = location.state;
    const { brand } = location.state;
    const { image_link } = location.state;


    const getProducts = () => {
        getAllProductsFromCurrentUser().then(products => setProducts(products));
    }


    useEffect(() => {
        getProducts();
    }, []);

    const handleInputChange = (evt) => {
        const editedProduct = { ...product };
        let selectedValue = evt.target.value
        editedProduct[evt.target.id] = selectedValue
        setProduct(editedProduct);
    };


    const handleSave = (evt) => {
        evt.preventDefault();
        addProduct(product).then(() => {
            history.push("/myproducts");
        });
    };
    return (
        <>
            <Form>
                <FormGroup>
                    <Label>Product</Label>
                    <FormGroup>
                        <Input id="name" type="text" value={name} onChange={handleInputChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Input id="brand" type="text" placeholder="Name of Brand" value={brand} onChange={handleInputChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Input id="image_link" type="text" placeholder="image Url (optional)" value={image_link} onChange={handleInputChange}></Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for="categoryId">Category</Label >
                        <select type="select" name="select" id="categoryId" onChange={handleInputChange}>
                            <option >Categories</option>
                            <option value="1">Foundation</option>
                            <option value="2">Blush/Bronzer</option>
                            <option value="3">Lips</option>
                            <option value="4">Eyes</option>
                        </select>
                    </FormGroup>
                    <FormGroup>
                        <Label>Period After Opening</Label>
                        <br></br>
                        <input id="periodAfterOpening" type="text" onChange={handleInputChange}></input>
                    </FormGroup>
                </FormGroup>
                <Button onClick={handleSave}>Save</Button>
                {/* <Button onClick={handleCancelSave}>Cancel</Button> */}
            </Form>
        </>
    )
};

export default ProductSearchForm;