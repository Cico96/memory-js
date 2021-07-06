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
        fontFamily: 'Roboto, sans-serif',
        fontSize: '20px',
        border: 'none',
        borderRadius: '3px',
        backgroundColor: '#ccc9c6',   
    });

    const start = document.createElement('button');
    start.innerHTML = 'Start!';
    setStyle(start, {
        alignSelf: 'flex-end',
        marginBottom: '50px',
        marginLeft: '300px',
        width: '80px',
        height: '40px',
        fontFamily: 'Roboto, sans-serif',
        fontSize: '20px',
        border: 'none',
        borderRadius: '3px',
        backgroundColor: '#ccc9c6',   
    });

    this.start = start;
    this.restart = restart;
}

export default Button;