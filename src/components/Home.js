import React from 'react'
import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: "My first post", body: "lorem ipsum", author: "joe pantaliono", id: 1 },
        { title: "My second post. My second post!", body: "lorem ipsum", author: "john smith", id: 2 },
        { title: "My third post", body: "lorem ipsum", author: "joe pantaliono", id: 3 },
    ])

    return (
        <div className="Home">
            <BlogList blogs={blogs} title="All Blogs" />
            <BlogList blogs={blogs.filter(blog => blog.author === "joe pantaliono")} title="Joe's Blogs" />
        </div>
    )
}

export default Home
