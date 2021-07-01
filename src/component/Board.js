import Card from './Card';
import {setStyle} from '../utils/style';

function Board(){
    const el = document.createElement('div');
    el.setAttribute('id', 'board');
    let interval;

    //settiamo i css alla board
    el.style.width = "750px";
    el.style.height = "1000px";
    el.style.border = '2px solid black';
    el.style.borderRadius = '5px'
    el.style.backgroundColor = "#6b5b95";
    el.style.margin = 'auto';
    el.style.display = 'flex';
    el.style.flexWrap = 'wrap';

    document.body.style.display = "flex";
    document.body.appendChild(el);

    clearInterval(interval)

    //Setto le carte girate nella board ed ogni carta ha un click event
    const cards = new Card();
    
    for (let i=0; i < cards.array_cards.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src', 'src/image/back.png');
        card.setAttribute('clicked_card', i);
        setStyle(card, {
            width: '17%',
            height: '17%',
            padding: '30px',
            justifyContent: 'space-between',
        }); 
        card.addEventListener('click', flipCard);
        el.appendChild(card);
    } 

    //partenza timer
    startTimer();

    let cardChosen = [];
    let cardChosenId = [];

    function flipCard(){
        let clicked_card = this.getAttribute('clicked_card');
        cardChosen.push(cards.array_cards[clicked_card].name);
        cardChosenId.push(clicked_card);
        this.setAttribute('src', cards.array_cards[clicked_card].img);
        if(cardChosen.length === 2){
           setTimeout(checkMatch, 500);
        }
    }

    let won = [];

    function checkMatch(){
        const card_front = document.querySelectorAll('img');
        let card_1 = cardChosenId[0];
        let card_2 = cardChosenId[1];
        if(card_1 == card_2){
           card_front[card_1].setAttribute('src', 'src/image/back.png');
           card_front[card_2].setAttribute('src', 'src/image/back.png');
           alert('Non puoi cliccare sulla stessa immagine');
        }
        else if (cardChosen[0] === cardChosen[1]){
            alert('hai trovato una carta!')
            card_front[card_1].removeEventListener('click', flipCard);
            card_front[card_2].removeEventListener('click', flipCard);
            won.push(cardChosen);
        }else{
            card_front[card_1].setAttribute('src', 'src/image/back.png');
            card_front[card_2].setAttribute('src', 'src/image/back.png');
        }
        cardChosen = [];
        cardChosenId = [];
        if (won.length == 6){
            alert('Hai vinto, congratulazioni!!')
        }
    }

    function startTimer(){
        let s = 0, m = 0, h = 0;
        let timer = document.createElement('div');
        el.appendChild(timer);
        interval = setInterval(function(){
            timer.innerHTML = 'Tempo trascorso: ' + h + ' ore ' + m + ' minuti ' + s + ' secondi ';
            s++;
            if (s == 60){
                m++;
                s = 0;
            }
            if(m == 60){
                h++;
                m = 0;
            }
        }, 1000);
    }
}

export default Board;