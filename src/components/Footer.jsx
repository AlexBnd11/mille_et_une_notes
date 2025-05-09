import './Footer.scss';

export default function Footer() {
    return (
        <footer>
            <p>
                © {new Date().getFullYear()} Mille et une notes, École de musique de Puilboreau - Mentions légales - Réalisation : Alex Bonniard
            </p>
        </footer>
    )
}