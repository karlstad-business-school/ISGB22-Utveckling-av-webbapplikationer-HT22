import { Component } from "react";
import Reaction from './Reaction';

class ReactionContainer extends Component {

    constructor(){
        super();

        this.state = {
            pokemonList: Array()
        }

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
        ]

        this.state.dummyList = this.state.pokemonList;
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
        return (
            <div className="pokemon-container">
                <h1 className="pokemon-title">Pokemon list</h1>
                <div>
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
                            console.log(item, index);
                            return <Reaction key={index} name={item.name} id={item.id} image={item.image + "/" + item.id + ".png"} />
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

export default ReactionContainer;