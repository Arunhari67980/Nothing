'use client';

import { useEffect, useRef } from 'react';

export default function TargetCursor() {
  const cursorRef = useRef(null);
  const ring1Ref = useRef(null);
  const ring2Ref = useRef(null);
  const crosshairRef = useRef(null);

  useEffect(() => {
    document.body.style.cursor = 'none';

    const cursor = cursorRef.current;
    const ring1 = ring1Ref.current;
    const ring2 = ring2Ref.current;
    const crosshair = crosshairRef.current;

    if (!cursor || !ring1 || !ring2 || !crosshair) return;

    let mouseX = 0;
    let mouseY = 0;
    let ring1X = 0;
    let ring1Y = 0;
    let ring2X = 0;
    let ring2Y = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      cursor.style.left = mouseX + 'px';
      cursor.style.top = mouseY + 'px';
      crosshair.style.left = mouseX + 'px';
      crosshair.style.top = mouseY + 'px';
    };

    const animateRings = () => {
      ring1X += (mouseX - ring1X) * 0.35;
      ring1Y += (mouseY - ring1Y) * 0.35;
      // Ring 2 follows Ring 1 quickly and smoothly
      ring2X += (ring1X - ring2X) * 0.5;
      ring2Y += (ring1Y - ring2Y) * 0.5;

      ring1.style.left = ring1X + 'px';
      ring1.style.top = ring1Y + 'px';
      ring2.style.left = ring2X + 'px';
      ring2.style.top = ring2Y + 'px';

      requestAnimationFrame(animateRings);
    };

    const handleMouseEnter = () => {
      cursor.style.opacity = '1';
      ring1.style.opacity = '1';
      ring2.style.opacity = '1';
      crosshair.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = '0';
      ring1.style.opacity = '0';
      ring2.style.opacity = '0';
      crosshair.style.opacity = '0';
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === 'BUTTON' ||
        e.target.tagName === 'A' ||
        e.target.closest('button') ||
        e.target.closest('a')
      ) {
        cursor.style.boxShadow = '0 0 30px rgba(0, 255, 255, 1), 0 0 60px rgba(255, 0, 200, 0.8), inset 0 0 20px rgba(0, 255, 255, 0.6)';
        ring1.style.boxShadow = '0 0 40px rgba(0, 255, 255, 1), inset 0 0 40px rgba(0, 255, 255, 0.4)';
        ring2.style.boxShadow = '0 0 50px rgba(255, 0, 200, 0.9), inset 0 0 30px rgba(255, 0, 200, 0.3)';
        ring1.style.borderColor = 'rgba(0, 255, 255, 1)';
        ring2.style.borderColor = 'rgba(255, 0, 200, 1)';
        ring1.style.transform = 'translate(-50%, -50%) scale(1.4) rotate(45deg)';
        ring2.style.transform = 'translate(-50%, -50%) scale(1.3) rotate(-45deg)';
      }
    };

    const handleMouseOut = (e) => {
      if (
        e.target.tagName === 'BUTTON' ||
        e.target.tagName === 'A' ||
        e.target.closest('button') ||
        e.target.closest('a')
      ) {
        cursor.style.boxShadow = '0 0 15px rgba(0, 255, 255, 0.8), 0 0 30px rgba(255, 0, 200, 0.5)';
        ring1.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.7)';
        ring2.style.boxShadow = '0 0 25px rgba(255, 0, 200, 0.6)';
        ring1.style.borderColor = 'rgba(0, 255, 255, 0.7)';
        ring2.style.borderColor = 'rgba(255, 0, 200, 0.6)';
        ring1.style.transform = 'translate(-50%, -50%) scale(1) rotate(0deg)';
        ring2.style.transform = 'translate(-50%, -50%) scale(1) rotate(0deg)';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    animateRings();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes rotateCw {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes rotateCcw {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(-360deg); }
        }
        @keyframes machineGlow {
          0%, 100% {
            box-shadow: 0 0 15px rgba(0, 255, 255, 0.8), 0 0 30px rgba(255, 0, 200, 0.5);
          }
          50% {
            box-shadow: 0 0 25px rgba(0, 255, 255, 1), 0 0 45px rgba(255, 0, 200, 0.7);
          }
        }
        @keyframes scanLine {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
      `}</style>

      {/* Crosshair - Machine targeting reticle */}
      <div
        ref={crosshairRef}
        className="fixed pointer-events-none z-[9999]"
        style={{
          width: '30px',
          height: '30px',
          transform: 'translate(-50%, -50%)',
          opacity: 0,
        }}
      >
        {/* Vertical line */}
        <div
          style={{
            position: 'absolute',
            width: '2px',
            height: '12px',
            backgroundColor: 'rgba(0, 255, 255, 0.8)',
            top: '3px',
            left: '50%',
            transform: 'translateX(-50%)',
            boxShadow: '0 0 10px rgba(0, 255, 255, 0.8)',
          }}
        />
        {/* Horizontal line */}
        <div
          style={{
            position: 'absolute',
            width: '12px',
            height: '2px',
            backgroundColor: 'rgba(0, 255, 255, 0.8)',
            top: '50%',
            left: '3px',
            transform: 'translateY(-50%)',
            boxShadow: '0 0 10px rgba(0, 255, 255, 0.8)',
          }}
        />
        {/* Bottom line */}
        <div
          style={{
            position: 'absolute',
            width: '2px',
            height: '12px',
            backgroundColor: 'rgba(0, 255, 255, 0.8)',
            bottom: '3px',
            left: '50%',
            transform: 'translateX(-50%)',
            boxShadow: '0 0 10px rgba(0, 255, 255, 0.8)',
          }}
        />
        {/* Right line */}
        <div
          style={{
            position: 'absolute',
            width: '12px',
            height: '2px',
            backgroundColor: 'rgba(0, 255, 255, 0.8)',
            top: '50%',
            right: '3px',
            transform: 'translateY(-50%)',
            boxShadow: '0 0 10px rgba(0, 255, 255, 0.8)',
          }}
        />
      </div>

      {/* Central Core - Bright glowing center */}
      <div
        ref={cursorRef}
        className="fixed w-5 h-5 rounded-full pointer-events-none z-[10000]"
        style={{
          backgroundColor: 'rgba(0, 255, 255, 0.9)',
          transform: 'translate(-50%, -50%)',
          opacity: 0,
          boxShadow: '0 0 15px rgba(0, 255, 255, 0.8), 0 0 30px rgba(255, 0, 200, 0.5), inset 0 0 10px rgba(255, 255, 255, 0.4)',
          transition: 'box-shadow 0.3s ease',
          animation: 'machineGlow 3s ease-in-out infinite',
        }}
      />

      {/* Inner Ring - Rotating clockwise */}
      <div
        ref={ring1Ref}
        className="fixed rounded-full border-2 pointer-events-none z-[9998]"
        style={{
          width: '50px',
          height: '50px',
          borderColor: 'rgba(0, 255, 255, 0.7)',
          backgroundColor: 'transparent',
          transform: 'translate(-50%, -50%) rotate(0deg)',
          opacity: 0,
          boxShadow: '0 0 20px rgba(0, 255, 255, 0.7)',
          transition: 'all 0.3s ease',
          animation: 'rotateCw 4s linear infinite',
        }}
      />

      {/* Outer Ring - Rotating counter-clockwise */}
      <div
        ref={ring2Ref}
        className="fixed rounded-full border-2 pointer-events-none z-[9997]"
        style={{
          width: '80px',
          height: '80px',
          borderColor: 'rgba(255, 0, 200, 0.6)',
          backgroundColor: 'transparent',
          transform: 'translate(-50%, -50%) rotate(0deg)',
          opacity: 0,
          boxShadow: '0 0 25px rgba(255, 0, 200, 0.6), inset 0 0 25px rgba(255, 0, 200, 0.2)',
          transition: 'all 0.3s ease',
          animation: 'rotateCcw 6s linear infinite',
        }}
      />

      {/* Accent Dots on Ring 1 */}
      <div
        className="fixed rounded-full pointer-events-none z-[9998]"
        style={{
          width: '6px',
          height: '6px',
          backgroundColor: 'rgba(0, 255, 200, 0.9)',
          top: 'calc(var(--cursor-y, 0px) - 35px)',
          left: 'calc(var(--cursor-x, 0px))',
          opacity: 0,
          boxShadow: '0 0 12px rgba(0, 255, 200, 1)',
          animation: 'rotateCw 4s linear infinite',
        }}
        ref={(el) => {
          if (el && cursorRef.current) {
            const computedStyle = window.getComputedStyle(cursorRef.current);
            el.style.setProperty('--cursor-x', cursorRef.current.style.left);
            el.style.setProperty('--cursor-y', cursorRef.current.style.top);
          }
        }}
      />
    </>
  );
}
