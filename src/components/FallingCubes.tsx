// src/components/FallingCubes.tsx
import React from 'react';
import { useMousePosition } from '../hooks/useMousePosition';
import Cube from './Cube';

const FallingCubes: React.FC = () => {
  const { x, y } = useMousePosition();
  // Generamos un array fijo de 15 elementos
  const totalCubes = Array.from({ length: 15 });

  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden z-50"
      style={{
        // Esta máscara se mueve con el mouse, pero NO afecta a los hijos internos
        WebkitMaskImage: `radial-gradient(circle 200px at ${x}px ${y}px, black 30%, transparent 100%)`,
        maskImage: `radial-gradient(circle 200px at ${x}px ${y}px, black 30%, transparent 100%)`,
      }}
    >
      {totalCubes.map((_, i) => (
        <Cube key={i} index={i} />
      ))}
    </div>
  );
};

export default FallingCubes;