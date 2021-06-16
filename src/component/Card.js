import {setStyle} from '../utils/style';

function Card(){

 /*    const array_cards = [
        {
            name: 'instagram',
            img: 'image/instagram.png'
        },
    ]; */

    let el_card = document.createElement('img');
    el_card.setAttribute('src','src/image/instagram.png');
    console.log(el_card.getAttribute("src")); 
    
   /*  if(array_cards){
        console.log('entro');
        array_cards.forEach(function(index){
            console.log('controllo');
            array_cards[index] = el_card;
            if(array_cards.length === 12){
                return array_cards;
                
            }
            console.info(array_cards);
        });  
    } */
    
    setStyle(el_card, {
        width: '256px',
        height: '256px',
        border: '2px solid black',
        margin: 'auto',
    });

    this.el_card = el_card;
}

export default Card;