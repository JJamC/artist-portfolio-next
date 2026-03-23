interface YoutubeEmbedProps {
  embedSrc: string | undefined;
  thumbnail: string | undefined;
  isPlaying: boolean;
  setVideoPlaying: React.Dispatch<React.SetStateAction<string>>;
}

export default function YoutubeEmbed({
  embedSrc,
  thumbnail,
  setVideoPlaying,
  isPlaying,
}: YoutubeEmbedProps) {
  const handlePlay = () => {
    if (embedSrc) setVideoPlaying(embedSrc);
  };

  return (
      <iframe
          className="h-60 w-100"
      src={embedSrc}
      title="YouTube video"
      allow="autoplay; encrypted-media"
      allowFullScreen
    />
  );
}
