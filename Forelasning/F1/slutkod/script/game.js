'use strict';

class GameData  {

    imgRefs = [
        'https://openclipart.org/download/282127/Die1.svg',
        'https://openclipart.org/download/282128/Die2.svg',
        'https://openclipart.org/download/282129/Die3.svg',
        'https://openclipart.org/download/282130/Die4.svg',
        'https://openclipart.org/download/282131/Die5.svg',
        'https://openclipart.org/download/282132/Die6.svg'
    ];

    createImgElements() {
        //Skapa nya element

        let rndValue = 0;
        let mainRef = document.querySelector('main');
        let imgRef = null;

        for(let i = 0; i <= 5; i++) {

            rndValue = Math.floor( Math.random() * 6);
            console.log( rndValue );

            imgRef = document.createElement('img');

            imgRef.setAttribute('src', this.imgRefs[rndValue]);
            imgRef.setAttribute('alt', 'Tärning ' + (rndValue + 1));

            imgRef.style.width = '10%';
            imgRef.style.height = '10%';

            mainRef.appendChild(imgRef);


        }


    }

    removeImgElements() {
        //Ta bort element
        let imgRefs = document.querySelectorAll('main img');
        console.log( imgRefs );

        for(let i = 0; i < imgRefs.length; i++) {
            imgRefs.item(i).remove();
        }
        
    }

};

window.addEventListener('load', function() {

    console.log( Date.now() );

});

window.addEventListener('DOMContentLoaded', function() {

    console.log( Date.now() );

    document.addEventListener('keydown', function(e ) {

        if(e.key === 'd' || e.key === 'D') {
            let oGameData = new GameData();
            oGameData.removeImgElements();
            oGameData.createImgElements(); 
        }
    });

});