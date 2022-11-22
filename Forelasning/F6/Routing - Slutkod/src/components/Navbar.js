import { Component } from "react";
import "./Navbar.css";
import {Link } from "react-router-dom";


class Navbar extends Component {

    render() {
        return (
            <div className="nav-flex">
                <div className="item">
                    <Link to ="/">Home</Link>
                </div>
                <div className="item">
                    <Link to ="/list">List</Link>
                </div>
                <div className="item">
                    <Link to ="/about">About</Link>
                </div>
            </div>
       
        );
    }
}

export default Navbar;


/*
 <div className="navbar">
            <ul>
                <li><Link to ="/">Home</Link></li>
                <li><Link to ="/List">List</Link></li>
                <li><Link to ="/About">About</Link></li>
            </ul>
        </div>
        
*/
