import React from 'react'

const BlogList = ({ blogs, title, handleDelete }) => {
    return (
        <div className="home">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h3>{blog.title}</h3>
                    <p>{blog.author}</p>
                    <button onClick={() => handleDelete(blog.id)}>delete blog</button>
                    <hr/>
                </div>
            ))}
        </div>
    )
}

export default BlogList
 