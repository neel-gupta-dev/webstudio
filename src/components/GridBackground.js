'use client';

import { useEffect, useRef } from 'react';

export default function GridBackground({ magnification = true }) {
  const canvasRef = useRef(null);
  const mousePosition = useRef({ x: -1000, y: -1000 });
  const smoothedMouse = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mousePosition.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    if (magnification) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    // Configuration
    const gridSize = 40;
    const influenceRadius = 250;
    const strength = 0.15; // How much the grid distorts

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw background
      ctx.fillStyle = '#f9fafb'; // Match the gray-50 theme
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = 'rgba(0, 0, 0, 0.15)'; // Slightly darker for visibility
      ctx.lineWidth = 1;

      // Smooth mouse movement
      smoothedMouse.current.x += (mousePosition.current.x - smoothedMouse.current.x) * 0.1;
      smoothedMouse.current.y += (mousePosition.current.y - smoothedMouse.current.y) * 0.1;

      const cols = Math.ceil(canvas.width / gridSize) + 2;
      const rows = Math.ceil(canvas.height / gridSize) + 2;
      
      const offsetX = -gridSize;
      const offsetY = -gridSize;

      const points = [];

      // Calculate grid points with distortion
      for (let y = 0; y < rows; y++) {
        const row = [];
        for (let x = 0; x < cols; x++) {
          let px = x * gridSize + offsetX;
          let py = y * gridSize + offsetY;

          const dx = smoothedMouse.current.x - px;
          const dy = smoothedMouse.current.y - py;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < influenceRadius) {
            // Calculate distortion
            // Push points away from cursor to create magnification effect
            const force = (1 - Math.pow(dist / influenceRadius, 2)) * strength;
            px -= dx * force;
            py -= dy * force;
          }

          row.push({ x: px, y: py });
        }
        points.push(row);
      }

      // Draw lines connecting points
      ctx.beginPath();
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const p = points[y][x];
          
          if (x < cols - 1) {
            const nextP = points[y][x + 1];
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(nextP.x, nextP.y);
          }
          
          if (y < rows - 1) {
            const nextP = points[y + 1][x];
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(nextP.x, nextP.y);
          }
        }
      }
      ctx.stroke();
    };

    const render = () => {
      draw();
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      if (magnification) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [magnification]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
}