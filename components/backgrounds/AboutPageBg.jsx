'use client';

export default function AboutPageBg() {
  return (
    <>
      <style>{`
        @keyframes grid-fade {
          0%, 100% {
            opacity: 0.02;
          }
          50% {
            opacity: 0.08;
          }
        }

        @keyframes subtle-shift {
          0%, 100% {
            background-position: 0% 0%;
          }
          50% {
            background-position: 50px 50px;
          }
        }

        @keyframes soft-pulse {
          0%, 100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.6;
          }
        }

        .about-bg {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: -1;
          background: linear-gradient(180deg, #0a0a0f 0%, #15101f 50%, #0a0a0f 100%);
        }

        .about-grid {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px);
          background-size: 80px 80px;
          animation: subtle-shift 20s ease-in-out infinite;
          opacity: 0.03;
        }

        .about-glow-top {
          position: absolute;
          top: -100px;
          left: 20%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(100px);
          animation: soft-pulse 6s ease-in-out infinite;
        }

        .about-glow-bottom {
          position: absolute;
          bottom: -150px;
          right: 15%;
          width: 550px;
          height: 550px;
          background: radial-gradient(circle, rgba(168, 85, 247, 0.18) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(110px);
          animation: soft-pulse 7s ease-in-out infinite 1s;
        }

        .about-accent {
          position: absolute;
          top: 30%;
          right: 10%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(79, 70, 229, 0.12) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(90px);
        }
      `}</style>

      <div className="about-bg">
        <div className="about-grid" />
        <div className="about-glow-top" />
        <div className="about-glow-bottom" />
        <div className="about-accent" />
      </div>
    </>
  );
}
