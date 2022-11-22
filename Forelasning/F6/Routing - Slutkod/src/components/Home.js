import { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";


class Navbar extends Component {

    render() {
        return (
        
        <div className="home">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur mollitia dolore vitae facilis nulla alias voluptatibus, animi quia? Molestiae nobis nihil fugit autem consequatur sed non praesentium temporibus eveniet hic.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur mollitia dolore vitae facilis nulla alias voluptatibus, animi quia? Molestiae nobis nihil fugit autem consequatur sed non praesentium temporibus eveniet hic.
            </p>

            <Link to="/test">Go to our cool page</Link>
       </div>
        
        );
    }
}

export default Navbar;