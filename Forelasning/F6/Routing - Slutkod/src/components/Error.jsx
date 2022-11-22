import { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";


class Navbar extends Component {

    render() {
        return (
        
        <div className="home">
            <h1>404</h1>
            <p>Page was not found!</p>
            <Link to="/">Go back</Link>
       </div>
        
        );
    }
}

export default Navbar;