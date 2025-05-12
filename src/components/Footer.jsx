import './Footer.scss';
import Facebook from '../assets/icon_facebook.svg';
import Logo from '../assets/school_logo.png';

export default function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-title">
                    <h3>Mille et une notes</h3>
                </div>
                
                <div className="footer-links">
                    <a href="/mentions-legales">Mentions légales</a>
                    <span className="separator">•</span>
                    <a href="/contact">Contact</a>
                </div>
                
                <div className="footer-credits">
                    <p>© {new Date().getFullYear()} - Réalisation : <a href="https://alexbonniard.dev" target="_blank" rel="noopener noreferrer">Alex Bonniard</a></p>
                </div>
            </div>
            <div className="footer-logo">
                <img src={Logo} alt="Logo de l'école" />
            </div>
        </footer>
    )
}