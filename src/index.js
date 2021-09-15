import Board from './component/Board';
import Button from './component/Button';
import Sidebar from './component/Sidebar';
import { setStyle } from './utils/style';

window.addEventListener('load', function(){
    const welcome = document.createElement('h1');
    document.body.appendChild(welcome);
    welcome.innerHTML = 'Benvenuti in memory';

    const container = document.createElement('div');
    welcome.appendChild(container);

    const description = document.createElement('h2');
    container.appendChild(description);
    description.innerHTML = 'Scegli una carta alla volta e ricordati la faccia cosi da scoprire il doppione. Per ogni coppia di carta guadagni un punto. Divertiti migliorando il tuo punteggio come i veri arcade :)';

    const button = new Button();
    const sidebar = new Sidebar();

    container.appendChild(button.start);
    button.start.addEventListener('click', () =>{
        document.body.removeChild(welcome);
        const memory = new Board(sidebar);
    });

    setStyle(description,{
        fontFamily: 'Roboto, sans-serif',
        fontSize: '18px',
        textAlign: 'center',
        justifyContent: 'center'
    })

    container.style.height = '48vh';
    container.style.width = '60vw';
    container.style.backgroundColor = '#6b5b95';
    container.style.border = '2px solid black';
    container.style.borderRadius = '5px';
    container.style.display = 'flex';
    container.style.margin = 'auto';
    container.style.marginTop = '50px';
    
    setStyle(welcome,{
        fontFamily: 'Roboto, sans-serif',
        fontSize: '20px',
        textAlign: 'center'
    });

})