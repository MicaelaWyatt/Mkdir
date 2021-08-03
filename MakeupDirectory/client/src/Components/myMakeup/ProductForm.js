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
    const valueToAdd = value + 1;

    console.log(value)
    console.log(valueToAdd)

    const formatDate = (dateObject) => {
        const parts = {
            date: dateObject.getDate(),
            month: dateObject.getMonth() + valueToAdd,
            year: dateObject.getFullYear()
        };
        return `${parts.month}/${parts.date}/${parts.year}`
    }
    const myDate = new Date();
    const experationDateFormatted = formatDate(myDate);


    const handleSave = (evt) => {
        evt.preventDefault();

        const productFromFrom = {
            name: product.name,
            brand: product.brand,
            Image_link: product.image_link,
            categoryId: product.categoryId,
            experationDate: experationDateFormatted,
            periodAfterOpening: product.periodAfterOpening
        }
        console.log(productFromFrom)
        addProduct(productFromFrom).then(() => {
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