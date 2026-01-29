'use client';

import { useEffect, useRef } from 'react';

export default function PremiumBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let time = 0;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Generate stars
    const stars = [];
    const starCount = Math.floor((canvas.width * canvas.height) / 8000);

    const generateStars = () => {
      stars.length = 0;
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.4 + 0.7,
          twinkleSpeed: Math.random() * 0.08 + 0.04,
          twinkleOffset: Math.random() * Math.PI * 2,
        });
      }
    };

    generateStars();

    const drawStar = (star) => {
      // Calculate twinkling effect - more dramatic
      const twinkle = Math.sin(time * star.twinkleSpeed + star.twinkleOffset) * 0.7 + 0.3;
      const opacity = star.opacity * twinkle;

      ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fill();

      // Add brighter glow to all stars
      const glowGradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.radius * 4);
      glowGradient.addColorStop(0, `rgba(255, 255, 255, ${opacity * 0.5})`);
      glowGradient.addColorStop(1, `rgba(255, 255, 255, 0)`);

      ctx.fillStyle = glowGradient;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius * 4, 0, Math.PI * 2);
      ctx.fill();
    };

    const animate = () => {
      // Clear with night sky gradient
      const gradientBg = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradientBg.addColorStop(0, '#0a0e27');
      gradientBg.addColorStop(0.5, '#050505');
      gradientBg.addColorStop(1, '#0a0e27');

      ctx.fillStyle = gradientBg;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw all stars
      stars.forEach((star) => {
        drawStar(star);
      });

      time++;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0"
      style={{ display: 'block' }}
    />
  );
}
