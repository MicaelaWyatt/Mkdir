import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Button, Form, FromGroup, Label, Input, FormText, FormGroup } from "reactstrap";
import { getNoteById, updateNote } from "../../modules/notesManager";

const EditNote = () => {
    const [note, setNote] = useState({});
    const { noteId } = useParams();

    const history = useHistory();

    const handleInputChange = (evt) => {
        const editedNote = { ...note };
        let selectedValue = evt.target.value
        editedNote[evt.target.id] = selectedValue
        setNote(editedNote)
    };

    const handleSaveEvent = (evt) => {
        evt.preventDefault();
        if (note.content === "") {
            window.alert("Please fill in all fields")
        } else {
            updateNote(note)
                .then(() => history.push(`/usersProducts/${note.productId}`));
        };
    };

    const handleCancelSave = (evt) => {
        evt.preventDefault();
        history.push(`/usersProducts/${note.productId}`);
    };
    // This uses the param a the the top of the page which also uses the param from the update funtion in the manager
    useEffect(() => {
        getNoteById(noteId).then(setNote)
    }, [noteId]);

    return (
        <Form>
            <FormGroup>
                <Label for="content">Content</Label>
                <Input type="text" id="content"
                    value={note.content}
                    onChange={handleInputChange} />
            </FormGroup>
            <Button className="btn btn-primary" onClick={handleSaveEvent}>Save</Button>
            <Button onClick={handleCancelSave}>Cancel</Button>
        </Form>
    )
};

export default EditNote;