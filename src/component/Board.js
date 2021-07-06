import Card from './Card';
import Button from './Button';
import {setStyle} from '../utils/style';

function Board() {
    const el = document.createElement('div');
    el.setAttribute('id', 'board');
    let interval;

    //settiamo i css alla board
    el.style.width = "800px";
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

    const cards = new Card();

    function startGame(){
        for (let i=0; i < cards.array_cards.length; i++){
            const card = document.createElement('img');
            card.setAttribute('src', 'src/image/back.png');
            card.setAttribute('clicked_card', i);
            setStyle(card, {
                width: '17%',
                height: '17%',
                padding: '20px',
                margin: 'auto',
                justifyContent: 'space-between',
                border: '1px solid black',
                borderRadius: '5px',
                backgroundColor: 'white'
            }); 
            card.addEventListener('click', flipCard);
            el.appendChild(card);
        }
    }

    startGame();

    const scoreBox = document.createElement('div');
    scoreBox.innerHTML = 'Punteggio: ';
    setStyle(scoreBox, {
        marginLeft: '20px'
    });

    el.appendChild(scoreBox);
    const button = new Button();
    
    button.restart.addEventListener('click', restartGame);
    el.appendChild(button.restart);

    function restartGame(){
        document.body.removeChild(el);
        const game = new Board();
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
    let score = 0;
    let scoreText = document.createElement('div');
    setStyle(scoreText, {
        float: 'right',
        marginLeft: '20px',
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
            console.log(score)
            card_front[card_1].style.backgroundColor = '#d3c4f5';
            card_front[card_2].style.backgroundColor = '#d3c4f5';
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
        setStyle(timer, {
            marginLeft: '50px'
        })
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