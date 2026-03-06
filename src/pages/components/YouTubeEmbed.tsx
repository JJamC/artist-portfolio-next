import { useState } from "react";

interface YoutubeEmbedProps {
  embedSrc: string | undefined;
  thumbnail: string | undefined;
}

export default function YoutubeEmbed({
  embedSrc,
  thumbnail,
}: YoutubeEmbedProps) {

  const [videoPlaying, setVideoPlaying] = useState<string>();
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  
  const handlePlay = () => {
    setVideoPlaying(embedSrc);
    setIsPlaying(videoPlaying === embedSrc)
  };

  return (
    <div
      className="youtube-embed"
      style={{ width: "100%", height: "100%", border: 0 }}
    >
      {!isPlaying ? (
        <div onClick={handlePlay}>
          <img
            className="thumbnail"
            src={thumbnail}
            alt="YouTube thumbnail"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
      ) : (
        <iframe
          src={embedSrc}
          title="YouTube video"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{ width: "100%", height: "100%", border: 0 }}
        />
      )}
    </div>
  );
}