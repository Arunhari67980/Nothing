"use client";

import { useEffect, useRef } from "react";

export default function AdvancedGSAPBackground() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Premium color palette - Blue & Black Neon
    const colors = {
      darkBg: "#0a0e27",
      darkBlue: "#0f172a",
      neonBlue: "#0ea5e9",
      brightBlue: "#3b82f6",
      cyan: "#06b6d4",
      purple: "#8b5cf6",
    };

    // Create particle system
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 2 + 0.5;
        this.opacity = Math.random() * 0.7 + 0.3;
        this.color = [
          colors.neonBlue,
          colors.brightBlue,
          colors.cyan,
          colors.purple,
        ][Math.floor(Math.random() * 4)];
        this.trail = [];
        this.age = 0;
        this.maxAge = 255;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.age += 2;

        // Add to trail
        this.trail.push({ x: this.x, y: this.y });
        if (this.trail.length > 20) this.trail.shift();

        // Slow down
        this.vx *= 0.98;
        this.vy *= 0.98;

        // Add slight gravity
        this.vy += 0.1;

        // Bounce
        if (this.x < 0 || this.x > canvas.width) {
          this.vx *= -0.8;
          this.x = Math.max(0, Math.min(canvas.width, this.x));
        }
        if (this.y < 0 || this.y > canvas.height) {
          this.vy *= -0.8;
          this.y = Math.max(0, Math.min(canvas.height, this.y));
        }

        return this.age < this.maxAge;
      }

      draw(ctx) {
        const life = 1 - this.age / this.maxAge;

        // Draw trail
        ctx.strokeStyle = `${this.color}40`;
        ctx.lineWidth = this.size * 0.5;
        ctx.beginPath();
        this.trail.forEach((point, i) => {
          const alpha = (i / this.trail.length) * life;
          ctx.globalAlpha = alpha * 0.5;
          if (i === 0) ctx.moveTo(point.x, point.y);
          else ctx.lineTo(point.x, point.y);
        });
        ctx.stroke();
        ctx.globalAlpha = 1;

        // Draw particle
        const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 3);
        grad.addColorStop(0, `${this.color}${Math.floor(this.opacity * life * 255)
          .toString(16)
          .padStart(2, "0")}`);
        grad.addColorStop(1, `${this.color}00`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Bright core
        ctx.fillStyle = `${this.color}ff`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 0.5, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particles = Array(80)
      .fill(null)
      .map(() => new Particle());

    // Energy streams
    const streams = [];
    for (let i = 0; i < 4; i++) {
      streams.push({
        x: Math.random() * canvas.width,
        y: -50,
        vx: (Math.random() - 0.5) * 3,
        vy: Math.random() * 2 + 1,
        width: Math.random() * 30 + 20,
        color: [colors.neonBlue, colors.cyan, colors.purple][
          Math.floor(Math.random() * 3)
        ],
        life: 0,
      });
    }

    let time = 0;
    let animationId;
    let emitCounter = 0;

    const animate = () => {
      time += 0.016;
      emitCounter++;

      // Background with radial gradient
      const bgGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
      bgGrad.addColorStop(0, colors.darkBg);
      bgGrad.addColorStop(0.5, colors.darkBlue);
      bgGrad.addColorStop(1, colors.darkBg);
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add subtle animated noise
      const noiseGrad = ctx.createRadialGradient(
        Math.sin(time) * canvas.width * 0.5 + canvas.width * 0.5,
        Math.cos(time * 0.7) * canvas.height * 0.5 + canvas.height * 0.5,
        0,
        canvas.width * 0.5,
        canvas.height * 0.5,
        Math.max(canvas.width, canvas.height) * 0.8
      );
      noiseGrad.addColorStop(0, `${colors.neonBlue}10`);
      noiseGrad.addColorStop(1, `${colors.neonBlue}00`);
      ctx.fillStyle = noiseGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        if (!particles[i].update()) {
          particles[i] = new Particle();
        }
        particles[i].draw(ctx);
      }

      // Emit new particles periodically
      if (emitCounter % 3 === 0) {
        for (let i = 0; i < 2; i++) {
          if (particles.length < 120) {
            particles.push(new Particle());
          }
        }
      }

      // Update and draw energy streams
      for (let i = 0; i < streams.length; i++) {
        const stream = streams[i];
        stream.x += stream.vx;
        stream.y += stream.vy;
        stream.life += 0.01;

        if (stream.y > canvas.height + 100 || stream.life > 1) {
          streams[i] = {
            x: Math.random() * canvas.width,
            y: -50,
            vx: (Math.random() - 0.5) * 3,
            vy: Math.random() * 2 + 1,
            width: Math.random() * 30 + 20,
            color: [colors.neonBlue, colors.cyan, colors.purple][
              Math.floor(Math.random() * 3)
            ],
            life: 0,
          };
        }

        // Draw stream
        const streamOpacity = 1 - stream.life;
        ctx.strokeStyle = `${stream.color}${Math.floor(
          streamOpacity * 180
        )
          .toString(16)
          .padStart(2, "0")}`;
        ctx.lineWidth = stream.width;
        ctx.lineCap = "round";
        ctx.globalAlpha = streamOpacity;
        ctx.beginPath();
        ctx.moveTo(stream.x, stream.y);
        ctx.lineTo(
          stream.x + Math.sin(stream.life * Math.PI * 2) * stream.width * 0.5,
          stream.y + 100
        );
        ctx.stroke();
        ctx.globalAlpha = 1;

        // Glow effect
        ctx.shadowColor = stream.color;
        ctx.shadowBlur = 30;
        ctx.strokeStyle = `${stream.color}${Math.floor(
          streamOpacity * 100
        )
          .toString(16)
          .padStart(2, "0")}`;
        ctx.lineWidth = stream.width * 2;
        ctx.beginPath();
        ctx.moveTo(stream.x, stream.y);
        ctx.lineTo(
          stream.x + Math.sin(stream.life * Math.PI * 2) * stream.width * 0.5,
          stream.y + 100
        );
        ctx.stroke();
        ctx.shadowColor = "transparent";
      }

      // Draw floating nodes/stars
      const nodeCount = 25;
      for (let i = 0; i < nodeCount; i++) {
        const angle = (time * 0.3 + (i / nodeCount) * Math.PI * 2) % (Math.PI * 2);
        const distance = 150 + Math.sin(time * 0.5 + i) * 100;
        const x = canvas.width * 0.5 + Math.cos(angle) * distance;
        const y = canvas.height * 0.5 + Math.sin(angle) * distance;
        const size = 2 + Math.sin(time + i) * 1;
        const nodeColor = [colors.neonBlue, colors.cyan, colors.purple][i % 3];

        // Glow
        const nodeGrad = ctx.createRadialGradient(x, y, 0, x, y, size * 5);
        nodeGrad.addColorStop(0, `${nodeColor}40`);
        nodeGrad.addColorStop(1, `${nodeColor}00`);
        ctx.fillStyle = nodeGrad;
        ctx.beginPath();
        ctx.arc(x, y, size * 5, 0, Math.PI * 2);
        ctx.fill();

        // Star
        ctx.fillStyle = nodeColor;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden bg-black"
      style={{ zIndex: 0 }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ display: "block" }}
      />
    </div>
  );
}
