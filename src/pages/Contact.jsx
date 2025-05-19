import { useEffect } from 'react';
import './Contact.scss';
import phone from '../assets/icon_phone.png';
import email from '../assets/icon_email.png';
import location from '../assets/icon_location.svg';
import tableau_tarifs from '../assets/tarifs-tableau.png';
import PageLayout from '../components/PageLayout';

export default function Contact() {
    useEffect(() => {
        document.title = 'Contact - Mille et une notes';
    }, []);

    return (
        <main className="contact-tarifs">
            <PageLayout>
            <h1>Contact & tarifs</h1>
            <section className="contact-tarifs__contact">
                <div className="contact-tarifs__contact__left">
                    <h2>Contact</h2>
                    <div className="contact-tarifs__contact__left__1">
                        <p>Secrétariat : Sophie Durand</p>
                        <p>Fermeture durant les congés scolaires</p>
                    </div>
                    <div className="contact-tarifs__contact__left__2">
                        <p><img src={location} alt="location" /> <a href="https://maps.google.com/?q=Domaine+culturel+de+la+Tourtillère,+17138+Puilboreau" target="_blank" rel="noopener noreferrer">Domaine culturel de la Tourtillère, 17138 Puilboreau</a></p>
                        <p><img src={phone} alt="phone" /> <a href="tel:0546688621">05 46 68 86 21</a></p>
                        <p><img src={email} alt="email" /> <a href="mailto:ecoledemusiquepuilboreau@orange.fr">ecoledemusiquepuilboreau@orange.fr</a></p>
                    </div>
                </div>
                <div className="contact-tarifs__contact__right">
                    <table className="contact-tarifs__contact__right__hours">
                        <tbody>
                            <tr>
                                <td>Lundi</td>
                                <td>14h30 - 18h</td>
                            </tr>
                            <tr>
                                <td>Mardi</td>
                                <td>14h30 - 18h</td>
                            </tr>
                            <tr>
                                <td>Mercredi</td>
                                <td>10h30 - 13h / 14h - 18h</td>
                            </tr>
                            <tr>
                                <td>Jeudi</td>
                                <td>14h30 - 18h</td>
                            </tr>
                            <tr>
                                <td>Vendredi</td>
                                <td>15h - 17h</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <section className="contact-tarifs__tarifs">
                    <div className="contact-tarifs__tarifs__left">
                        <h2>Tarifs</h2>
                        <p>Ouverture des inscriptions 2025-2026 : <strong>Prochainement</strong></p>
                        <p>Les montants indiqués sur le tableau ci-contre sont annuels.</p>
                        <p>Adhésion à l'association : <strong>30€</strong></p>
                        <p>Paiement en 10 fois maximum par prélèvements automatiques, ou paiement en 3 fois par chèque (en octobre, janvier et avril).</p>
                    </div>
                    <div className="contact-tarifs__tarifs__right">
                            <img src={tableau_tarifs} alt="tarifs" />
                    </div>
                </section>
            </PageLayout>
        </main>
    )
}
