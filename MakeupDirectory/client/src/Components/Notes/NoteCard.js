import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";

export const NoteCard = ({ note, deleteAndSetNotes }) => {
    return (
        <Card>
            <CardBody>
                <h3>{note.content}</h3>
                <br></br>
                <button onClick={() => deleteAndSetNotes(note.id)}>Delete</button>
                {/* <Link to={`/usersProducts/${product.id}`}><button>Details</button></Link> */}
                <Link to={`/usersProducts/${note.productId}/notes/${note.id}/edit`}><button>Edit</button></Link>
            </CardBody>
        </Card>
    )
};

export default NoteCard;