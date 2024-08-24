import React, { useState } from 'react';
import {Editor, EditorState, convertToRaw } from 'draft-js';
import axios from 'axios';
import './index.css';

const TextEditor = ({ threadId }) => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const handleSave = async () => {
        const contentState = editorState.getCurrentContent();
        const rawContent = convertToRaw(contentState);

        try {
            await axios.post(`/reply/${threadId}`, {
                from: "email@example.com",
                to: "recipient@example.com",
                subject: "Subject",
                body: JSON.stringify(rawContent),
            });
            alert('Reply sent successfully!');
        } catch (error) {
            console.error('Error sending reply:', error);
        }
    };

    return (
        <div className="text-editor">
            <Editor
                editorState={editorState}
                onChange={setEditorState}
            />
            <button onClick={handleSave}>SAVE</button>
            <button>Variables</button>
        </div>
    );
};

export default TextEditor
