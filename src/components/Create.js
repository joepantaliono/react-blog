import React, { useState } from 'react'
import { useHistory } from 'react-router';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added')
            history.push('/')
        })
    }

    return (
        <div className="Create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input type="text" required
                onChange={(e) => {
                    setTitle(e.target.value)
                }}></input>
                <label>Blog author:</label>
                <input type="text" required
                onChange={(e) => {
                    setAuthor(e.target.value)
                }}></input>
                <label>Blog body:</label>
                <textarea required
                onChange={(e) => {
                    setBody(e.target.value)
                }}></textarea>
                <button type="submit">Add blog</button>
            </form>
        </div>
    )
}

export default Create
