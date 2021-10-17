import Board from './component/Board';
import Button from './component/Button';
import Sidebar from './component/Sidebar';
import { setStyle } from './utils/style';

window.addEventListener('load', function(){
    const welcomeContainerTitle = document.createElement('div');
    document.body.appendChild(welcomeContainerTitle);
    setStyle(document.body, {
        fontFamily: "'Montserrat', sans-serif",
    });

    const welcome = document.createElement('h1');
    setStyle(welcome,{
        fontSize: '22px',
        textAlign: 'center',
        fontWeight: 'bold'
    });
    welcome.innerHTML = 'Benvenuti in memory';
    welcomeContainerTitle.appendChild(welcome);
   
    const container = document.createElement('div');
    welcomeContainerTitle.appendChild(container);

    setStyle(container,{
        height: '700px',
        width: '950px',
        backgroundColor: '#6b5b95',
        border: '2px solid black',
        borderRadius: '5px',
        display: 'flex',
        margin: 'auto',
        marginTop: '50px',
        backgroundImage: "url('src/image/prova2.jpg')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    });

    const innerContainer = document.createElement('div');
    setStyle(innerContainer, {
        marginTop: '50px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    });
    container.appendChild(innerContainer);

    const description = document.createElement('h2');
    setStyle(description,{
        fontSize: '18px',
        textAlign: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 'normal'
    })
    innerContainer.appendChild(description);
    description.innerHTML = 'Scegli una carta alla volta e ricordati la faccia cosi da scoprire il doppione.' +
                            ' Per ogni coppia di carta guadagni un punto. Divertiti migliorando il tuo punteggio' +
                            'come i veri arcade :)';

    const button = new Button();
    const sidebar = new Sidebar();

    innerContainer.appendChild(button.start);
    button.start.addEventListener('click', () =>{
        document.body.removeChild(welcomeContainerTitle);
        const memory = new Board(sidebar);
    });

});