// import React, { useEffect, useState } from "react";
// import { useHistory, useParams } from "react-router-dom";
// import { Button, Form, FromGroup, Label, Input, FormText, FormGroup } from "reactstrap";
// import { getProductById, updateProduct } from "../../modules/productManager";

// const EditProduct = () => {
//     const [product, setProduct] = useState({});
//     const { productId } = useParams();
//     const history = useHistory();

//     const getProductToEdit = () => {

//     }

//     const handleInputChange = (evt) => {
//         const editedProduct = { ...product };
//         let selectedValue = evt.target.value
//         editedProduct[evt.target.id] = selectedValue
//         setProduct(editedProduct);
//     };

//     const handleSaveEvent = (evt) => {
//         evt.preventDefault();

//         if (product.name === "" || product.brand === "" || product.categoryId === "" || product.periodAfterOpening === "") {
//             window.alert("Please fill in all feilds")
//         } else {
//             updateProduct(product)
//                 .then(() => history.push(`/usersProducts/${productId}`));
//         };
//     };

//     const handleCancelSave = (evt) => {
//         evt.preventDefault();
//         history.push(`/usersProducts/${productId}`);
//     };

//     useEffect(() => {
//         getProductById(productId).then(setProduct)
//     }, [productId])

//     return (
//         <>
//             <Form>
//                 <FormGroup>
//                     <Label>Product</Label>
//                     <FormGroup>
//                         <Input id="name" type="text" value={product.name} onChange={handleInputChange}></Input>
//                     </FormGroup>
//                     <FormGroup>
//                         <Input id="brand" type="text" placeholder="Name of Brand" value={product.brand} onChange={handleInputChange}></Input>
//                     </FormGroup>
//                     <FormGroup>
//                         <Input id="image_link" type="text" placeholder="image Url (optional)" value={product.image_link} onChange={handleInputChange}></Input>
//                     </FormGroup>

//                     <FormGroup>
//                         <Label for="categoryId">Category</Label >
//                         <select type="select" name="select" id="categoryId" value={product.categoryId} onChange={handleInputChange}>
//                             <option >Categories</option>
//                             <option value="1">Foundation</option>
//                             <option value="2">Blush/Bronzer</option>
//                             <option value="3">Lips</option>
//                             <option value="4">Eyes</option>
//                         </select>
//                     </FormGroup>
//                     <FormGroup>
//                         <Label>Period After Opening</Label>
//                         <br></br>
//                         <input id="periodAfterOpening" type="text" value={product.periodAfterOpening} onChange={handleInputChange}></input>
//                     </FormGroup>
//                 </FormGroup>
//                 <Button onClick={handleSaveEvent}>Save</Button>
//                 <Button onClick={handleCancelSave}>Cancel</Button>
//             </Form>
//         </>
//     )
// }

// export default EditProduct