import { Component } from "react";
import Reaction from './Reaction';
import {Link, useParams } from "react-router-dom";


function withParams(Component){
    return props => <Component {...props} params={useParams()} />
}
class ReactionContainer extends Component {

    constructor(props){
        super(props);

        this.state = {
            pokemonList: Array()
        }

        console.log(this.props.params.range);
        this.setDummy();
    }

    setDummy(){
        this.state.pokemonList = [
            {
                "id": 1,
                "name": "Bulbasaur",
                "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon"
            },
            {
                "id": 2,
                "name": "Ivysaur",
                "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon"
            },

            {
                "id": 3,
                "name": "Venusaur",
                "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon"
            }
        ];

        if(this.props.params.range != null){
            let ids = this.props.params.range.split("-");
            console.log(ids);
            let filterList = null;

            if(ids.length == 1){
                filterList = this.state.pokemonList.filter(p => p.id == ids[0]);
            }else if(ids.length == 2){
                filterList = this.state.pokemonList.filter(p => p.id >= ids[0] && p.id <= ids[1]);
            }else{
                filterList = this.state.pokemonList;
            }

            this.state.dummyList = filterList;
        }else{
            this.state.dummyList = this.state.pokemonList;   
        }
    }


    filter = (e) =>{
        let text = e.target.value.toLowerCase();
        let pokemons = this.state.pokemonList;

        let search = pokemons.filter(p => p.name.toLowerCase().includes(text));

        this.setState({ 
            dummyList: search
        });
    }

    render() {

        let back = "";
        if(this.props.params.range != null){
            back = this.props.params.range;
        }

        return (
            <div className="pokemon-container">
                <h1 className="pokemon-title">Pokemon list</h1>
                <div className="pokemon-search">
                    <input type='text' onChange={this.filter}/>
                </div>

                {

                    /*

                        if(this.state.dummyList.length <= 0){
                            <h2>..</h2>
                        }else{
                            Kod här...
                        }
                    */


                    this.state.dummyList.length <= 0 ? (
                        <h2>No Pokémons found</h2>
                    ) : (
                        this.state.dummyList.map((item, index) => {
                            return <Reaction key={index} name={item.name} id={item.id} image={item.image + "/" + item.id + ".png"} back={back} />
                        })
                    )


                    
                }

                
                
            </div>
        );
    }

}

/*
    return (
        <div>
          {
              (() => {
                if (someCase) {
                  return (
                    <div>someCase</div>
                  )
                } else if (otherCase) {
                  return (
                    <div>otherCase</div>
                  )
                } else {
                  return (
                    <div>catch all</div>
                  )
                }
              })()
          }
        </div>
      )
    }
*/

export default withParams(ReactionContainer);