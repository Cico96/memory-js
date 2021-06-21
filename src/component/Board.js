import Card from './Card';
import {setStyle} from '../utils/style';

function Board(){
    const el = document.createElement('div');
    el.setAttribute('id', 'board');
    const cardChosen = [];

    //settiamo i css alla board
    el.style.width = "800px";
    el.style.height = "1100px";
    el.style.border = '2px solid black';
    el.style.borderRadius = '5px'
    el.style.backgroundColor = "#6b5b95";
    el.style.margin = 'auto';
    el.style.display = 'flex';
    el.style.flexWrap = 'wrap';

    //Setto le carte girate nella board ed ogni carta ha un click event
    const cards = new Card();
    for(let i=0; i < cards.array_cards.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src', 'src/image/back.png');
        card.setAttribute('clicked_card', i);
        setStyle(card, {
            width: '185px',
            height: '200px',
            margin: 'auto',
            justifyContent: 'center',
            alignItems: 'center'
        });
        card.addEventListener('click', flipCard);
        el.appendChild(card);
    }
    document.body.style.display = "flex";
    document.body.appendChild(el);
    
    function flipCard(){
        let clicked_card = this.getAttribute('clicked_card');
        console.log(clicked_card)
        cardChosen.push(cards.array_cards[clicked_card].name);
        this.setAttribute('src', cards.array_cards[clicked_card].img);
          if(cardChosen.length === 2){
           setTimeout(checkMatch, 500);
        }
    }

     function checkMatch(){
        //const card_front = document.querySelectorAll('img');
        let card_1 = cardChosen[0];
        let card_2 = cardChosen[1];
        if(card_1 == card_2){
            console.log('stessa immagine');
        }
    } 
}

export default Board;