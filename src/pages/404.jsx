import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './404.scss';
import PageLayout from '../components/PageLayout';
import backgroundNotes from '../assets/background_notes.png';
import backgroundNotes2 from '../assets/background_notes_2.png';

export default function NotFound() {
    useEffect(() => {
        document.title = '404 - Page non trouvée - Mille et une notes';
    }, []);

    return (
        <main className="not-found">
            <PageLayout>
                <div className="not-found__container">
                    <h1>404</h1>
                    <h2>Vous vous êtes perdu ? Pas de panique</h2>
                    <p>Cette page n'existe pas ou a été déplacée.</p>
                    <Link to="/" className="not-found__button">
                        Retourner à la page d'accueil
                    </Link>
                    <img src={backgroundNotes} alt="notes de musique" className="not-found__notes not-found__notes-1" />
                    <img src={backgroundNotes2} alt="notes de musique" className="not-found__notes not-found__notes-2" />
                </div>
            </PageLayout>
        </main>
    );
}