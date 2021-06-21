import {setStyle} from '../utils/style';

function Card(){

    /* let el_card = document.createElement('img'); */

    const array_cards = [
        {
            name: 'instagram',
            img: 'src/image/instagram.png'
        },
        {
            name: 'facebook',
            img: 'src/image/facebook.png'
        },
        {
            name: 'snapchat',
            img: 'src/image/snapchat.png'
        },
        {
            name: 'twitch',
            img: 'src/image/twitch.png'
        },
        {
            name: 'twitter',
            img: 'src/image/twitter.png'
        },
        {
            name: 'youtube',
            img: 'src/image/youtube.png'
        },
        {
            name: 'instagram',
            img: 'src/image/instagram.png'
        },
        {
            name: 'facebook',
            img: 'src/image/facebook.png'
        },
        {
            name: 'snapchat',
            img: 'src/image/snapchat.png'
        },
        {
            name: 'twitch',
            img: 'src/image/twitch.png'
        },
        {
            name: 'twitter',
            img: 'src/image/twitter.png'
        },
        {
            name: 'youtube',
            img: 'src/image/youtube.png'
        }
    ]; 
    
/*      setStyle(el_card, {
        width: '256px',
        height: '256px',
        border: '2px solid black',
        margin: 'auto',
        justifyContent: 'center',
        alignItems: 'center'
    }); */ 

    //this.el_card = el_card;
    this.array_cards = array_cards;
}

export default Card;