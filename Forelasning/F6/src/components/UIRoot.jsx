import { Component } from "react";
import Header from "./Header";
import ReactionContainer from './ReactionContainer';

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
            <Routes>
                <Route path="/" element={this.getReactionContainer()} />
                <Route path="/view/:id" element={<SingleView abc="123"/>} />
            </Routes>
        </>
        
        );
    }
}

export default UIRoot;