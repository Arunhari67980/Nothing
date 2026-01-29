"use client";

import PremiumBackground from "./PremiumBackground";

export default function GlobalBackgroundProvider({ children }) {
  return (
    <div style={{ position: "relative", width: "100%", minHeight: "100vh" }}>
      <PremiumBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
}
