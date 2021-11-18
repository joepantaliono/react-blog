import React from 'react'
import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: "My first post", body: "lorem ipsum", author: "joe pantaliono", id: 1 },
        { title: "My second post. My second post!", body: "lorem ipsum", author: "john smith", id: 2 },
        { title: "My third post", body: "lorem ipsum", author: "joe pantaliono", id: 3 },
    ])

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    return (
        <div className="Home">
            <BlogList blogs={blogs} title="Recent posts" handleDelete={handleDelete} />
        </div>
    )
}

export default Home
