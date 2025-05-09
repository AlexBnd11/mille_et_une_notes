import './Square.scss';
import { Link } from 'react-router-dom';

export default function Square({ title, backgroundColor, backgroundImage, top, left, link }) {
    return (
        <Link to={link}>
            <div className="square" style={{ backgroundColor }}>
                <span>{title}</span>
                <img src={backgroundImage} alt={title} style={{ top, left }} />
            </div>
        </Link>
    )
};
