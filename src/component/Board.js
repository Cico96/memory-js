import Card from './Card';
import {setStyle} from '../utils/style';

function Board(){
    const el = document.createElement('div');
    el.setAttribute('id', 'board');

    //settiamo i css alla board
    el.style.width = "800px";
    el.style.height = "1100px";
    el.style.border = '2px solid black';
    el.style.borderRadius = '5px'
    el.style.backgroundColor = "#6b5b95";
    el.style.margin = 'auto';
    el.style.display = 'flex';
    el.style.flexWrap = 'wrap';

    const cards = new Card();
    for(let i=0; i < cards.array_cards.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src', 'src/image/back.png');
        setStyle(card, {
            width: '185px',
            height: '200px',
            border: '2px solid black',
            margin: 'auto',
            justifyContent: 'center',
            alignItems: 'center'
        }); 
        el.appendChild(card);
    }
    document.body.style.display = "flex";
    document.body.appendChild(el);
    
}

export default Board;