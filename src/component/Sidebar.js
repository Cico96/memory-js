import {setStyle} from '../utils/style';
function SideBar(){
    let sidebar = document.createElement('div');
    setStyle(sidebar, {
        width: '350px',
        height: '950px',
        border: 'solid 2px black',
        borderRadius: '5px',
        backgroundColor: '#cfcacd',
        position: 'absolute'
    })

    this.sidebar = sidebar;
}

export default SideBar;