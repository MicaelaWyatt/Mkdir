import firebase from "firebase/app";
import "firebase/auth";

const baseUrl = '/api/Notes'
export const getToken = () => firebase.auth().currentUser.getIdToken();

export const getNotesByProductId = (id) => {
    return getToken().then((token) =>
        fetch(`${baseUrl}/${id}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => res.json()));
}

export const deleteNote = (id) => {
    return getToken().then((token) =>
        fetch(`${baseUrl}/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }));
};