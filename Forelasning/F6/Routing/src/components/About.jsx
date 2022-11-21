import { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";


class Navbar extends Component {

    render() {
        return (
        
        <div className="home">
            <h1>About us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing, elit. Consequatur animi ea quod nobis fuga sapiente ut nisi vel, asperiores expedita perferendis inventore qui assumenda quia sequi. Est amet ratione asperiores?</p>
            <Link to="/list">Pokemon list</Link>
       </div>
        
        );
    }
}

export default Navbar;