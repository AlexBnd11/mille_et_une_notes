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
        const rssUrl = 'https://rss.app/feeds/YCE2Rw17em2V8AQI.xml';
        
        // Liste de proxies CORS à essayer
        const corsProxies = [
            `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(rssUrl)}`,
            `https://cors-anywhere.herokuapp.com/${rssUrl}`,
            `https://thingproxy.freeboard.io/fetch/${rssUrl}`,
            `https://api.allorigins.win/get?url=${encodeURIComponent(rssUrl)}`
        ];

        for (let i = 0; i < corsProxies.length; i++) {
            try {
                console.log(`Tentative avec proxy ${i + 1}:`, corsProxies[i]);
                
                const response = await fetch(corsProxies[i]);
                
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}`);
                }
                
                let data;
                let xmlContent;
                
                // Différents formats de réponse selon le proxy
                if (corsProxies[i].includes('allorigins')) {
                    data = await response.json();
                    xmlContent = data.contents;
                } else if (corsProxies[i].includes('codetabs')) {
                    xmlContent = await response.text();
                } else {
                    xmlContent = await response.text();
                }
                
                // Parse le XML
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(xmlContent, 'text/xml');
                
                // Vérifier si le XML est valide
                if (xmlDoc.querySelector('parsererror')) {
                    throw new Error('XML invalide');
                }
                
                // Extraire les posts
                const items = xmlDoc.querySelectorAll('item');
                
                if (items.length === 0) {
                    throw new Error('Aucun post trouvé');
                }
                
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
                
                console.log(`✅ Succès avec proxy ${i + 1}`);
                setPosts(facebookPosts);
                setLoading(false);
                return; // Sortir de la boucle si succès
                
            } catch (err) {
                console.error(`❌ Échec proxy ${i + 1}:`, err.message);
                
                // Si c'est le dernier proxy, afficher l'erreur
                if (i === corsProxies.length - 1) {
                    setError('Impossible de charger les publications Facebook');
                    setLoading(false);
                }
            }
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
                        
                        {error && (
                            <div className="error">
                                <p>❌ {error}</p>
                                <p>En attendant, consultez directement notre page Facebook :</p>
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
