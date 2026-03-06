import YoutubeEmbed from "./YouTubeEmbed";

export default function Home() {
    return (
        <div>
          <iframe
            src={"https://www.youtube.com/embed/Xf_Mv3VpOjo?autoplay=1&mute=1"}
            title="YouTube video"
            allow="autoplay; encrypted-media"
            allowFullScreen
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      );
    }