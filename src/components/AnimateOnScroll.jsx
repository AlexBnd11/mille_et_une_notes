import { useEffect, useRef, useState } from 'react';

export default function AnimateOnScroll({ 
  children, 
  delay = 0, 
  className = '',
  duration = 0.5,
  distance = 30
}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    // Fonction pour vérifier si l'élément est visible
    const checkIfVisible = () => {
      if (!elementRef.current) return;
      
      const rect = elementRef.current.getBoundingClientRect();
      // Modifier cette valeur pour déclencher l'animation plus tôt
      // 0.95 signifie que l'élément commence à s'animer quand il est à 95% de la hauteur de la fenêtre
      const isInView = rect.top <= window.innerHeight * 0.97;
      
      if (isInView && !isVisible) {
        setIsVisible(true);
        // Une fois visible, on arrête d'écouter le scroll
        window.removeEventListener('scroll', checkIfVisible);
      }
    };

    // Vérifier immédiatement au chargement
    checkIfVisible();
    
    // Ajouter l'écouteur d'événement pour le scroll
    window.addEventListener('scroll', checkIfVisible);
    
    // Nettoyage
    return () => {
      window.removeEventListener('scroll', checkIfVisible);
    };
  }, [isVisible]);

  // Style dynamique pour l'animation
  const style = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : `translateY(${distance}px)`,
    transition: isVisible ? `opacity ${duration}s ease, transform ${duration}s ease` : 'none',
    transitionDelay: isVisible ? `${delay}s` : '0s',
    willChange: 'opacity, transform'
  };

  return (
    <div 
      ref={elementRef}
      className={className}
      style={style}
    >
      {children}
    </div>
  );
} 