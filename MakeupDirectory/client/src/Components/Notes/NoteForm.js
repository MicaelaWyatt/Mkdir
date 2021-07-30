import React, { useState } from 'react';
import { useHistory, useParams } from "react-router";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { addNote } from '../../modules/notesManager';

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
        <Form>
            <FormGroup>
                <Label for="content">Content</Label>
                <Input type="text" id="content" placeholder="Comment Content"
                    value={note.content}
                    onChange={handleInputChange} />
            </FormGroup>
            <Button className="btn btn-primary" onClick={handleClickSaveNote}>Submit</Button>
        </Form>
    );
};

export default NoteForm;