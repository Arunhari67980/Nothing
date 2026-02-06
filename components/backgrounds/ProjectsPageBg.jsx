'use client';

export default function ProjectsPageBg() {
  return (
    <>
      <style>{`
        @keyframes tech-lines-glow {
          0%, 100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.25;
          }
        }

        @keyframes tech-scan {
          0%, 100% {
            transform: translateY(-100%);
          }
          50% {
            transform: translateY(100%);
          }
        }

        @keyframes float-corners {
          0%, 100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(20px, -15px);
          }
          50% {
            transform: translate(0, 0);
          }
          75% {
            transform: translate(-20px, 15px);
          }
        }

        .projects-bg {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: -1;
          background: linear-gradient(135deg, #0a0a0f 0%, #1a0f2e 50%, #0f0a1a 100%);
        }

        .tech-grid-lines {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(79, 70, 229, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(79, 70, 229, 0.08) 1px, transparent 1px);
          background-size: 60px 60px;
          animation: tech-lines-glow 4s ease-in-out infinite;
        }

        .tech-accent-tl {
          position: absolute;
          top: 0;
          left: 0;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle at bottom-right, rgba(79, 70, 229, 0.25) 0%, transparent 70%);
          filter: blur(80px);
          animation: float-corners 8s ease-in-out infinite;
        }

        .tech-accent-br {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 450px;
          height: 450px;
          background: radial-gradient(circle at top-left, rgba(168, 85, 247, 0.22) 0%, transparent 70%);
          filter: blur(90px);
          animation: float-corners 9s ease-in-out infinite 0.5s;
        }

        .tech-scan-line {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(79, 70, 229, 0.3), transparent);
          animation: tech-scan 3s linear infinite;
        }
      `}</style>

      <div className="projects-bg">
        <div className="tech-grid-lines" />
        <div className="tech-accent-tl" />
        <div className="tech-accent-br" />
        <div className="tech-scan-line" />
      </div>
    </>
  );
}
