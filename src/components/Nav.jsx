import { Link, NavLink } from 'react-router-dom';
import './Nav.scss';
import Logo from "../assets/school_logo.png";
import IconMenu from "../assets/icon_menu.svg";
import { useState, useEffect } from 'react';
import Facebook from '../assets/icon_facebook.svg';

export default function Nav() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    
    const activeClass = ({ isActive }) => isActive ? "--active" : "";

    const DownArrow = () => (
        <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" className="nav__dropdown-arrow">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
            <g id="SVGRepo_iconCarrier"> <path d="M7 10L12 15L17 10" stroke="#000000" strokeWidth="2.136" strokeLinecap="round" strokeLinejoin="round"/> </g>
        </svg>
    );
    
    const handleLinkClick = () => {
        setMobileMenuOpen(false);
    };
    
    // Fermer le menu mobile quand la fenêtre est redimensionnée au-dessus de 768px
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setMobileMenuOpen(false);
            }
        };
        
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    // Empêcher le défilement du body quand le menu mobile est ouvert
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileMenuOpen]);
    
    return (
        <nav>
            <div className="nav__logo">
                <Link to="/">
                    <img src={Logo} className="nav__logo-img" alt="Logo de l'école" />
                </Link>
            </div>

            {/* Menu pour desktop */}
            <div className="nav__list">
                <ul>
                    <li><NavLink to="/" className={activeClass}>Accueil</NavLink></li>
                    <li className="nav__item-dropdown">
                        <div className="nav__dropdown-toggle">
                            L'école <DownArrow/>
                        </div>
                        <ul className="nav__dropdown-menu">
                            <li><NavLink to="/association" className={activeClass}>L'association</NavLink></li>
                            <li><NavLink to="/parcours" className={activeClass}>Les parcours</NavLink></li>
                            <li><NavLink to="/pratiques-musicales" className={activeClass}>Pratiques musicales</NavLink></li>
                        </ul>
                    </li>
                    <li><NavLink to="/agenda" className={activeClass}>Agenda</NavLink></li>
                    <li><NavLink to="/studio" className={activeClass}>Studio d'enregistrement</NavLink></li>
                    <li><NavLink to="/contact" className={activeClass}>Contact & Tarifs</NavLink></li>
                </ul>
            </div>
            
            <div className="nav__socials">
                <a href="https://www.facebook.com/p/Mille-et-une-Notes-100069392753204/" target="_blank" rel="noopener noreferrer">
                    <img src={Facebook} alt="Facebook" />
                </a>
                <span>rejoignez-nous !</span>
            </div>
            
            {/* Bouton hamburger pour mobile */}
            <button 
                className={`nav__mobile-toggle ${mobileMenuOpen ? 'open' : ''}`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Menu principal"
            >
                <img src={IconMenu} alt="Menu" className="nav__mobile-icon" />
            </button>
            
            {/* Menu mobile */}
            <div className={`nav__mobile ${mobileMenuOpen ? 'open' : ''}`}>
                <div className="nav__mobile-header">
                    <div className="nav__logo">
                        <Link to="/">
                            <img src={Logo} className="nav__logo-img" alt="Logo de l'école" />
                        </Link>
                    </div>
                    <button 
                        className="nav__mobile-close"
                        onClick={() => setMobileMenuOpen(false)}
                        aria-label="Fermer le menu"
                    >
                        <span></span>
                        <span></span>
                    </button>
                </div>
                <ul className="nav__mobile-list">
                    <li>
                        <NavLink to="/" className={activeClass} onClick={handleLinkClick}>
                            Accueil
                        </NavLink>
                    </li>
                    <li className="nav__mobile-dropdown">
                        <div 
                            className="nav__mobile-dropdown-toggle"
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                        >
                            <span>L'école</span>
                            <DownArrow />
                        </div>
                        <ul className={`nav__mobile-dropdown-menu ${dropdownOpen ? 'open' : ''}`}>
                            <li>
                                <NavLink to="/association" className={activeClass} onClick={handleLinkClick}>
                                    L'association
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/parcours" className={activeClass} onClick={handleLinkClick}>
                                    Les parcours
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/pratiques" className={activeClass} onClick={handleLinkClick}>
                                    Pratiques musicales
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to="/agenda" className={activeClass} onClick={handleLinkClick}>
                            Agenda
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/studio" className={activeClass} onClick={handleLinkClick}>
                            Studio d'enregistrement
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={activeClass} onClick={handleLinkClick}>
                            Contact & Tarifs
                        </NavLink>
                    </li>
                </ul>
                <div className="nav__mobile-socials">
                    <a href="https://www.facebook.com/p/Mille-et-une-Notes-100069392753204/" target="_blank" rel="noopener noreferrer">
                        <img src={Facebook} alt="Facebook" />
                    </a>
                    <span>rejoignez-nous !</span>
                </div>
            </div>
            
            {/* Overlay pour fermer le menu en cliquant à l'extérieur */}
            {mobileMenuOpen && (
                <div 
                    className="nav__mobile-overlay"
                    onClick={() => setMobileMenuOpen(false)}
                ></div>
            )}
        </nav>
    )
};