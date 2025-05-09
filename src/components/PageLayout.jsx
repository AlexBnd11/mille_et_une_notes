import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';

export default function PageLayout({ children }) {
  // Fonction pour ajouter l'animation aux éléments de premier niveau
  const addAnimationToTopLevelElements = () => {
    return React.Children.map(children, (child, index) => {
      // Ignorer les éléments null ou undefined
      if (!child) return child;
      
      // Calculer le délai en fonction de l'index
      const delay = index * 0.15;
      
      // Envelopper chaque enfant dans AnimateOnScroll
      return (
        <AnimateOnScroll delay={delay}>
          {child}
        </AnimateOnScroll>
      );
    });
  };

  return <>{addAnimationToTopLevelElements()}</>;
} 