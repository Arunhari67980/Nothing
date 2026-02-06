'use client';

export default function PremiumBackground() {
  return (
    <>
      <style>{`
        @keyframes aurora-drift-1 {
          0%, 100% {
            transform: translate(0px, 0px);
            opacity: 0.3;
          }
          25% {
            transform: translate(30px, -20px);
            opacity: 0.4;
          }
          50% {
            transform: translate(-20px, 30px);
            opacity: 0.35;
          }
          75% {
            transform: translate(-30px, -30px);
            opacity: 0.38;
          }
        }

        @keyframes aurora-drift-2 {
          0%, 100% {
            transform: translate(0px, 0px);
            opacity: 0.25;
          }
          33% {
            transform: translate(-40px, 25px);
            opacity: 0.35;
          }
          66% {
            transform: translate(35px, -35px);
            opacity: 0.28;
          }
        }

        @keyframes aurora-drift-3 {
          0%, 100% {
            transform: translate(0px, 0px);
            opacity: 0.2;
          }
          50% {
            transform: translate(25px, 35px);
            opacity: 0.32;
          }
        }

        @keyframes subtle-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .premium-bg-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: -1;
          width: 100%;
          height: 100%;
          overflow: hidden;
          background: #0a0a0f;
        }

        .bg-gradient-mesh {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #0a0a0f 0%, #1a0033 25%, #0f0520 50%, #1a0a2e 75%, #0a0a0f 100%);
          background-size: 200% 200%;
          animation: subtle-shift 15s ease-in-out infinite;
        }

        .aurora-light-1 {
          position: absolute;
          top: 10%;
          left: 20%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(147, 51, 234, 0.15) 0%, rgba(147, 51, 234, 0.05) 40%, transparent 70%);
          border-radius: 50%;
          filter: blur(80px);
          animation: aurora-drift-1 8s ease-in-out infinite;
          will-change: transform;
        }

        .aurora-light-2 {
          position: absolute;
          bottom: 15%;
          right: 15%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, rgba(59, 130, 246, 0.04) 40%, transparent 70%);
          border-radius: 50%;
          filter: blur(90px);
          animation: aurora-drift-2 10s ease-in-out infinite;
          will-change: transform;
        }

        .aurora-light-3 {
          position: absolute;
          top: 40%;
          right: 10%;
          width: 700px;
          height: 400px;
          background: radial-gradient(ellipse, rgba(219, 39, 119, 0.1) 0%, rgba(219, 39, 119, 0.03) 40%, transparent 70%);
          border-radius: 50%;
          filter: blur(100px);
          animation: aurora-drift-3 12s ease-in-out infinite;
          will-change: transform;
        }

        .aurora-light-4 {
          position: absolute;
          bottom: 20%;
          left: 10%;
          width: 550px;
          height: 550px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, rgba(99, 102, 241, 0.02) 40%, transparent 70%);
          border-radius: 50%;
          filter: blur(85px);
          animation: aurora-drift-1 9s ease-in-out infinite reverse;
          will-change: transform;
        }

        .aurora-light-5 {
          position: absolute;
          top: 25%;
          left: 15%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.09) 0%, rgba(139, 92, 246, 0.02) 45%, transparent 70%);
          border-radius: 50%;
          filter: blur(75px);
          animation: aurora-drift-2 11s ease-in-out infinite reverse;
          will-change: transform;
        }

        .bg-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to bottom, rgba(10, 10, 15, 0.3) 0%, transparent 30%, transparent 70%, rgba(10, 10, 15, 0.5) 100%);
          pointer-events: none;
        }

        @media (prefers-reduced-motion: reduce) {
          .aurora-light-1,
          .aurora-light-2,
          .aurora-light-3,
          .aurora-light-4,
          .aurora-light-5 {
            animation: none;
            opacity: 0.4;
          }

          .bg-gradient-mesh {
            animation: none;
          }
        }
      `}</style>

      <div className="premium-bg-container">
        <div className="bg-gradient-mesh" />
        <div className="aurora-light-1" />
        <div className="aurora-light-2" />
        <div className="aurora-light-3" />
        <div className="aurora-light-4" />
        <div className="aurora-light-5" />
        <div className="bg-overlay" />
      </div>
    </>
  );
}
