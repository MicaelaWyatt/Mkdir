import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link, useHistory } from "react-router-dom";
import { getProductById, getProductByIdWithNotes } from '../../modules/productManager';
import { Card, CardBody } from "reactstrap";
import { deleteNote, getNotesByProductId } from '../../modules/notesManager';
import { NoteCard } from "../Notes/NoteCard";
import './ProductList.css';

export const ProductDetails = () => {
    const [product, setPost] = useState({});
    const { productId } = useParams();
    const history = useHistory();
    const [notes, setNotes] = useState([]);

    const getAllNotes = () => {
        getNotesByProductId(productId).then(notes => setNotes(notes));
    }

    const getProduct = () => {
        getProductByIdWithNotes(productId)
            .then(product => {
                setPost(product)
            })
    }
    const deleteAndSetNotes = (noteId) => {
        deleteNote(noteId)
            .then(() => getAllNotes())

    }
    const handleBack = (evt) => {
        evt.preventDefault();
        history.push("/usersProducts/myproducts");

    };


    useEffect(() => {
        getProduct();
        getAllNotes();
    }, [])

    const date = new Date(product.experationDate);
    const createDateTime = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();

    return (
        <>
            <div className="details"><h2>Details</h2> <button class="" id="back-button" onClick={handleBack} >Back to list</button></div>
            <Card>
                <CardBody>
                    <h3>{product.name}</h3>
                    <div>{product.brand}</div>
                    <img src={product.image_link} alt="Product Image" width="150" height="100" ></img>
                    <div> EXPIRES ON {createDateTime}</div>
                    <br></br>
                    {/* <button onClick={() => deleteAndSetProducts(product.id)}>Delete</button> */}
                    <Link to={`/usersProducts/${productId}/edit`}><button>Edit</button></Link>
                </CardBody>
            </Card>
            <h2>Notes</h2>
            <Link to={`/usersProducts/${productId}/createNote`} > Add Note </Link>
            <div>
                <div>
                    {notes.map((note) => (
                        <NoteCard note={note} key={note.id} deleteAndSetNotes={deleteAndSetNotes} />
                    ))}
                </div>
            </div>

        </>
    )
}