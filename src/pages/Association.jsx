import Tourtillere from '../assets/tourtillere.png';
import './Association.scss';

export default function Association() {
    return (
        <main className="association">
            <h1>Une association avant tout</h1>
            <div className="association__content_1">
                <img src={Tourtillere} alt="Château de la Tourtillere" />
                <div className="association__content_1-text">
                    <p>
                        L'École de Musique Mille & Une Notes est une <strong>école de musique associative</strong> (loi 1901) qui a pour but de permettre de développer l'enseignement musical. Elle est située au Domaine culturel de La Tourtillère, à Puilboreau.
                    </p>
                    <p>
                        Elle fait partie du Réseau des écoles de musique de la CDA de La Rochelle. Elle est gérée par un conseil d'administration composé de 13 membres bénévoles. <br /> 19 professeurs diplômés assurent quotidiennement les cours. L'accueil est assuré par une secrétaire au moment des cours. <br /> En 2023, elle accueille 228 adhérents.        
                    </p>
                </div>
            </div>
            <div className="association__content_2">
                <img src={Tourtillere} alt="" />
                <div className="association__content_2-text">
                    <h2>
                        Notre Mission                    
                    </h2>
                    <p>
                        L'école de Musique est un lieu d'enseignement artistique qui propose successivement la découverte, l'initiation et l'approfondissement des connaissances musicales.
                    </p>
                    <p>
                        Ce lieu de développement culturel et social, ouvert à des publics variés, dès 4 ans et sans limite d'âge, se propose de favoriser l'épanouissement par l'accès à une pratique artistique amateur et autonome. Ses projets et son rayonnement s'inscrivent dans le cadre d'une participation à la vie culturelle de la commune et des communes voisines.
                    </p>
                </div>
            </div>
            <div className="association__content_3">
                <h3>Ressources</h3>
                <div className="association__content_3-ressources">
                    <a href="">Dernier compte-rendu du CA</a>
                    <a href="">Règlement intérieur</a>
                </div>
            </div>
        </main>
    )
}