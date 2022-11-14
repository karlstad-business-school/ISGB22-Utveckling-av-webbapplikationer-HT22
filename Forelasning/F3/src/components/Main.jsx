import { Component } from 'react';

class Main extends Component{
  constructor(props){
    super(props);
  }


  render() {
      //Skapar CSS för färg och höjd
      let css = { 
        backgroundColor : 'rgb(' + 150 + ', ' + 150 + ', ' + 150 + ')', 
        height : 300 + "px" 
      };

      return (
        <>
          <main style={css}>
            <p>Detta är main</p>
          </main>

        </>
      );
  }
}

export default Main;





