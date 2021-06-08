import {setStyle} from './utils/style';

function Card(){
    let el_card = document.createElement('div');
    el_card.setAttribute('id', 'el_card');
    const array_cards = [];
    array_cards.length = 12;
    //style
    setStyle(el_card, {
        width: '10px',
        height: '15px',
        border: '2px solid black',
    });

   
}