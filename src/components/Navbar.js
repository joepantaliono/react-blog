import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 id="logo-top">Joe Pantaliono</h1>
            <hr className="logo-hr"/>
            <h1 id="logo-bottom">Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New Blog</a>
            </div>
            <div className="subscribe">
                <h3>Subscribe</h3><br/>
                <div className="email-input">
                    <input type="email" placeholder="myemail@email.com"></input>
                    <button id="signup-button" type="submit">Sign Up</button>
                </div>
            </div>
            <h3>Recent Posts</h3>
            <div className="recent-posts">
                <p><a href="#">Post title will go here</a></p>
                <p><a href="#">Post title will go here</a></p>
                <p><a href="#">Post title will go here</a></p>
                <p><a href="#">Post title will go here</a></p>
                <p><a href="#">Post title will go here</a></p>
                <p><a href="#">Post title will go here</a></p>
                <p><a href="#">Post title will go here</a></p>
                <p><a href="#">Post title will go here</a></p>
            </div>
        </nav>
    )
}

export default Navbar
