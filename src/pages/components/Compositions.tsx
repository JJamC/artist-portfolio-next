import YoutubeEmbed from "./YouTubeEmbed";

export default function Compositions() {

    const prints = [
        [
        "https://www.youtube.com/embed/Wsn8xfz-jRY?si=thFge-EtvZz2h2pi",
        "https://artist-page-images-32345.s3.eu-north-1.amazonaws.com/Prints/Chatnoir.jpg",
    ],
    [
        "https://www.youtube.com/embed/IR0lNvDrLP8?si=61osa46AS4aT3790",
        "https://artist-page-images-32345.s3.eu-north-1.amazonaws.com/Prints/rain.jpeg",
    ],
    [
        "https://www.youtube.com/embed/d_fgZCGwYHk?si=G__i1GejBh8N0vQd",
        "https://artist-page-images-32345.s3.eu-north-1.amazonaws.com/Prints/carp.jpeg",
    ],
    [
        "https://www.youtube.com/embed/1slFw6llvlI?si=FEY7wprxQ_2AW73O",
        "https://artist-page-images-32345.s3.eu-north-1.amazonaws.com/Prints/manInCafe.jpeg",
    ],
    [
        "https://www.youtube.com/embed/Pl5Xw9HSW2o?si=uic9t9olNrOhke7Q",
        "https://artist-page-images-32345.s3.eu-north-1.amazonaws.com/Prints/enfantsjouantsurlaplage.jpg",
    ],
    [
        "https://www.youtube.com/embed/3LHxEov0emk?si=nauKN0_mSRvDL8Ud",
        "https://artist-page-images-32345.s3.eu-north-1.amazonaws.com/Prints/housesInParis.jpeg",
    ],
    [
        "https://www.youtube.com/embed/wKU0duiA_MY?si=tU5KUmbZ0knzt47l",
        "https://artist-page-images-32345.s3.eu-north-1.amazonaws.com/Prints/letoile.jpg",
    ],
    [
        "https://www.youtube.com/embed/Xf_Mv3VpOjo?si=0s40wFEei_dh6g_F",
        "https://artist-page-images-32345.s3.eu-north-1.amazonaws.com/Prints/presDeLaMer.jpg",
    ],
    [
        "https://www.youtube.com/embed/BDiiwHclvlA?si=fBl-U4i8JdI3K99k",
        "https://artist-page-images-32345.s3.eu-north-1.amazonaws.com/Prints/horse.jpg",
    ],
    [
        "https://www.youtube.com/embed/MHLeZi5STbw?si=qGu7XgotIARhUcuh",
        "https://artist-page-images-32345.s3.eu-north-1.amazonaws.com/Prints/pierrot.jpeg",
    ],
    ]

    return (
          <div>
            <ul className="youtube-grid">
              {prints.map(([src, thumbnail], i) => {
                return (
                  <YoutubeEmbed
                    key={i}
                    embedSrc={src}
                    thumbnail={thumbnail}
                  />
                );
              })}
            </ul>
          </div>
        );
}