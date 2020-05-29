import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <nav className='main-nav'>
                <ul>
                    <li><Link to='/V1/681' className="nav-link" >/v1</Link></li>
                    <li><Link to='/V2/681' className="nav-link">/v2</Link></li>
                    <li><Link to='/V3/681' className="nav-link">/v3</Link></li>
                    <li><Link to='/V4/681' className="nav-link">/v4</Link></li>
                    <li><Link to='/V5/681' className="nav-link">/v5</Link></li>
                    <li><Link to='/V6/681' className="nav-link">/v6</Link></li>
                </ul>
            </nav>
        );
    }
}


export default Nav;