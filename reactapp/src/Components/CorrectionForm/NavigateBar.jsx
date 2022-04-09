import {React} from 'react';
import {useNavigate} from 'react-router-dom';
import '../../Custom.css';


function NavigateBar() {

    let navi=useNavigate();

    const MenuItems=[
        {
            title: 'New card form',
            url: '/newcardform/1',
            cName: 'nav-links b',
            id:'newCardForm',
        },
        {
            title: 'Correction form',
            url: '/correctionform/1',
            cName: 'nav-links b',
            id:'correctionCardForm',
        },
        {
            title: 'Track status',
            url: '/trackstatus',
            cName: 'nav-links b',
            id:'correctionDocuments',
        },
    ]
  return (
    <nav className="NavbarItems">
        <ul className="nav-menu">
            {MenuItems.map((item, index)=>{
                return (
                    <li>
                        <a className={item.cName} href={item.url} id={item.id} >{item.title}</a>
                    
                    </li>
                )
          
            })}
            <button className='btn' id="logout" onClick={()=>navi('/userlogin')} >Logout</button>
        </ul>
    </nav>
  )
}

export default NavigateBar
