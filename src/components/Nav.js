import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom';
export default function Nav() {
    return (
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link className="nav-style" to="/about">
                  <li>About</li>  
                </Link>
                <Link className="nav-style" to="/shop">
                   <li>Shop</li> 
                </Link>
                
            </ul>
        </nav>
    )
}
