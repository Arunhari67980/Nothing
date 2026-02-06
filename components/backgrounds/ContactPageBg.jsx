'use client';

export default function ContactPageBg() {
  return (
    <>
      <style>{`
        @keyframes wave-flow-1 {
          0%, 100% {
            transform: translateX(0px) translateY(0px);
          }
          25% {
            transform: translateX(30px) translateY(-20px);
          }
          50% {
            transform: translateX(0px) translateY(0px);
          }
          75% {
            transform: translateX(-30px) translateY(20px);
          }
        }

        @keyframes wave-flow-2 {
          0%, 100% {
            transform: translateX(0px) translateY(0px);
          }
          25% {
            transform: translateX(-30px) translateY(20px);
          }
          50% {
            transform: translateX(0px) translateY(0px);
          }
          75% {
            transform: translateX(30px) translateY(-20px);
          }
        }

        @keyframes interactive-pulse {
          0%, 100% {
            opacity: 0.35;
            transform: scale(1);
          }
          50% {
            opacity: 0.55;
            transform: scale(1.12);
          }
        }

        .contact-bg {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: -1;
          background: linear-gradient(120deg, #0a0a0f 0%, #1f0f3d 50%, #0f0a1f 100%);
        }

        .interactive-glow-1 {
          position: absolute;
          top: 20%;
          left: 15%;
          width: 550px;
          height: 550px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.28) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(95px);
          animation: wave-flow-1 7s ease-in-out infinite;
        }

        .interactive-glow-2 {
          position: absolute;
          bottom: 15%;
          right: 12%;
          width: 580px;
          height: 580px;
          background: radial-gradient(circle, rgba(236, 72, 153, 0.25) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(105px);
          animation: wave-flow-2 8s ease-in-out infinite;
        }

        .interactive-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 450px;
          height: 450px;
          background: radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(85px);
          animation: interactive-pulse 6s ease-in-out infinite;
        }
      `}</style>

      <div className="contact-bg">
        <div className="interactive-glow-1" />
        <div className="interactive-glow-2" />
        <div className="interactive-center" />
      </div>
    </>
  );
}
