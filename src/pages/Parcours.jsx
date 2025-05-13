import { useEffect } from 'react';
import './Parcours.scss';
import Square_Parcours from '../components/Square_Parcours';
import background_eveil from '../assets/parcours/background_eveil.jpg';
import background_labo from '../assets/parcours/background_labo.jpg';
import background_parcours from '../assets/parcours/background_parcours.jpg';
import background_mao from '../assets/parcours/background_mao.jpg';
import background_groupe from '../assets/parcours/background_groupe.jpg';
import PageLayout from '../components/PageLayout';

export default function Parcours() {
    useEffect(() => {
        document.title = 'Parcours - Mille et une notes';
    }, []);

    return (
        <main className="parcours">
            <PageLayout>
            <h1>Les parcours Milles et une notes</h1>
            <p className="parcours__description">
                La musique est un art et une activité culturelle consistant à combiner sons et silences au cours du temps. Les composantes principales sont le rythme, l'harmonie, les nuances et le timbre. Elle est aujourd'hui considérée comme une forme de poésie moderne.
            </p>
            <div className="parcours__content">
                <Square_Parcours
                    text="Éveil artistique et musical, avec des ateliers combinant pulsation, chant, corps, écoute et créativité pour favoriser un développement moteur harmonieux."
                    backgroundImage={background_eveil}
                    tag="4-5 ans"
                    title="L'éveil"
                    subtitle="45 minutes par semaine"
                />
                <Square_Parcours
                    text="Dans cet atelier collectif, les enfants vont découvrir, toucher, jouer de tous les instruments enseignés à l'école, avec également une introduction à l'orchestre."
                    backgroundImage={background_labo}
                    tag="6-10 ans"
                    title="Le labo"
                    subtitle="1 heure par semaine"
                />
                <Square_Parcours
                    text="Formation instrumentale individuelle de 30 minutes en cycle 1 ou 45 minutes en cycle 2. Pratique collective obligatoire : chœur d'enfants, orchestres, ateliers ou ensembles."
                    backgroundImage={background_parcours}
                    tag="Débutant ou confirmé"
                    title="Parcours individuel"
                    subtitle="30 ou 45 minutes par semaine"
                />
                <Square_Parcours
                    text="La MAO permet instrumentistes ou débutants, de créer, enregistrer, composer et mixer de la musique avec des logiciels adaptés, offrant de nombreuses possibilités dans tous les styles musicaux."
                    backgroundImage={background_mao}
                    tag="À partir de 12 ans"
                    title="Musique assistée par ordinateur (MAO)"
                    subtitle="Aucun niveau musical requis"
                />
                <Square_Parcours
                    text="Possibilité de rejoindre les orchestres ou ensembles de l’école pour jouer ou chanter, selon leur niveau et avec l'approbation du professeur référent."
                    backgroundImage={background_groupe}
                    tag="Débutant ou confirmé"
                    title="Pratique collective seule"
                    subtitle="Durée variable selon l'ensemble"
                />
            </div>
            </PageLayout>
        </main>
    )
};
