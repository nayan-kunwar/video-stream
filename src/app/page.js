import HlsPlayer from "@/components/HlsPlayer";

export default function VideoPage() {
  return (
    <div style={{ maxWidth: "720px", margin: "auto", padding: "2rem" }}>
      <h1>Cloudinary HLS Video</h1>
      <HlsPlayer
        src="https://res.cloudinary.com/dcycgqmut/video/upload/sp_auto/v1749814486/R2M/Videos/flza0a2ejmwfgsfhazlp.m3u8"
        width="100%"
        height="400px"
      />
    </div>
  );
}
