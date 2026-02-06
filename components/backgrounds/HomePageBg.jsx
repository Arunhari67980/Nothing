'use client';

export default function HomePageBg() {
  return (
    <>
      <style>{`
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes hero-float-1 {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-30px) translateX(20px);
          }
        }

        @keyframes hero-float-2 {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(30px) translateX(-20px);
          }
        }

        .home-bg {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: -1;
          overflow: hidden;
        }

        .hero-gradient {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(-45deg, #1a0033, #2d0052, #0f0020, #3d0060, #1a0033);
          background-size: 400% 400%;
          animation: gradient-shift 15s ease infinite;
        }

        .hero-blur-1 {
          position: absolute;
          top: 10%;
          left: 10%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(120px);
          animation: hero-float-1 7s ease-in-out infinite;
        }

        .hero-blur-2 {
          position: absolute;
          bottom: 10%;
          right: 10%;
          width: 700px;
          height: 700px;
          background: radial-gradient(circle, rgba(219, 39, 119, 0.28) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(130px);
          animation: hero-float-2 8s ease-in-out infinite;
        }

        .hero-accent {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(100px);
        }

        .vignette {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.4) 100%);
        }
      `}</style>

      <div className="home-bg">
        <div className="hero-gradient" />
        <div className="hero-blur-1" />
        <div className="hero-blur-2" />
        <div className="hero-accent" />
        <div className="vignette" />
      </div>
    </>
  );
}
