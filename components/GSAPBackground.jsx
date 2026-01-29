"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function GSAPBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    
    // Create blob elements directly in JSX won't work, so we add via DOM
    // Blob 1
    const blob1 = document.createElement("div");
    blob1.style.cssText = `
      position: absolute;
      width: 600px;
      height: 600px;
      background: radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%);
      border-radius: 50%;
      filter: blur(150px);
      top: -20%;
      left: -10%;
    `;
    container.appendChild(blob1);

    const blob2 = document.createElement("div");
    blob2.style.cssText = `
      position: absolute;
      width: 500px;
      height: 500px;
      background: radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%);
      border-radius: 50%;
      filter: blur(120px);
      top: 20%;
      right: -5%;
    `;
    container.appendChild(blob2);

    const blob3 = document.createElement("div");
    blob3.style.cssText = `
      position: absolute;
      width: 400px;
      height: 400px;
      background: radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, transparent 70%);
      border-radius: 50%;
      filter: blur(100px);
      bottom: -10%;
      left: 10%;
    `;
    container.appendChild(blob3);

    const blob4 = document.createElement("div");
    blob4.style.cssText = `
      position: absolute;
      width: 500px;
      height: 500px;
      background: radial-gradient(circle, rgba(34, 211, 238, 0.15) 0%, transparent 70%);
      border-radius: 50%;
      filter: blur(130px);
      bottom: -15%;
      right: 5%;
    `;
    container.appendChild(blob4);

    // Animate blobs
    gsap.to(blob1, {
      x: 50,
      y: -50,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(blob1, {
      scale: 1.2,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 0.5,
    });

    gsap.to(blob2, {
      x: -60,
      y: 40,
      duration: 9,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(blob2, {
      scale: 1.15,
      duration: 7,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1,
    });

    gsap.to(blob3, {
      x: 40,
      y: 60,
      duration: 7,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(blob3, {
      scale: 1.25,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1.5,
    });

    gsap.to(blob4, {
      x: -50,
      y: -30,
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(blob4, {
      scale: 1.1,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 2,
    });

    // Create particles
    for (let i = 0; i < 80; i++) {
      const particle = document.createElement("div");
      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * window.innerHeight;
      
      particle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: rgba(255, 255, 255, 0.4);
        border-radius: 50%;
        left: ${startX}px;
        top: ${startY}px;
        pointer-events: none;
      `;
      container.appendChild(particle);

      const duration = 8 + Math.random() * 12;
      const yMove = -300 + Math.random() * -200;
      const xMove = -100 + Math.random() * 200;

      gsap.to(particle, {
        x: xMove,
        y: yMove,
        opacity: 0,
        duration: duration,
        repeat: -1,
        ease: "power1.inOut",
        delay: Math.random() * 3,
        onComplete: () => {
          particle.style.left = Math.random() * window.innerWidth + "px";
          particle.style.top = Math.random() * window.innerHeight + "px";
        },
      });
    }

    // Cleanup
    return () => {
      gsap.killTweensOf([blob1, blob2, blob3, blob4]);
      container.innerHTML = "";
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden bg-black"
      style={{ zIndex: 0 }}
    />
  );
}
