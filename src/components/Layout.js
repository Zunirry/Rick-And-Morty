import React from 'react'
import './styles/Layout.css'
import { Link } from 'react-router-dom'
function Layout() {
    return (
        <nav className="navbar navbar-dark">
            <div className="container">

                <Link to="/" className="navbar-brand" >Where in the Stars?</Link>
            </div>

        </nav>
    )
}

export default Layout