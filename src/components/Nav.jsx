import { Link, NavLink } from 'react-router-dom';
import './Nav.scss';
import Logo from "../assets/school_logo.png";

export default function Nav() {
    // Fonction utilitaire pour les classes actives
    const activeClass = ({ isActive }) => isActive ? "--active" : "";
    const DownArrow = () => (
        <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" className="nav__dropdown-arrow">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
            <g id="SVGRepo_iconCarrier"> <path d="M7 10L12 15L17 10" stroke="#000000" strokeWidth="2.136" strokeLinecap="round" strokeLinejoin="round"/> </g>
        </svg>
      );
    
    return (
        <nav>
            <div className="nav__logo">
                <Link to="/">
                    <img src={Logo} className="nav__logo-img"/>
                </Link>
            </div>

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
                <span>abonnez-vous !</span>
            </div>
        </nav>
    )
};