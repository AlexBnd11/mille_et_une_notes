import './Accueil.scss';
import Square from '../components/Square';
import AnimatedGrid from '../components/AnimatedGrid';
import backgroundSquare1 from '../assets/background_square_1.png';
import backgroundSquare2 from '../assets/background_square_2.png';
import backgroundSquare3 from '../assets/background_square_3.png';
import backgroundSquare4 from '../assets/background_square_4.png';
import backgroundSquare5 from '../assets/background_square_5.png';
import backgroundSquare6 from '../assets/background_square_6.png';
import backgroundNotes from '../assets/background_notes.png';
import backgroundNotes2 from '../assets/background_notes_2.png';
import phone from '../assets/icon_phone.png';
import email from '../assets/icon_email.png';
import event from '../assets/school_logo.png';
import PageLayout from '../components/PageLayout';

export default function Accueil() {
    return (
        <main>
            <PageLayout>
            <div className="hero-section">
                <AnimatedGrid />
                <h1>Mille et une notes <br /> École de musique de Puilboreau</h1>
                <address>
                    Domaine de la Tourtillère<br />
                    Lundi-vendredi : 14h30 - 18h30<br />
                    Mercredi : 10h-12h30 / 13h30-18h
                </address>
                <img src={backgroundNotes} alt="background notes" className='hero-section__notes_1' />
                <img src={backgroundNotes2} alt="background notes" className='hero-section__notes_2' />
            </div>
            <section className="accueil__squares">
                <Square
                    link="/association"
                    title="L'association"
                    backgroundColor="#f89b09"
                    backgroundImage={backgroundSquare1}
                    top="22%"
                    left="15.5%"
                />
                <Square
                    link="/parcours"
                    title="Les différents parcours"
                    backgroundColor="#0CA6A9"
                    backgroundImage={backgroundSquare2}
                    top="20%"
                    left="47%"
                />
                <Square
                    link="/pratiques-musicales"
                    title="Les pratiques musicales"
                    backgroundColor="#D36BE9"
                    backgroundImage={backgroundSquare3}
                    top="20%"
                    left="46%"
                />
                <Square
                    link="/agenda"
                    title="Agenda"
                    backgroundColor="#6A3C9F"
                    backgroundImage={backgroundSquare4}
                    top="24%"
                    left="26%"
                />
                <Square
                    link="/studio"
                    title="Studio d'enregistrement"
                    backgroundColor="#FD5F42"
                    backgroundImage={backgroundSquare5}
                    top="33%"
                    left="39%"
                />
                <Square
                    link="/contact"
                    title="Contact & Tarifs"
                    backgroundColor="#A4C106"
                    backgroundImage={backgroundSquare6}
                    top="21%"
                    left="18%"
                />
            </section>
            <div className="accueil__contact">
                <div className="accueil__contact-phone">
                    <img src={phone} alt="phone" />
                    <a href="tel:0546688621">
                        05 46 68 86 21
                    </a>
                </div>
                <div className="accueil__contact-email">
                    <img src={email} alt="email" />
                    <a href="mailto:ecoledemusiquepuilboreau@orange.fr">
                        ecoledemusiquepuilboreau@orange.fr
                    </a>
                </div>
            </div>
            <section className="accueil__event">
                <h2>Prochain événement</h2>
                <div className="accueil__event-content">
                    <img src={event} alt="event" />
                    <div className="accueil__event-content-text">
                        <p>Samedi 21 juin 2025</p>
                        <h3>Fête de la musique</h3>
                    </div>
                </div>
            </section>
            </PageLayout>
        </main>
    )
};