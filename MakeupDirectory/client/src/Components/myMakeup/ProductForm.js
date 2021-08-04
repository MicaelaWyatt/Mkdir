import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Button, Form, FromGroup, Label, Input, FormText, FormGroup } from "reactstrap";
import { addProduct, getAllProductsFromCurrentUser } from "../../modules/productManager";

const ProductForm = () => {
    const [product, setProduct] = useState({
        name: "",
        brand: "",
        Image_link: "",
        categoryId: "",
        experationDate: "",
        periodAfterOpening: ""
    });
    const [products, setProducts] = useState([]);
    const history = useHistory();


    const getProducts = () => {
        getAllProductsFromCurrentUser().then(products => setProducts(products));
    }


    useEffect(() => {
        getProducts();
    }, []);

    const handleInputChange = (evt) => {
        const value = evt.target.value;
        const key = evt.target.id;

        const productCopy = { ...product };
        productCopy[key] = value;
        setProduct(productCopy);
    };

    const value = parseInt(product.periodAfterOpening);


    console.log(value)



    function dateWithMonthsDelay(months) {
        const date = new Date()
        date.setMonth(date.getMonth() + months)
        console.log(date)
        return date

    }


    const handleSave = (evt) => {
        evt.preventDefault();

        const productFromForm = {
            name: product.name,
            brand: product.brand,
            Image_link: product.image_link,
            categoryId: product.categoryId,
            experationDate: dateWithMonthsDelay(value),
            periodAfterOpening: product.periodAfterOpening
        }
        console.log(productFromForm)
        addProduct(productFromForm).then(() => {
            history.push("/usersProducts/myproducts");
        });
    };


    return (
        <>
            <Form>
                <FormGroup>
                    <Label>Product</Label>
                    <FormGroup>
                        <Input id="name" type="text" placeholder="Name of Product" value={product.name} onChange={handleInputChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Input id="brand" type="text" placeholder="Name of Brand" value={product.brand} onChange={handleInputChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Input id="image_link" type="text" placeholder="image Url (optional)" value={product.image_link} onChange={handleInputChange}></Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for="categoryId">Category</Label >
                        <select type="select" name="select" id="categoryId" value={product.categoryId} onChange={handleInputChange}>
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
                <Button onClick={handleSave}>Submit</Button>
            </Form>
        </>
    );
};

export default ProductForm;