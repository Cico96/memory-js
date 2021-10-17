import {setStyle} from '../utils/style';

function Button() {
    setStyle(document.body, {
        fontFamily: "'Montserrat', sans-serif"
    });

    const restart = document.createElement('button');
    restart.innerHTML = 'Restart!';
    setStyle(restart, {
        marginLeft: '100px',
        marginRight: '50px',
        width: '100px',
        height: '35px',
        fontSize: '18px',
        fontWeight: 'bold',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#Eaeae7',
    });

    const start = document.createElement('button');
    start.innerHTML = 'Start!';
    setStyle(start, {
        width: '100px',
        height: '35px',
        fontSize: '18px',
        fontWeight: 'bold',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#Eaeae7',
    });

    start.addEventListener("mouseover", moveOver);
    start.addEventListener("mouseout", moveOut);

    function moveOver(){
        setStyle(start, {
            backgroundColor: '#A6a6a4'
        })
    }

    function moveOut(){
        setStyle(start,{
            backgroundColor: '#Eaeae7'
        })
    }
    
    this.start = start;
    this.restart = restart;
}

export default Button;