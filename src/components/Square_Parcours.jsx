import './Square-Parcours.scss';

export default function Square_Parcours({ text, backgroundImage, tag, title, subtitle }) {
    return (
        <div className="square-parcours">
            <div className="square-parcours__content" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="square-parcours__content__tag">
                    <span>{tag}</span>
                </div>
                <div className="square-parcours__content__title">
                    <h2>{title}</h2>
                    <span>{subtitle}</span>
                </div>
            </div>
            <div className="square-parcours__content__text">
                <p>{text}</p>
            </div>
        </div>
    )
}
