import Board from './component/Board';
import {setStyle} from './utils/style'

window.addEventListener('load', function(){
    const welcome = document.createElement('h1');
    document.body.appendChild(welcome);
    welcome.innerHTML = 'Benvenuto In Memory';

    const container = document.createElement('div');
    welcome.appendChild(container);

    const description = document.createElement('h2');
    container.appendChild(description);
    description.innerHTML = 'Descrizione del gioco'

    const button_start = document.createElement('button');
    container.appendChild(button_start);
    button_start.innerHTML = 'Start!'

    //description
    description.style.fontFamily = 'Roboto, sans-serif';
    description.style.fontSize = '18px' ;

    //button
    //button_start.style.alignItems = 'flex-end';
    setStyle(button_start, {
            alignSelf: 'flex-end',
            marginBottom: '50px',
            marginLeft: '60px',
    });

    button_start.style.alignSelf = 'flex-end';
    button_start.style.marginBottom = '50px';

    container.style.height = '48vh';
    container.style.width = '60vw';
    container.style.backgroundColor = '#6b5b95';
    container.style.border = '2px solid black';
    container.style.borderRadius = '5px';
    container.style.display = 'flex';
    container.style.margin = 'auto';
    container.style.marginTop = '50px';

    welcome.style.fontFamily = 'Roboto, sans-serif';
    welcome.style.fontSize = '25px' ;
    welcome.style.textAlign = 'center';
    welcome.style.marginTop = '50px';
    
    //const memory = new Board();
})