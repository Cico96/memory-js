import Card from './Card';
import Button from './Button';
import GameManager from './GameManager';
import {setStyle} from '../utils/style';

function Board(sidebarList) {
    const el = document.createElement('div');
    el.setAttribute('id', 'board');

    setStyle(el, {
        width: '800px',
        height: '1000px',
        border: '2px solid black',
        borderRadius: '5px',
        backgroundColor: '#6b5b95',
        marginLeft: '700px',
        display: 'flex',
        flexWrap: 'wrap'
    });

    document.body.style.display = "flex";
    document.body.appendChild(el);
    const sidebar = sidebarList;
    document.body.appendChild(sidebar.sidebar);

    const cards = new Card();
    //cards.array_cards.sort(() => 0.5 - Math.random());

    for (let i=0; i < cards.array_cards.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src', 'src/image/back.png');
        card.setAttribute('clicked_card', i);
        card.classList.add('animate');
        setStyle(card, {
            width: '17%',
            height: '15%',
            padding: '25px',
            margin: 'auto',
            justifyContent: 'space-between',
            border: '1px solid black',
            borderRadius: '5px',
            backgroundColor: '#e2fdff'
        });
        card.addEventListener('click', function(){
            setTimeout(flipCard.bind(this), 300);
        });       
        el.appendChild(card);
    }  

    const scoreBox = document.createElement('div');
    scoreBox.innerHTML = 'Punteggio: ';
    setStyle(scoreBox, {
        marginLeft: '20px',
        fontFamily: 'Roboto, sans-serif',
        fontSize: '15px'
    });

    el.appendChild(scoreBox);
    const button = new Button();
    
    button.restart.addEventListener('click', restartGame);
    el.appendChild(button.restart);

    function restartGame(){
        document.body.removeChild(el);
        const game = new Board(sidebarList);
    }

    const gm = new GameManager();
    gm.startTimer();
    el.appendChild(gm.timer);
    clearInterval(gm.interval);

    let cardChosen = [];
    let cardChosenId = [];

    function flipCard(){
        let clicked_card = this.getAttribute('clicked_card');
        let animate_card = document.getElementsByClassName('animate');
        animate_card[clicked_card].animate([
            {transform: 'perspective(300px) rotate3d(0, 1, 0, 80deg)'},
            {transform: 'perspective(300px) rotate3d(0, 1, 0, -10deg)'},
            {transform: 'perspective(300px) '},
        ],{
            duration: 900,
            easing: 'ease-in'

        });
        cardChosen.push(cards.array_cards[clicked_card].name);
        cardChosenId.push(clicked_card);
        this.setAttribute('src', cards.array_cards[clicked_card].img);
        if(cardChosen.length === 2){
           setTimeout(checkMatch, 1200);
        }
    }

    let won = [];
    let score = 0;
    let scoreText = document.createElement('div');
    setStyle(scoreText, {
        float: 'right',
        marginLeft: '20px',
        fontFamily: 'Roboto, sans-serif',
        fontSize: '15px'
    });
    scoreText.innerHTML = score;
    scoreBox.appendChild(scoreText);
 
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
            score++;
            scoreText.innerHTML = score;
            card_front[card_1].animate([
                {transform: 'rotate(0deg)' },
                {transform: 'rotate(360deg)'}
            ],{
                duration: 1000
            });
            card_front[card_2].animate([
                {transform: 'rotate(0deg)' },
                {transform: 'rotate(360deg)'}
            ],{
                duration: 1000
            });
            card_front[card_1].style.backgroundColor = '#788bff';
            card_front[card_2].style.backgroundColor = '#788bff';
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
            alert('Hai vinto, congratulazioni!!');
            sidebar.addRecord(gm.timer);
        }
    }

}

export default Board;