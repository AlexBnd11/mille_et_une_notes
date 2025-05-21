import Tourtillere from '../assets/tourtillere.png';
import Tourtillere2 from '../assets/tourtillere_2.jpg';
import { useEffect } from 'react';
import './Association.scss';
import PageLayout from '../components/PageLayout';
import ReglementInterieur from '../assets/reglement_interieur.pdf';
export default function Association() {
    useEffect(() => {
        document.title = 'Association - Mille et une notes';
    }, []);

    return (
        <main className="association">     
            <PageLayout>
            <h1>Une association avant tout</h1>
            <div className="association__content_1">
                <img src={Tourtillere} alt="Château de la Tourtillere" />
                <div className="association__content_1-text">
                    <p>
                    L’association Mille & Une Notes (loi 1901), fondée en 1996 par sa Présidente-Fondatrice Corinne MARSH, est une <strong>école de musique associative</strong> qui a pour but de développer l’enseignement musical. Elle est située au premier étage du château du domaine culturel de La Tourtillère, à Puilboreau.                    </p>
                    <p>
                    Elle fait partie du réseau des écoles de musique de la CDA et travaille en étroite collaboration avec le Conservatoire de La Rochelle. Elle est gérée par un conseil d’administration composé de membres bénévoles. <br /> Des professeurs diplômés assurent les cours pour plus de 255 adhérents. L’accueil est assuré par notre secrétaire aux horaires d'ouverture du secrétariat.                    </p>
                </div>
            </div>
            <div className="association__content_2">
                <img src={Tourtillere2} alt="Château de la Tourtillere" />
                <div className="association__content_2-text">
                    <h2>
                        Notre Mission                    
                    </h2>
                    <p>
                        Notre école a pour vocation de transmettre l’amour de la musique, de cultiver l’écoute, la rigueur, la créativité, et surtout, le plaisir de jouer ensemble. Grâce à l'engagement de nos professeurs et à la confiance des familles, nous continuons à grandir, à innover, et à offrir un cadre propice à l’éveil artistique de chacun, dès 4 ans et sans limite d’âge.
                    </p>
                    <h2>Nos objectifs</h2>
                    <ul>
                        <li>Dispenser un enseignement musical en adéquation avec le schéma pédagogique communautaire tel qu'il a été instauré par le Conservatoire de La Rochelle.</li>
                        <li>Favoriser les pratiques collectives.</li>
                        <li>Assurer une progression adaptée à chaque élève en les préparant aux examens de différents cycles.</li>
                        <li>Aborder les styles musicaux les plus variés.</li>
                        <li>Favoriser les rencontres et les échanges avec d'autres associations communales et d'autres écoles et orchestres, en France et à l'étranger.</li>
                        <li>Aborder des publics nouveaux : scolaires, handicapés...</li>
                        <li>Favoriser les liens inter-générationnels</li>
                    </ul>
                </div>
            </div>
            <div className="association__content_3">
                <div className="association__content_3__mot">
                    <h2>Le mot du président</h2>
                    <p>
                        C’est avec une grande joie et une profonde fierté que je vous adresse ces quelques mots au nom de
                        toute l’équipe de notre école de musique. Chaque année, nous voyons nos élèves progresser,
                        s’épanouir et partager leur passion avec enthousiasme. Chaque année, nous avons de nouveaux
                        lauréats aux examens. Chaque année, nos concerts font salle comble. Chaque année, nous vivons des
                        moments forts, chargés d'émotions positives. Chaque année, les applaudissements du public nous
                        encouragent à poursuivre notre travail. C'est notre moteur et notre plus belle récompense !
                    </p>
                    <p>
                        Une école de musique est un diffuseur de culture et un vecteur d'attractivité pour un territoire, mais
                        encore faut-il lui insuffler la force nécessaire à aller de l'avant. Depuis décembre 2023, nous avons à
                        cœur de dynamiser l'école avec de nouveaux projets et de nouvelles collaborations. Je peux citer
                        l'ouverture d'une antenne sur la commune de Dompierre-sur-Mer, la création d'un département
                        jazz, l'aménagement du studio d'enregistrement, la programmation des stages de cordes et de rap
                        pour la saison 2025-2026, l'instauration d'un « mois découverte » en juin, mais encore un

                        partenariat avec l'ensemble tango « Las del Mar », l'ouverture d'une classe-orchestre avec l'école élémentaire de Puilboreau, des actions

                        musicales au sein de la médiathèque... La liste est déjà longue et nous avons encore plein d'idées !
                    </p>
                    <p>
                        Je tiens à exprimer ma gratitude envers nos professeurs pour leur engagement, nos élèves pour leur
                        persévérance et les familles pour leur confiance indéfectible. Je remercie chaleureusement mon
                        équipe administrative, qui participe à cette belle aventure humaine. Je remercie également nos
                        partenaires institutionnels qui nous soutiennent dans cette dynamique, ainsi que la mairie de
                        Puilboreau, qui met ses locaux à la disposition de nos élèves et leur offre l'opportunité de se
                        produire dans une magnifique salle de concert.
                    </p>
                    <p>Musicalement,</p>
                    <p>Michel PORTERIAS</p>
                </div>

                <h3>Ressources</h3>
                <div className="association__content_3__ressources">
                    <a href="https://drive.google.com/drive/folders/1yQ0--jonVgEPLXqJcO4cI5w5_p-91w52?usp=sharing">Derniers comptes-rendus du CA</a>
                    <a href={ReglementInterieur} target="_blank" rel="noopener noreferrer">Règlement intérieur</a>
                </div>
            </div>
            </PageLayout>
        </main>
    )
}