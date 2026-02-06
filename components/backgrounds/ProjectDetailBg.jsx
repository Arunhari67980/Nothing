'use client';

export default function ProjectDetailBg() {
  return (
    <>
      <style>{`
        @keyframes minimalist-fade {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes accent-drift {
          0%, 100% {
            transform: translateX(-25px) translateY(-15px);
          }
          50% {
            transform: translateX(25px) translateY(15px);
          }
        }

        @keyframes subtle-scale {
          0%, 100% {
            transform: scale(0.95);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .detail-bg {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: -1;
          background: linear-gradient(to bottom, #0a0a0f, #12081a, #0a0a0f);
        }

        .detail-primary-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 700px;
          height: 700px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.25) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(110px);
          animation: minimalist-fade 5s ease-in-out infinite;
        }

        .detail-accent-top-left {
          position: absolute;
          top: 15%;
          left: 10%;
          width: 380px;
          height: 380px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.18) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(90px);
          animation: accent-drift 8s ease-in-out infinite;
        }

        .detail-accent-bottom-right {
          position: absolute;
          bottom: 10%;
          right: 8%;
          width: 420px;
          height: 420px;
          background: radial-gradient(circle, rgba(236, 72, 153, 0.16) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(100px);
          animation: accent-drift 9s ease-in-out infinite 0.5s;
        }

        .detail-subtle-corner {
          position: absolute;
          top: 5%;
          right: 5%;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(168, 85, 247, 0.12) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(80px);
          animation: subtle-scale 7s ease-in-out infinite;
        }
      `}</style>

      <div className="detail-bg">
        <div className="detail-primary-glow" />
        <div className="detail-accent-top-left" />
        <div className="detail-accent-bottom-right" />
        <div className="detail-subtle-corner" />
      </div>
    </>
  );
}
