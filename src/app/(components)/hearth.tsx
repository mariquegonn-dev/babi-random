"use client";

import LottiePlayer from "@/components/base/LottiePlayer/lottie-player";
import { useState } from "react";

export const Hearth = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="items-center flex flex-col justify-center mt-10">
      {!open && (
        <button
          onClick={() => setOpen(!open)}
          className="bg-red-400 text-black p-3 rounded-sm font-semibold tracking-widest uppercase"
        >
          Clique aqui gostosa
        </button>
      )}

      {open && (
        <div className="animate-slide">
          <div className="w-[300px]">
            <LottiePlayer src="/animation.lottie" />
          </div>
          <p className="max-w-[18ch] text-center mx-auto">
            Você é uma linda, gostosa, safada, deliciosa, um amor 😍
          </p>
        </div>
      )}
    </div>
  );
};
