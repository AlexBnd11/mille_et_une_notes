import { useEffect } from 'react';
import './Pratiques.scss';
import PageLayout from '../components/PageLayout';
import BackgroundInstruments from '../assets/background_instruments_1.jpg';
import BackgroundInstruments2 from '../assets/background_instruments_2.jpg';
import BackgroundPaysage from '../assets/background_instruments_paysage.jpg';

export default function Pratiques() {
    useEffect(() => {
        document.title = 'Pratiques - Mille et une notes';
    }, []);

    return (
        <main className="pratiques">
            <PageLayout>
                <h1>Découvrez les pratiques musicales de l'école</h1>
                <div className="pratiques__container">
                    <div className="pratiques__photos">
                        <img src={BackgroundInstruments2} alt="Instruments" />
                        <div className="pratiques__photos-paysage">
                            <img src={BackgroundPaysage} alt="Paysage" />
                        </div>
                        <img src={BackgroundInstruments} alt="Instruments" />
                    </div>
                    <section className="pratiques__instruments">
                        <h2>Les instruments</h2>
                        <ul>
                            <li>Basson français</li>
                            <li>Batterie</li>
                            <li>Clarinette</li>
                            <li>Contrebasse</li>
                            <li>Flûte traversière</li>
                            <li>Guitare (classique, folk, électrique, basse)</li>
                            <li>Harmonica</li>
                            <li>MAO</li>
                            <li>Piano (classique, jazz, contemporain)</li>
                            <li>Saxophone</li>
                            <li>Trombone</li>
                            <li>Trompette</li>
                            <li>Violon</li>
                            <li>Violoncelle</li>
                        </ul>
                    </section>
                    <section className="pratiques__collectives">
                        <h2>Les pratiques collectives & ensembles</h2>
                        <ul>
                            <li>Ateliers jazz</li>
                            <li>Ateliers musiques actuelles</li>
                            <li>Chœur d'enfants</li>
                            <li>Ensemble de flûtes</li>
                            <li>Ensemble de violoncelles</li>
                            <li>Jazz band</li>
                            <li>Musique de chambre</li>
                            <li>Orchestre de chambre</li>
                            <li>Orchestre d'harmonie Cycle I & II</li>
                            <li>Solfège</li>
                            <li>Stages jazz vocal</li>
                        </ul>
                    </section>
                </div>
            </PageLayout>
        </main>
    )
}
