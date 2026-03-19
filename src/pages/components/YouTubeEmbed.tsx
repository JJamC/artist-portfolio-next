import { useState } from "react";
import Image from "next/image";

interface YoutubeEmbedProps {
  embedSrc: string | undefined;
  thumbnail: string | undefined;
  isPlaying: boolean;
  setVideoPlaying: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function YoutubeEmbed({
  embedSrc,
  thumbnail,
  setVideoPlaying,
  isPlaying
}: YoutubeEmbedProps) {
  
  const handlePlay = () => {
    if(embedSrc)
    setVideoPlaying(embedSrc);
  };

  return (
    <li
      className="w-62 h-62 aspect-video overflow-hidden transition-transform transition-shadow duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
    >
      {!isPlaying ? (
        <div onClick={handlePlay} className="h-full w-full">
          <img
            className="block h-full w-full object-cover"
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
    </li>
  );
}