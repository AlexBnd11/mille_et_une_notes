import './Studio.scss';
import PageLayout from '../components/PageLayout';
import StudioPhoto from '../assets/studio_cover_exemple.jpg';
import StudioPhoto2 from '../assets/studio_2.jpg';
import email from '../assets/icon_email.png';

export default function Studio() {
    return (
        <main className="studio">
            <PageLayout>
                <h1>Le studio d'enregistrement</h1>
                <img className="studio__cover" src={StudioPhoto} alt="Studio d'enregistrement Mille et une notes" />
                <div className="studio__content__1">
                    <div className="studio__content__1__left">
                        <p>Mille et une notes dispose d'un studio d'enregistrement et de production musicale conçu pour accueillir artistes et groupes de tous horizons musicaux. Il permet d'accéder à des outils professionnels et polyvalents, et de bénéficier d'un accompagnement adapté tout au long de votre projet.</p>
                        <p>Situé au cœur de l'école, notre studio bénéficie d’un environnement riche en musiciens et musiciennes, professionnel·les et pédagogues. Cette synergie garantit une base de connaissances solide et diversifiée, mise au service de chaque projet avec créativité et professionnalisme.</p>                 
                    </div>
                    <div className="studio__content__1__right">
                        <iframe src="https://www.youtube.com/embed/tPTTNoY7W4s?si=yymURrQuNDc1Y_B9" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>
                <div className="studio__content__2">
                    <div className="studio__content__2__left">
                        <img src={StudioPhoto2} alt="Photo du studio d'enregistrement Mille et une notes" />
                    </div>
                    <div className="studio__content__2__right">
                        <div className="studio__content__2__right__text">
                            <h2>Tarifs</h2>
                            <p>La tarification unique et avantageuse de 25€/h est valable pour tous vos projets.</p>
                        </div>
                        <div className="studio__content__2__right__text">
                            <h2>Contact</h2>
                            <p>Pour toute demande de réservation ou de renseignements, n'hésitez pas à contacter le studio :</p>
                            <p className="studio__content__2__right__text__p"><img src={email} alt="email" /> <a href="mailto:studio.milleetunenotes@gmail.com">studio.milleetunenotes@gmail.com</a></p>
                        </div>
                    </div>
                </div>
            </PageLayout>
        </main>
    )
}
