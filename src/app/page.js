// import HlsPlayer from "@/components/HlsPlayer";

// export default function VideoPage() {
//   return (
//     <div style={{ maxWidth: "720px", margin: "auto", padding: "2rem" }}>
//       <h1>Cloudinary HLS Video</h1>
//       <HlsPlayer
//         src="https://res.cloudinary.com/dcycgqmut/video/upload/sp_auto/v1749814486/R2M/Videos/flza0a2ejmwfgsfhazlp.m3u8"
//         width="100%"
//         height="400px"
//       />
//     </div>
//   );
// }
import HlsPlayer from "@/components/HlsPlayer";

export default function VideoPage() {
  const playbackUrl =
    "https://res.cloudinary.com/dcycgqmut/video/upload/sp_auto/v1749814486/R2M/Videos/flza0a2ejmwfgsfhazlp.m3u8";
  const secureUrl =
    "https://res.cloudinary.com/dcycgqmut/video/upload/v1749814486/R2M/Videos/flza0a2ejmwfgsfhazlp.mp4";

  return (
    <div className="container">
      <h1>Stream Video with Fallback</h1>
      <HlsPlayer
        playbackUrl={playbackUrl}
        fallbackUrl={secureUrl}
        width="100%"
        height="400px"
      />
    </div>
  );
}
