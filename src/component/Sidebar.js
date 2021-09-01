import {setStyle} from '../utils/style';

function Sidebar(){
    let sidebar = document.createElement('div');
    setStyle(sidebar, {
        width: '350px',
        height: '950px',
        border: 'solid 2px black',
        borderRadius: '5px',
        backgroundColor: '#cfcacd',
        position: 'absolute'
    });

    let text = document.createElement('h2');
    text.innerHTML = 'I tuoi record! ';
    setStyle(text,{
        fontFamily: 'Roboto, sans-serif',
        fontSize: '18px',
        paddingLeft: '100px'
    });
    sidebar.appendChild(text);

    let list = document.createElement('ul');
    sidebar.appendChild(list);

    
    this.addRecord = function addRecord(timer){
        let p = document.createElement('div');
        p.innerHTML = timer.innerHTML.split(':')[1];
        list.appendChild(p);
    }

    this.list = list;
    this.sidebar = sidebar;
}

export default Sidebar;