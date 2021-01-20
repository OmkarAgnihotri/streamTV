import React from 'react';
import { Link } from 'react-router-dom';

import GoogleAuth from './GoogleAuth';

const Header = () => {


    return (
        <nav className="navbar navbar-expand-lg text-primary bg-light">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand" >StreamTV</Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <div className="navbar-link">
                            <Link to="/" className="nav-link">All streams</Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <GoogleAuth />
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;