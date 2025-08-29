import { useEffect, useState } from 'react';
import './Agenda.scss';
import PageLayout from '../components/PageLayout';

export default function Agenda() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Afficher directement les posts de fallback
        const fallbackPosts = [
            {
                title: "🎵 Actualités de Mille et une Notes",
                description: "Découvrez nos dernières activités musicales et événements sur notre page Facebook.",
                link: "https://www.facebook.com/p/Mille-et-une-Notes-100069392753204/",
                imageUrl: null,
                date: new Date().toLocaleDateString('fr-FR')
            },
            {
                title: "🎼 Suivez nos actualités",
                description: "Restez informés de tous nos concerts, auditions et événements spéciaux.",
                link: "https://www.facebook.com/p/Mille-et-une-Notes-100069392753204/",
                imageUrl: null,
                date: new Date().toLocaleDateString('fr-FR')
            },
            {
                title: "📱 Communauté musicale",
                description: "Rejoignez notre communauté pour partager la passion de la musique.",
                link: "https://www.facebook.com/p/Mille-et-une-Notes-100069392753204/",
                imageUrl: null,
                date: new Date().toLocaleDateString('fr-FR')
            }
        ];

        setPosts(fallbackPosts);
    }, []);

    const stripHtml = (html) => {
        const div = document.createElement('div');
        div.innerHTML = html;
        return div.textContent || div.innerText || '';
    };

    const truncateText = (text, maxLength = 150) => {
        if (text.length <= maxLength) return text;
        return text.substr(0, maxLength) + '...';
    };

    return (
        <main className="agenda">
            <PageLayout>
                <div className="agenda-content">
                    <h1>Agenda et Actualités</h1>
                    
                    <div className="facebook-section">
                        <h2>📱 Nos dernières actualités Facebook</h2>
                        
                        <div className="posts-container">
                            {posts.map((post, index) => (
                                <article key={index} className="facebook-post">
                                    {post.imageUrl && (
                                        <div className="post-image">
                                            <img 
                                                src={post.imageUrl} 
                                                alt={post.title}
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                }}
                                            />
                                        </div>
                                    )}
                                    <div className="post-content">
                                        <h3 className="post-title">{post.title}</h3>
                                        <p className="post-description">
                                            {truncateText(stripHtml(post.description))}
                                        </p>
                                    </div>
                                    <div className="post-footer">
                                        <a 
                                            href={post.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="read-more"
                                        >
                                            Lire sur Facebook →
                                        </a>
                                    </div>
                                </article>
                            ))}
                        </div>
                        
                        <div className="facebook-info">
                            <p>
                                <a 
                                    href="https://www.facebook.com/p/Mille-et-une-Notes-100069392753204/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="facebook-link"
                                >
                                    Voir toutes nos actualités sur Facebook
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </PageLayout>
        </main>
    );
}
