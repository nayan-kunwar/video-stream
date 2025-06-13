// "use client"; // If using Next.js App Router

// import { useEffect, useRef } from "react";
// import Hls from "hls.js";

// const HlsPlayer = ({
//   src,
//   width = "100%",
//   height = "auto",
//   controls = true,
// }) => {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     let hls;

//     if (Hls.isSupported()) {
//       hls = new Hls();
//       hls.loadSource(src);
//       hls.attachMedia(videoRef.current);
//     } else if (videoRef.current.canPlayType("application/vnd.apple.mpegurl")) {
//       // Native support for Safari
//       videoRef.current.src = src;
//     }

//     return () => {
//       if (hls) {
//         hls.destroy();
//       }
//     };
//   }, [src]);

//   return (
//     <video
//       ref={videoRef}
//       style={{ width, height }}
//       controls={controls}
//       playsInline
//     />
//   );
// };

// export default HlsPlayer;
"use client"; // Needed if using Next.js App Router

import { useEffect, useRef } from "react";
import Hls from "hls.js";

const HlsPlayer = ({
  playbackUrl,
  fallbackUrl,
  width = "100%",
  height = "auto",
  controls = true,
}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    let hls;

    if (Hls.isSupported() && playbackUrl) {
       console.log("🔁 Using HLS via hls.js:", playbackUrl);
      hls = new Hls();
      hls.loadSource(playbackUrl);
      hls.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
       console.log("🍏 Using native HLS (Safari):", playbackUrl);
      // Native Safari support
      video.src = playbackUrl;
    } else if (fallbackUrl) {
      console.log("🎞️ Using fallback MP4:", fallbackUrl);
      // Final fallback to MP4
      video.src = fallbackUrl;
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [playbackUrl, fallbackUrl]);

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
