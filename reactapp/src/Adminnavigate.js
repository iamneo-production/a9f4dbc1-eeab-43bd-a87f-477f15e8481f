import {React} from 'react';
import {useNavigate} from 'react-router-dom';
import './Custom.css';


function NavigateBar() {

    let navi=useNavigate();

    const MenuItems=[
        {
            title: 'Applied documents',
            url: '/applied-documents',
            cName: 'nav-links b1',
            id:'adminDocuments',
        },
        {
            title: 'Verification',
            url: '/verification/1',
            cName: 'nav-links b1',
            id:'adminVerification',
        },
        {
            title: 'Correction documents',
            url: '/updated-documents',
            cName: 'nav-links b1',
            id:'updatefacility',
        },
    ]
  return (
    <nav className="NavbarItems1">
        <ul className="nav-menu">
            {MenuItems.map((item, index)=>{
                return (
                    <li>
                        <a className={item.cName} href={item.url} id={item.id} >{item.title}</a>
                    
                    </li>
                )
          
            })}
            <button className='btn' id="logout" onClick={()=>navi('/adminlogin')} >Logout</button>
        </ul>
    </nav>
  )
}

export default NavigateBar
