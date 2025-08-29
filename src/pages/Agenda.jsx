import { useEffect, useState } from 'react';
import './Agenda.scss';
import PageLayout from '../components/PageLayout';

export default function Agenda() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchFacebookPosts();
    }, []);

    const fetchFacebookPosts = async () => {
        try {
            // Utiliser ScrapingBee pour récupérer les publications Facebook
            const scrapingUrl = 'https://api.scrapingbee.com/api/v1/';
            const params = new URLSearchParams({
                api_key: 'CGEKMQ3UG78CR9ZC6JK7XQ85196AU4J8ICQ3ZQ2U19CZX9BQOXWGJ1OHUVS9KMQC5796AVMF2G27O9CP',
                url: 'https://www.facebook.com/p/Mille-et-une-Notes-100069392753204/',
                render_js: 'false',
                extract_rules: JSON.stringify({
                    posts: {
                        selector: '.userContent',
                        type: 'list',
                        output: {
                            text: 'text',
                            timestamp: '.timestampContent'
                        }
                    }
                })
            });

            const response = await fetch(`${scrapingUrl}?${params}`);
            
            if (!response.ok) {
                throw new Error(`Erreur ScrapingBee: ${response.status}`);
            }

            const data = await response.json();
            
            if (data.posts && data.posts.length > 0) {
                // Traiter les vrais posts Facebook
                const facebookPosts = data.posts.slice(0, 3).map((post, index) => ({
                    title: `Publication ${index + 1}`,
                    description: post.text || 'Contenu Facebook',
                    link: 'https://www.facebook.com/p/Mille-et-une-Notes-100069392753204/',
                    imageUrl: null,
                    date: new Date().toLocaleDateString('fr-FR')
                }));
                
                setPosts(facebookPosts);
            } else {
                // Fallback si aucun post trouvé
                throw new Error('Aucune publication trouvée');
            }
            
            setLoading(false);
            
        } catch (err) {
            console.error('Erreur lors de la récupération:', err);
            
            // En cas d'erreur, utiliser des données de fallback
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
            setLoading(false);
        }
    };

    const stripHtml = (html) => {
        const div = document.createElement('div');
        div.innerHTML = html;
        return div.textContent || div.innerText || '';
    };

    const truncateText = (text, maxLength = 150) => {
        if (text.length <= maxLength) return text;
        return text.substr(0, maxLength) + '...';
    };

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchFacebookPosts();
    }, []);

    const fetchFacebookPosts = async () => {
        try {

            const rssUrl = 'https://rss.app/feeds/YCE2Rw17em2V8AQI.xml';
            
            // Service CORS proxy pour accéder au RSS
            const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(rssUrl)}`;
            
            const response = await fetch(proxyUrl);
            const data = await response.json();
            
            // Parse le XML
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data.contents, 'text/xml');
            
            // Extraire les posts
            const items = xmlDoc.querySelectorAll('item');
            const facebookPosts = Array.from(items).slice(0, 3).map(item => {
                const description = item.querySelector('description')?.textContent || '';
                const imageUrl = extractImageFromDescription(description);
                
                return {
                    title: item.querySelector('title')?.textContent || '',
                    link: item.querySelector('link')?.textContent || '',
                    description: description,
                    imageUrl: imageUrl,
                    pubDate: item.querySelector('pubDate')?.textContent || '',
                    date: new Date(item.querySelector('pubDate')?.textContent || '').toLocaleDateString('fr-FR')
                };
            });
            
            setPosts(facebookPosts);
            setLoading(false);
        } catch (err) {
            console.error('Erreur lors de la récupération des posts:', err);
            setError('Impossible de charger les publications Facebook');
            setLoading(false);
        }
    };

    const extractImageFromDescription = (description) => {
        // Extraire l'URL de l'image depuis la description HTML
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = description;
        
        // Chercher les images dans la description
        const img = tempDiv.querySelector('img');
        if (img && img.src) {
            return img.src;
        }
        
        // Chercher les URLs d'images dans le texte
        const imgRegex = /(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))/i;
        const match = description.match(imgRegex);
        if (match) {
            return match[1];
        }
        
        return null;
    };

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
                        
                        {loading && (
                            <div className="loading">
                                <p>🔄 Chargement des publications...</p>
                            </div>
                        )}
                        
                        {!loading && posts.length > 0 && (
                            <>
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
                            </>
                        )}
                        
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
                <div className="agenda-content">
                    <h1>Agenda et Actualités</h1>
                    
                    <div className="facebook-section">
                        
                        {loading && (
                            <div className="loading">
                                <p>🔄 Chargement des publications...</p>
                            </div>
                        )}
                        
                        {error && (
                            <div className="error">
                                <p>❌ {error}</p>
                                <a 
                                    href="https://www.facebook.com/p/Mille-et-une-Notes-100069392753204/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="fallback-link"
                                >
                                    Voir nos actualités sur Facebook
                                </a>
                            </div>
                        )}
                        
                        {!loading && !error && posts.length > 0 && (
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
                        )}
                        
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
