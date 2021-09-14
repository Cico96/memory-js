import {setStyle} from '../utils/style';

function Sidebar(){
    let sidebar = document.createElement('div');
    setStyle(sidebar, {
        width: '350px',
        height: '850px',
        border: 'solid 2px black',
        borderRadius: '5px',
        backgroundColor: '#cfcacd',
        position: 'absolute',
        marginLeft: '15px'
    });

    let text = document.createElement('h2');
    text.innerHTML = 'I tuoi record! ';
    setStyle(text,{
        fontFamily: 'Roboto, sans-serif',
        fontSize: '16px',
        paddingLeft: '120px'
    });
    sidebar.appendChild(text);

    let list = document.createElement('ul');
    sidebar.appendChild(list);

    
    this.addRecord = function addRecord(timer){
        let record = document.createElement('div');
        let text = document.createElement('input');
        setStyle(text, {
            border: 'none',
            background: 'none',
            display: 'inline-block',
            marginLeft: '-20px',
            fontFamily: 'Roboto, sans-serif',
            fontSize: '13px'
        })
        list.appendChild(text);
        text.setAttribute('placeholder', 'Username');
        text.setAttribute('size', '15');
        setStyle(record,{
            marginLeft:'10px',
            marginTop: '30px',
            fontFamily: 'Roboto, sans-serif',
            fontSize: '13px',
            display: 'inline-block',
        })
        record.innerHTML = timer.innerHTML.split(':')[1];
        list.appendChild(record);
    }

    this.list = list;
    this.sidebar = sidebar;
}

export default Sidebar;