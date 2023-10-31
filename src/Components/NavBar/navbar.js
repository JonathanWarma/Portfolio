import React, { useState } from 'react'
import './navbar.css';
import logo from '../../assets/logo2.png'
import Menu from '../../assets/menu.png'
import { Link } from 'react-scroll';



const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className="navbar" >
            <img src={logo} alt="Logo" className='logo' />
            <div className="desktopMenu" >
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem" > Home </Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem" > about </Link>
                <Link activeClass="active" to="project" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem" > project </Link>
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-60} duration={500} className="desktopMenuListItem" > contact </Link>

            </div>

            <img src={Menu} alt="mobMenu" className='mobMenu' onClick={() => setShowMenu(!showMenu)} />
            <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={() => setShowMenu(false)} > Home </Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={() => setShowMenu(false)} > about </Link>
                <Link activeClass="active" to="project" spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={() => setShowMenu(false)} > project </Link>
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-60} duration={500} className="ListItem" onClick={() => setShowMenu(false)} > contact </Link>

            </div>




        </nav >
    )
}

export default Navbar