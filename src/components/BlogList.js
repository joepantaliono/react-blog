import React from 'react'
import { Link } from 'react-router-dom';

const BlogList = ({ blogs, title }) => {
    return (
        <div className="home">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h3>{blog.title}</h3>
                    </Link>
                    <p>{blog.body}</p>
                    <hr/>
                </div>
            ))}
        </div>
    )
}

export default BlogList
 