import {setStyle} from '../utils/style';

function GameManager(){
    setStyle(document.body, {
        fontFamily: "'Montserrat', sans-serif"
    });

    let timer = document.createElement('div');
    setStyle(timer, {
        fontSize: '15px',
        fontWeight: 'bold'
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