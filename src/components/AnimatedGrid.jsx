import { useEffect, useRef } from 'react';
import './AnimatedGrid.scss';
import backgroundSquare1 from '../assets/background_square_1.png';
import backgroundSquare2 from '../assets/background_square_2.png';
import backgroundSquare3 from '../assets/background_square_3.png';
import backgroundSquare4 from '../assets/background_square_4.png';
import backgroundSquare5 from '../assets/background_square_5.png';
import backgroundSquare6 from '../assets/background_square_6.png';

export default function AnimatedGrid() {
  const gridRef = useRef(null);
  
  useEffect(() => {
    const images = [
      backgroundSquare1, 
      backgroundSquare2, 
      backgroundSquare3,
      backgroundSquare4,
      backgroundSquare5,
      backgroundSquare6
    ];
    
    const grid = gridRef.current;
    if (!grid) return;
    
    // Vider la grille au cas où
    grid.innerHTML = '';
    
    for (let i = 0; i < 30; i++) {
      const cell = document.createElement('div');
      cell.className = 'grid-cell';
      
      const img = document.createElement('img');
      img.className = 'grid-image';
      img.src = images[Math.floor(Math.random() * images.length)];
      img.alt = '';
      
      cell.appendChild(img);
      grid.appendChild(cell);
      
      // Ajouter l'événement de survol
      cell.addEventListener('mouseenter', () => {
        // Choisir une nouvelle image aléatoire
        img.src = images[Math.floor(Math.random() * images.length)];
        
        // Ajouter la classe active
        img.classList.add('active');
        
        // Supprimer la classe après l'animation
        setTimeout(() => {
          img.classList.remove('active');
        }, 800);
      });
    }
    
    // Nettoyage
    return () => {
      // Supprimer tous les écouteurs d'événements si nécessaire
      const cells = grid.querySelectorAll('.grid-cell');
      cells.forEach(cell => {
        cell.replaceWith(cell.cloneNode(true));
      });
    };
  }, []);
  
  return (
    <div className="animated-grid" ref={gridRef}></div>
  );
} 