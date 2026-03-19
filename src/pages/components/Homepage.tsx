export default function HomePage() {
    return (
      <div className="aspect-[9/16w-80 justify-self-center] aspect-[9/16] w-80 justify-self-center sm:w-96 md:w-128">
        <iframe
          src={"https://www.youtube.com/embed/Xf_Mv3VpOjo?autoplay=1&mute=1"}
          title="YouTube video"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
    );
    }