import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from "react-router-dom";
import { getProductById } from '../../modules/productManager';
import { Card, CardBody } from "reactstrap";
import { deleteNote, getNotesByProductId } from '../../modules/notesManager';
import { NoteCard } from "../Notes/NoteCard";

export const ProductDetails = () => {
    const [product, setPost] = useState({});
    const { productId } = useParams();

    const [notes, setNotes] = useState([]);

    const getAllNotes = () => {
        getNotesByProductId(productId).then(notes => setNotes(notes));
    }

    const getProduct = () => {
        getProductById(productId)
            .then(product => {
                setPost(product)
            })
    }
    const deleteAndSetNotes = (noteId) => {
        deleteNote(noteId)
            .then(() => getAllNotes())

    }

    useEffect(() => {
        getProduct();
        getAllNotes();
    }, [])

    return (
        <>
            <h2>Details</h2>
            <Card>
                <CardBody>
                    <h3>{product.name}</h3>
                    <div>{product.brand}</div>
                    <div>{product.image_link}</div>
                    <div> EXPIRES ON {product.experationDate}</div>
                    <br></br>
                    {/* <button onClick={() => deleteAndSetProducts(product.id)}>Delete</button> */}
                    <Link to={`/post/edit/${product.id}`}><button>Edit</button></Link>
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