import { Component } from "react";

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            translation :''
        };
    }

    render() {
        return(
            <main className="container-fluid mt-5 mb-5 text-center">
                <h2>Skriv in text att översätta</h2>
                <form>
                    <input type="text" id="transText" className="form-control mb-5" />
                    <button onClick={this.getTranslation.bind(this)} className="btn btn-danger">Översätt</button>
                </form>
                <div className="text-primary lead mt-5">
                    {this.state.translation}
                </div>
            </main>

        );
    }

    getTranslation = (evt)=>{
        evt.preventDefault();

        const encodedParams = new URLSearchParams();
        encodedParams.append("q", document.querySelector('#transText').value);
        encodedParams.append("target", "ru");
        encodedParams.append("source", "sv");

        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'Accept-Encoding': 'application/gzip',
                'X-RapidAPI-Key': '15de227eeamsh14ac74b0438b36bp1d59d6jsn06435d35c770',
                'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
            },
            body: encodedParams
        };

        fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', options)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    translation: response.data.translations[0].translatedText
                })
                console.log(response);

            })       
            .catch(err => console.error(err));


    }
}
export default Main;