import {setStyle} from '../utils/style';
import SideBar from './Sidebar';

function GameManager(){
    
    let timer = document.createElement('div');
    setStyle(timer, {
        marginLeft: '50px',
        fontFamily: 'Roboto, sans-serif',
        fontSize: '15px'
    });
    let interval;

    this.startTimer = function startTimer(){
        let s = 0, m = 0, h = 0;
        interval = setInterval(function(){
            timer.innerHTML = 'Tempo trascorso: ' + h + ' ore ' + m + ' minuti ' + s + ' secondi ';
            s++;
            if (s == 60){
                m++;
                s = 0;
            }
            if(m == 60){
                h++;
                m = 0;
            }
        }, 1000);
    }
    this.interval = interval;
    this.timer = timer;
}
export default GameManager;