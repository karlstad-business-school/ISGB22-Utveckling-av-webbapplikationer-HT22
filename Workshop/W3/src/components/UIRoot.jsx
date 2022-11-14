import { Component } from "react";
import Header from "./Header";
import ReactionContainer from './ReactionContainer';

class UIRoot extends Component {

    render() {
        return (
        
        <>
            <Header />
            <ReactionContainer />
        </>
        
        );
    }
}

export default UIRoot;