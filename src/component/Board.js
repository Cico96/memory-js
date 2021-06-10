import Card from './Card';

function Board(){
    const el = document.createElement('div');
    el.setAttribute('id', 'board');
    
    //settiamo i css alla board
    el.style.width = "70vw";
    el.style.height = "100vh";
    el.style.border = '2px solid black';
    el.style.borderRadius = '5px'
    el.style.backgroundColor = "#6b5b95";
    el.style.margin = 'auto';

    const card = new Card();
    el.appendChild(card.el_card);

    document.body.style.display = "flex";
    document.body.appendChild(el);
    
}

export default Board;