import { Component } from "react";
import Header from "./Header";
import ReactionContainer from './ReactionContainer';
import Navbar from "./Navbar";
import Home from "./Home";
import Error from "./Error";
import About from "./About";
import {Routes, Route} from "react-router-dom";
import SingleView from "./SingleView";

class UIRoot extends Component {
    getReactionContainer(){
        return <ReactionContainer />
    }

    render() {
        return (
        
        <>
            <Header />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/list" element={this.getReactionContainer()} />
                <Route path="/list/:range" element={this.getReactionContainer()} />
                <Route exact path="/view/:id" element={<SingleView/>} />
                <Route path="/view/:id/:back" element={<SingleView/>} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </>
        
        );
    }
}
export default UIRoot;