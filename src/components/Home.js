import React from 'react'
import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setBlogs(data);
        })
    }, []);

    return (
        <div className="Home">
            {blogs && <BlogList blogs={blogs} title="Recent posts" />}
        </div>
    )
}

export default Home
