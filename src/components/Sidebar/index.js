import './index.scss'
import {Link, NavLink} from 'react-router-dom'
import LogoC from '../../assets/images/logoC2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faSquareParking } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => (



    
    <div className="nav-bar">
        <Link className='logo' to='/'>
            <img src={LogoC} alt="logo"/>
        </Link>
        <nav>
            <NavLink 
                exact='true'
                activeclassname='active'
                to='/'>
                
                <FontAwesomeIcon icon={faHome} color='#5AB967'/>
            </NavLink> 

             <NavLink exact='true' activeclassname='active'  className='about-link' to='/about'>
                <FontAwesomeIcon icon={faUser} color='#5AB967'/>
            </NavLink>

            <NavLink exact='true'  activeclassname='active' className='contact-link' to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color='#5AB967' />
            </NavLink>  

            <NavLink exact='true'  activeclassname='active' className='project-link' to='/project'>
                <FontAwesomeIcon icon={faSquareParking} color='#5AB967' />
            </NavLink> 
        </nav>

        <ul>

            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/cristhian-cosenza-gamero-463988212/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#5AB967' />
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://github.com/Cosenza26'>
                    <FontAwesomeIcon icon={faGithubSquare} color='#5AB967' />
                </a>
            </li>

        </ul>
    </div>    
)

export default Sidebar;