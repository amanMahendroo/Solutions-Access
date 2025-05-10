import '../styles/style.css'
import {NavLink} from 'react-router-dom'
import {AiOutlineMail, AiFillFacebook, AiOutlineInstagram, AiFillLinkedin } from 'react-icons/ai'
import Logo from '../assets/logo-white.png'

export default function NavBar() {
    return (
        <div className="container">
            <div className="nav">
                <div className="link">
                    <NavLink to='/about' className="t">About the Company</NavLink>
                </div>
                <div className="link">
                    <NavLink to='/service' className="t">What we do</NavLink>
                </div>
                <div className="link">
                    <NavLink to='/searches' className="t">Representative Searches</NavLink>
                </div>
                <div className="link">
                    <NavLink to='/founder' className="t">Founder & CEO</NavLink>
                </div>
            </div>
            <div className="title">
                <div className="link">
                    <NavLink to='/' exact="true" className="t">
                        <img src={Logo} alt="Logo" />        
                    </NavLink>
                </div>
                <div className="tag">Solutions you can count on, talent you can access</div>
            </div>
            <div className="contact">
                <div className="list">
                    <a href="mailto:support@solutionsaccess.in">
                        <AiOutlineMail className="icon" />
                    </a>
                </div>
                <div className="list">
                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/Solutions-Access-1774730149479005/">
                        <AiFillFacebook className="icon" />
                    </a>
                </div>
                <div className="list">
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/solutionsaccess/">
                        <AiOutlineInstagram className="icon" />
                    </a>
                </div>
                <div className="list">
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/solutions-access/">
                        <AiFillLinkedin className="icon" />
                    </a>
                </div>
            </div>
        </div>
    )
}