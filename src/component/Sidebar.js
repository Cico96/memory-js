import {setStyle} from '../utils/style';

function Sidebar(){
    setStyle(document.body, {
        fontFamily: "'Montserrat', sans-serif"
    });

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

    let sidebarTitle = document.createElement('h2');
    sidebarTitle.innerHTML = 'I tuoi record! ';
    setStyle(sidebarTitle,{
        fontSize: '16px',
        paddingLeft: '120px'
    });
    sidebar.appendChild(sidebarTitle);

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
            fontSize: '13px',
            borderBottom: '1px solid',
            paddingBottom: '10px',
            paddingLeft: '10px',
            paddingTop: '10px',
            fontFamily: "'Montserrat', sans-serif"
        })
        list.appendChild(text);
        text.setAttribute('placeholder', 'Username');
        text.setAttribute('size', '15');
        setStyle(record,{
            marginLeft:'10px',
            marginTop: '30px',
            fontSize: '13px',
            display: 'inline-block',
            borderBottom: '1px solid',
            paddingBottom: '10px'
        })
        record.innerHTML = timer.innerHTML.split(':')[1];
        list.appendChild(record);
    }

    this.list = list;
    this.sidebar = sidebar;
}

export default Sidebar;