interface YoutubeEmbedProps {
  embedSrc: string | undefined;
  description: string | undefined;
  title: string | undefined;
}

export default function YoutubeEmbed({
  embedSrc,
  title,
  description
}: YoutubeEmbedProps) {

  return (
    <div>
    <iframe
      className="h-60 w-100"
      src={embedSrc}
      title="YouTube video"
      allow="autoplay; encrypted-media"
      allowFullScreen
      />
      <div>
        {title && <p><b>{title}</b></p>}
    {description && <p>{description}</p>}
      </div>
      </div>
  );
}
