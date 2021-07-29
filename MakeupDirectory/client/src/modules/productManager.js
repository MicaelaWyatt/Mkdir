import firebase from "firebase/app";
import "firebase/auth";

const baseUrl = '/api/UsersProducts'
export const getToken = () => firebase.auth().currentUser.getIdToken();

export const getProductById = (id) => {
    return getToken().then((token) =>
        fetch(`${baseUrl}/${id}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => res.json()));
}

export const getAllProductsFromCurrentUser = () => {
    return getToken().then((token) =>
        fetch(`${baseUrl}/myproducts`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res = res.json()));
}

export const addProduct = (product) => {
    return getToken().then((token) =>
        fetch(baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(product)
        }).then(res = res.json()));
};

export const deleteProduct (id) => {
    return getToken().then((token) =>
        fetch(`${baseUrl}/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }));
};

export const updateProduct = (id) => {
    return getToken().then((token) =>
        fetch(`${baseUrl}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(id)
        }));
}