import React, { useState } from 'react';
import { useHistory, useParams } from "react-router";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { addNote } from '../../modules/notesManager';
import './Notes.css';

export const NoteForm = () => {
    const { productId } = useParams();
    const emptyNote = {
        productId: productId,
        content: "",
    };

    const [note, setNote] = useState(emptyNote);
    const history = useHistory();

    const handleInputChange = (event) => {
        const newNote = { ...note };
        let selectedVal = event.target.value
        newNote[event.target.id] = selectedVal
        setNote(newNote)
    };

    const handleClickSaveNote = (event) => {
        event.preventDefault()
        addNote(note)
            .then(() => history.push(`/usersProducts/${productId}`))
    };

    return (
        <Form className="note-form">
            <FormGroup>
                <h2 className="form-header"> New Note</h2>
                <Input className="input" type="text" id="content" placeholder="Content"
                    value={note.content}
                    onChange={handleInputChange} />
            </FormGroup>
            <button className="save" onClick={handleClickSaveNote}>Submit</button>
        </Form>
    );
};

export default NoteForm;