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

    this.restart = restart;
}

export default Button;