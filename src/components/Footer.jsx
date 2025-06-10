import './Footer.scss';
import Logo2 from '../assets/school_logo_2.png';

export default function Footer() {
    return (
        <footer>
            <div className="footer__content">
                <div className="footer__title">
                    <h3>Mille et une notes</h3>
                </div>
                
                <div className="footer__links">
                    <a href="/mentions-legales">Mentions légales</a>
                    <span className="separator">•</span>
                    <a href="/contact">Contact</a>
                </div>
                
                <div className="footer__credits">
                    <p>© {new Date().getFullYear()} - Réalisation : <a href="https://weberria.fr/" target="_blank" rel="noopener noreferrer">Weberria</a></p>
                </div>
            </div>
            <div className="footer__logo">
                <img src={Logo2} alt="Logo de l'école" />
            </div>
        </footer>
    )
}