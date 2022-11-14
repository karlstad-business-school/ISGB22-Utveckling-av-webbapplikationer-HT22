import { Component } from 'react';

class Main extends Component{
  
  //Måste ha props här för att använda props i konstruktorn.
  constructor(props){
    super(props);

    //Sätter variablerna r, g och b till vad de är i props;
    let {r, g, b} = this.props;

    //Sätter vårt state på varje variabel till värderna från props
    this.state = {
      red: r,
      green: g,
      blue: b
    }

    //Sätter attributet time på state
    this.state.time = 0;

    //Startar vår timer-metod
    this.startTimer();

    //Sätter attributet showTime till false
    this.state.showTime = false;

    this.setColor(r, g, b);
  }


  startTimer(){
    setInterval(() =>  {
      this.setState(prevState => ({
        time: prevState.time + 1
      }));

      this.randomColor();
    }, 1000);
  }



  //Metod för att sätta färgerna i klassen
  setColor(r, g, b){
    this.red = r;
    this.green = g;
    this.blue = b;
  }

  randomColor = () => {
    this.red = Math.floor(Math.random() * 255);
    this.green = Math.floor(Math.random() * 255);
    this.blue = Math.floor(Math.random() * 255);

    this.setState({
      red: this.red,
      green: this.green,
      blue: this.blue
    }, () => {
      console.log("NEW VALUES");
    });
    

    console.log(this.state, this.props, this.red, this.blue, this.green);
  }


  render() {
      //Skapar CSS för färg och höjd
      /*let css = { 
        backgroundColor : 'rgb(' + this.red + ', ' + this.green + ', ' + this.blue + ')', 
        height : 300 + "px" 
      };*/

      //Hämtar värden från state, ej lokala eller props
      let css = { 
        backgroundColor : 'rgb(' + this.state.red + ', ' + this.state.green + ', ' + this.state.blue + ')', 
        height : 300 + "px" 
      };

      return (
        <>
          <main style={css}>
            <p>Detta är main</p>
            <p>Detta är en timer {this.state.showTime && this.state.time} </p>
            <p>Detta är en timer {this.state.showTime && <TimerComponent/>} </p>
            <button onClick={this.randomColor}>Byt färg</button>
          </main>

        </>
      );
  }
}



export default Main;





