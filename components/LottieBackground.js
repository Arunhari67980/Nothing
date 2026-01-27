"use client";

import Lottie from "lottie-react";
import animationData from "../public/lottie-loading.json";

export default function LottieBackground() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none opacity-20 scale-125 [animation:none!important]">
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        className="w-full h-full"
      />
    </div>
  );
}
