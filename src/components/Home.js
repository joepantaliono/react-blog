import React from 'react'
import { useState } from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: "My first post", body: "lorem ipsum", author: "joe pantaliono", id: 1 },
        { title: "My second post. My second post!", body: "lorem ipsum", author: "joe pantaliono", id: 2 },
        { title: "My third post", body: "lorem ipsum", author: "joe pantaliono", id: 3 }
    ])

    return (
        <div className="home-content">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>{blog.author}</p>
                </div>
            ))}
        </div>
    )
}

export default Home
