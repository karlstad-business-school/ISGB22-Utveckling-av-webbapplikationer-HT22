import { Component } from "react";


class Main extends Component {
    constructor(props){
        super(props);
         this.state = {
            citat : ''
         }
    }

    render() {
        return(
            <>
            <div className="jumbotron text-center"><h1>Trump says</h1></div>
            <div className="container text-center">
                <button onClick={this.getCitat} className="btn btn-lg btn-danger">Hämta ett citat!</button>
            </div>
            <div className="lead text-center mt-5">{this.state.citat}</div>
                
            </>
        )
    }

    getCitat = (evt)=> {
        console.log(evt);
        fetch('https://api.whatdoestrumpthink.com/api/v1/quotes/random').then((response)=>response.json().then((data=>{
            console.log(data);
            this.setState({ citat : data.message });
        })));

    }


}
export default Main;