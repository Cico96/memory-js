import {setStyle} from '../utils/style';

function Button() {

    const restart = document.createElement('button');
    restart.innerHTML = 'Restart!';
    setStyle(restart, {
        alignSelf: 'flex-end',
        marginLeft: '250px',
        marginBottom: '20px',
        width: '80px',
        height: '40px',
        fontSize: '20px',
        border: 'none',
        borderRadius: '3px',
        backgroundColor: '#ccc9c6',   
    });

    const start = document.createElement('button');
    start.innerHTML = 'Start!';
    setStyle(start, {
        width: '100px',
        height: '35px',
        fontSize: '20px',
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