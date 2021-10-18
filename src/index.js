import Board from './component/Board';
import Button from './component/Button';
import Sidebar from './component/Sidebar';
import { setStyle } from './utils/style';

window.addEventListener('load', function(){
    const welcomeContainerTitle = document.createElement('div');
    document.body.appendChild(welcomeContainerTitle);
    setStyle(document.body, {
        fontFamily: "'Montserrat', sans-serif",
        backgroundColor: '#99b1bf'
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
        backgroundImage: "url('src/image/memory.jpg')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    });

    const innerContainer = document.createElement('div');
    setStyle(innerContainer, {
        marginTop: '50px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignItems: 'center'
    });
    container.appendChild(innerContainer);

    const description = document.createElement('h2');
    setStyle(description,{
        fontSize: '18px',
        textAlign: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: '500',
        paddingRight: '50px',
        paddingLeft: '50px',
        lineHeight: '1.5',
    });

    description.innerHTML = 'Benvenuto in memory, preparati ad entrare nel mondo dei social!' +' Scegli una carta alla volta e ricordati la faccia cosi da scoprire il doppione.' +
                            ' Per ogni coppia di carta guadagni un punto. Divertiti migliorando il tuo punteggio' +
                            'come i veri arcade :)';

    innerContainer.appendChild(description);

    const button = new Button();
    const sidebar = new Sidebar();

    innerContainer.appendChild(button.start);
    button.start.addEventListener('click', () =>{
        document.body.removeChild(welcomeContainerTitle);
        const memory = new Board(sidebar);
    });

    const containerInfo = document.createElement('div');
    setStyle(containerInfo, {
        display: 'flex',
        height: '50px',
        gap: '150px',
        marginBottom: '50px'
    });

    const nameInfo = document.createElement('h2');
    nameInfo.innerHTML = 'Jacopo Cicoria';
    setStyle(nameInfo, {
        fontSize: '15px',
        color: 'white'
    });

    const info = document.createElement('h2');
    info.innerHTML = 'Master Mobile and Web Technogies';
    setStyle(info, {
        fontSize: '15px',
        color: 'white'
    });

    innerContainer.appendChild(containerInfo);
    containerInfo.appendChild(nameInfo);
    containerInfo.appendChild(info);

});
