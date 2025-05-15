import { useEffect } from 'react';
import './MentionsLegales.scss';
import PageLayout from '../components/PageLayout';

export default function MentionsLegales() {
    useEffect(() => {
        document.title = 'Mentions légales - Mille et une notes';
    }, []);

    return (
        <main className="mentions-legales">
            <PageLayout>
                <h1>Mentions légales</h1>
                
                <section>
                    <h2>Éditeur du site</h2>
                    <p><strong>Nom de l'école :</strong> École de musique Mille et une notes</p>
                    <p><strong>Forme juridique :</strong> Association loi 1901</p>
                    <p><strong>Adresse :</strong> Domaine culturel de la Tourtillère, 17138 Puilboreau, France</p>
                    <p><strong>Téléphone :</strong> 05 46 68 86 21</p>
                    <p><strong>E-mail :</strong> ecoledemusiquepuilboreau@orange.fr</p>
                    <p><strong>Directeur de la publication :</strong> Corinne MARSH</p>
                </section>
                
                <section>
                    <h2>Hébergement</h2>
                    <p><strong>Hébergeur :</strong> Hostinger International Ltd.</p>
                    <p><strong>Adresse :</strong> 61 Lordou Vironos str., 6023 Larnaca, Chypre</p>
                    <p><strong>Site web :</strong> <a href="https://www.hostinger.com" target="_blank" rel="noopener noreferrer">www.hostinger.com</a></p>
                </section>
                
                <section>
                    <h2>Conception et développement</h2>
                    <p><strong>Développeur :</strong> Alex Bonniard</p>
                    <p><strong>Statut :</strong> Freelance</p>
                    <p><strong>SIRET :</strong> 91752575000019</p>
                    <p><strong>E-mail :</strong> alexbonniard@gmail.com</p>
                    <p><strong>Site web :</strong> <a href="https://alexbonniard.dev" target="_blank" rel="noopener noreferrer">alexbonniard.dev</a></p>
                </section>
                
                <section>
                    <h2>Propriété intellectuelle</h2>
                    <p>L'ensemble des contenus (textes, images, logos) présents sur le site milleetunenotes.com est la propriété de l'École de musique Mille et une notes ou de ses partenaires. Toute reproduction ou utilisation sans autorisation préalable est interdite.</p>
                </section>
                
                <section>
                    <h2>Données personnelles et cookies</h2>
                    <p>Le site milleetunenotes.com ne collecte aucune donnée personnelle et n'utilise pas de cookies. Aucun traitement de données n'est effectué.</p>
                </section>
                
                <section>
                    <h2>Responsabilité</h2>
                    <p>Les informations fournies sur le site sont à titre informatif. L'École de musique Mille et une notes ne saurait être tenu responsable des erreurs ou omissions dans les contenus publiés.</p>
                </section>
            </PageLayout>
        </main>
    );
}
