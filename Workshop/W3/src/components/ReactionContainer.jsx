import { Component } from "react";
import Reaction from './Reaction';

class ReactionContainer extends Component {

    testar1() {
        return 1;
    }

    testar2() {
        return 2;
    }

    testar3() {

        let dummy = '';

        for(let i = 0; i < 10; i++) {
            dummy += ' ' + i;
        }

        return dummy;

    }


    render() {
        return (

            <div>

                <h1>Pokemon list</h1>
                <div>

                    <input type='text' />

                </div>

                <Reaction />

            </div>


        );
    }

}

export default ReactionContainer;