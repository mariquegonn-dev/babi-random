"use client";

import { useState } from "react";
import { DotLottiePlayer, PlayerEvents } from "@dotlottie/react-player";

type LottiePlayerProps = {
  src: string;
  className?: string;
};

export default function LottiePlayer({ src }: LottiePlayerProps) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <></>}

      <div className="max-w-[300px]">
        <DotLottiePlayer
          src={src}
          autoplay
          loop
          onEvent={(event: PlayerEvents) => {
            if (event === PlayerEvents.Ready) {
              setLoading(false);
            }
          }}
        ></DotLottiePlayer>
      </div>
    </>
  );
}
