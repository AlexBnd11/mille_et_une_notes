import { Link, NavLink } from 'react-router-dom';
import './Nav.scss';
import Logo from "../assets/school_logo.png";

export default function Nav() {
    return (
        <nav>
            <div className="nav__logo">
                <Link to="/">
                    <img src={Logo} className="nav__logo-img"/>
                </Link>
            </div>

            <div className="nav__list">
                <ul>
                    <li><NavLink to="/" activeClassName="--active">Accueil</NavLink></li>
                    <li className="nav__item-dropdown">
                        <div className="nav__dropdown-toggle">
                            L'école <span className="nav__dropdown-arrow">▼</span>
                        </div>
                        <ul className="nav__dropdown-menu">
                            <li><NavLink to="/association" activeClassName="--active">L'association</NavLink></li>
                            <li><NavLink to="/parcours" activeClassName="--active">Parcours</NavLink></li>
                            <li><NavLink to="/pratiques-musicales" activeClassName="--active">Pratiques Musicales</NavLink></li>
                        </ul>
                    </li>
                    <li><NavLink to="/agenda" activeClassName="--active">Agenda</NavLink></li>
                    <li><NavLink to="/studio" activeClassName="--active">Studio d'enregistrement</NavLink></li>
                    <li><NavLink to="/contact" activeClassName="--active">Contact & Tarifs</NavLink></li>
                </ul>
            </div>
            
            <div className="nav__socials">
                <span>abonnez-vous !</span>
            </div>
        </nav>
    )
}   