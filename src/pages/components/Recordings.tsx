import YoutubeEmbed from "./YouTubeEmbed";

export default function Recordings() {
    const recordings = [
          [
            "https://www.youtube.com/embed/dcQ_j8vI51I?si=ESapAf-NXIgRFxsY",
            "https://img.youtube.com/vi/dcQ_j8vI51I/mqdefault.jpg",
          ],
          [
            "https://www.youtube.com/embed/_F2Yh0cqyXM?si=94NdQ-VheIdyf_Lh",
            "https://img.youtube.com/vi/_F2Yh0cqyXM/mqdefault.jpg",
          ],
          [
            "https://www.youtube.com/embed/2ZRS0YciqWE?si=TVGuLkxEBiVdIutC",
            "https://img.youtube.com/vi/2ZRS0YciqWE/mqdefault.jpg",
          ],
          [
            "https://www.youtube.com/embed/CYisGxXxsgM?si=ccSnWh-01LiQEyhf",
            "https://img.youtube.com/vi/CYisGxXxsgM/mqdefault.jpg",
          ],
    ]
    
    return (
           <div>
                    <ul className="youtube-grid">
                      {recordings.map(([src, thumbnail], i) => {
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