//Costruttore della Board

function Board(){
    const el = document.createElement('div');
    el.setAttribute('id', 'board');
    
    //settiamo i css alla board
    el.style.width = "70vw";
    el.style.height = "100vh";
    el.style.border = "5px";
    el.style.borderColor = "black";
    el.style.backgroundColor = "#6b5b95";

    document.body.style.display = "flex";
    document.body.appendChild(el);
    
}

export default Board;