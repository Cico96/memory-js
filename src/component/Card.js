import {setStyle} from '../utils/style';

function Card(){
    let el_card = document.createElement('div');
    let array_cards = [];
    array_cards.length = 12;
    
    if(array_cards.length >= 12){
        console.log('entro');
        array_cards.forEach(function(index){
            array_cards[index] = el_card;
            return array_cards;
        })
    }
    
    setStyle(el_card, {
        width: '10px',
        height: '15px',
        border: '2px solid black',
    });

    this.el_card = el_card;
}

export default Card;