import { Component } from 'react';

class Main extends Component{

  //Måste ha props här för att använda props i konstruktorn.
  constructor(props){
    super(props);

    //Sätter variablerna r, g och b till vad de är i props;
    let {r, g, b} = this.props;
    this.setColor(r, g, b);
  }

  //Metod för att sätta färgerna i klassen
  setColor(r, g, b){
    this.red = r;
    this.green = g;
    this.blue = b;
  }

  render() {
      //Skapar CSS för färg och höjd
      let css = { 
        backgroundColor : 'rgb(' + this.red + ', ' + this.green + ', ' + this.blue + ')', 
        height : 300 + "px" 
      };

      return (
        <>
          <main style={css}>Detta är main</main>
        </>
      );
  }
}

export default Main;





