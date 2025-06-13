"use client"; // If using Next.js App Router

import { useEffect, useRef } from "react";
import Hls from "hls.js";

const HlsPlayer = ({
  src,
  width = "100%",
  height = "auto",
  controls = true,
}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    let hls;

    if (Hls.isSupported()) {
      hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(videoRef.current);
    } else if (videoRef.current.canPlayType("application/vnd.apple.mpegurl")) {
      // Native support for Safari
      videoRef.current.src = src;
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      style={{ width, height }}
      controls={controls}
      playsInline
    />
  );
};

export default HlsPlayer;
