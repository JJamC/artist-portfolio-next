export default function HomePage() {
    return (
      <div className="place-self-center">
        <iframe
          src={
            "https://www.youtube.com/embed/Xf_Mv3VpOjo?autoplay=1&mute=1&vq=hd1080"
          }
          title="YouTube video"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="h-150 w-150"
        />
      </div>
    );
    }