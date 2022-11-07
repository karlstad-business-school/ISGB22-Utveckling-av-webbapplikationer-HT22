'use strict';

class GameData {

    timerId = 0;
    antalSpoken = 0;
    antalKlickadSpoken = 0;
    imgAlt = 'Detta är en bild på ett spöke!';
    imgSrc = 'https://openclipart.org/image/400px/svg_to_png/83359/fantomme.png';
    GameBegin = 0;
    GameEnd = 0;

    //För att skapa spöken med kortare interval efter en viss tid
    milliseconds = 1000;

    //För att skapde spöken skall bli mindre och mindre
    imgWidth = 400;
    imgHeight = 211;

    calculateGhostLeft() {
        return Math.round( Math.random() * (screen.availWidth - this.imgWidth)) + 1;
    }

    calculateGhostTop() {
        return Math.round( Math.random() * (screen.availHeight - this.imgHeight)) + 1;
    }

    removeGhosts(imgRefs) {
        for(let i = 0; i < imgRefs.length; i++) {
            imgRefs.item(i).remove();
        }
    }

    prepareForNewGame() {
        this.timerId = 0;
        this.antalKlickadSpoken = 0;
        this.antalSpoken = 0;
        this.GameEnd = 0;
        this.GameBegin = 0;
    }

}

//Vår kod!
let oGameData = new GameData();

window.addEventListener('load', function() {

    console.log( screen.height, screen.availHeight);
    document.addEventListener('keydown', function(e) {

        /*B = Begin*/
        if(e.key === 'b' || e.key === 'B') {

            if(oGameData.timerId !== 0) {
                clearInterval(oGameData.timerId);
            }

            oGameData.GameBegin = Date.now();            

            oGameData.timerId = setInterval(function() {

                let imgRef = document.createElement('img');
                let top = oGameData.calculateGhostTop();
                let left = oGameData.calculateGhostLeft();

                imgRef.setAttribute('alt', oGameData.imgAlt);
                imgRef.setAttribute('src', oGameData.imgSrc);
                imgRef.style.left = left + 'px';
                imgRef.style.top = top + 'px';     

                //För att storleken på bilden skall bli mindre och mindre
                imgRef.style.width = oGameData.imgWidth + 'px';
                imgRef.style.height = oGameData.imgHeight + 'px';

                document.querySelector('#gameField').appendChild(imgRef);

                oGameData.antalSpoken++;
                imgRef.addEventListener('mouseover', function() {
                    this.remove();
                    oGameData.antalKlickadSpoken++;
                });

                //Antal skapade spöken styr hur snabbt ett nytt spöke skall göras synligt
                if(oGameData.antalSpoken % 10 === 0) {
                    oGameData.milliseconds -= 100;
                    oGameData.imgHeight -= 25;
                    oGameData.imgWidth -= 50;

                    //Game Over
                    if( oGameData.milliseconds === 0) {
                        //Simulera en tangentbordstryckning på e!
                    }

                    console.log( oGameData.milliseconds);
                }

            }, oGameData.milliseconds);

        }

        /*E = Slut*/
        if(e.key ==='e' || e.key === 'E') {
            
            oGameData.GameEnd = Date.now();

            console.log( oGameData.GameEnd - oGameData.GameBegin);

            clearInterval(oGameData.timerId);

            alert('Antalet spöken var ' + oGameData.antalSpoken + ' och antalet fångade spöken var ' + oGameData.antalKlickadSpoken);

            oGameData.prepareForNewGame();
            oGameData.removeGhosts(document.querySelectorAll('#gameField img'));

        }

    });

});






