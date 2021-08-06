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
            <div className="details"><h2 className="details-header">Details</h2> <button class="" id="back-button" onClick={handleBack} >Back to list</button></div>
            {(() => {
                if (product.categoryId === 1) {
                    return (
                        <Card id="details-card" className="Foundation">
                            <CardBody>
                                <h3 class="card-name">{product.name}</h3>
                                <div class="card-brand">{product.brand}</div>
                                <img class="card-image" src={product.image_link} alt="Product Image" width="200" height="180" ></img>
                                <h2 className="card-expiration"> EXPIRES ON {createDateTime}</h2>
                                <br></br>
                                {/* <button onClick={() => deleteAndSetProducts(product.id)}>Delete</button> */}
                                <Link to={`/usersProducts/${productId}/edit`}><button class="card-delete-button">Edit</button></Link>
                            </CardBody>
                        </Card>
                    )
                } else if (product.categoryId === 2) {
                    return (
                        <Card id="details-card" className="Blush Bronzer">
                            <CardBody>
                                <h3 class="card-name">{product.name}</h3>
                                <div class="card-brand">{product.brand}</div>
                                <img class="card-image" src={product.image_link} alt="Product Image" width="200" height="180" ></img>
                                <h2 className="card-expiration"> EXPIRES ON {createDateTime}</h2>
                                <br></br>
                                {/* <button onClick={() => deleteAndSetProducts(product.id)}>Delete</button> */}
                                <Link to={`/usersProducts/${productId}/edit`}><button class="card-delete-button">Edit</button></Link>
                            </CardBody>
                        </Card>
                    )
                } else if (product.categoryId === 3) {
                    return (
                        <Card id="details-card" className="Lips">
                            <CardBody>
                                <h3 class="card-name">{product.name}</h3>
                                <div class="card-brand">{product.brand}</div>
                                <img class="card-image" src={product.image_link} alt="Product Image" width="200" height="180" ></img>
                                <h2 className="card-expiration"> EXPIRES ON {createDateTime}</h2>
                                <br></br>
                                {/* <button onClick={() => deleteAndSetProducts(product.id)}>Delete</button> */}
                                <Link to={`/usersProducts/${productId}/edit`}><button class="card-delete-button">Edit</button></Link>
                            </CardBody>
                        </Card>
                    )
                } else if (product.categoryId === 4) {
                    return (
                        <Card id="details-card" className="Eyes">
                            <CardBody>
                                <h3 class="card-name">{product.name}</h3>
                                <div class="card-brand">{product.brand}</div>
                                <img class="card-image" src={product.image_link} alt="Product Image" width="200" height="180" ></img>
                                <h2 className="card-expiration"> EXPIRES ON {createDateTime}</h2>
                                <br></br>
                                {/* <button onClick={() => deleteAndSetProducts(product.id)}>Delete</button> */}
                                <Link to={`/usersProducts/${productId}/edit`}><button class="card-delete-button">Edit</button></Link>
                            </CardBody>
                        </Card>
                    )
                } else if (product.categoryId === 5) {
                    return (
                        <Card id="details-card" className="Skin Care">
                            <CardBody>
                                <h3 class="card-name">{product.name}</h3>
                                <div class="card-brand">{product.brand}</div>
                                <img class="card-image" src={product.image_link} alt="Product Image" width="200" height="180" ></img>
                                <h2 className="card-expiration"> EXPIRES ON {createDateTime}</h2>
                                <br></br>
                                {/* <button onClick={() => deleteAndSetProducts(product.id)}>Delete</button> */}
                                <Link to={`/usersProducts/${productId}/edit`}><button class="card-delete-button">Edit</button></Link>
                            </CardBody>
                        </Card>
                    )
                } else {
                    return (
                        <Card id="details-card" >
                            <CardBody>
                                <h3 class="card-name">{product.name}</h3>
                                <div class="card-brand">{product.brand}</div>
                                <img class="card-image" src={product.image_link} alt="Product Image" width="200" height="180" ></img>
                                <h2 className="card-expiration"> EXPIRES ON {createDateTime}</h2>
                                <br></br>
                                {/* <button onClick={() => deleteAndSetProducts(product.id)}>Delete</button> */}
                                <Link to={`/usersProducts/${productId}/edit`}><button class="card-delete-button">Edit</button></Link>
                            </CardBody>
                        </Card>
                    )
                }
            })()}

            <div className="notes">
                <h2 className="notes-header">Notes</h2>
                <Link className="add-notes" to={`/usersProducts/${productId}/createNote`} > Add Note </Link>
            </div>
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