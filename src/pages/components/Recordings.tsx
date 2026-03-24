import YoutubeEmbed from "./YoutubeEmbed";
export default function Recordings() {

  const recordings = [
    ["https://www.youtube.com/embed/dcQ_j8vI51I?si=ESapAf-NXIgRFxsY"],
    ["https://www.youtube.com/embed/_F2Yh0cqyXM?si=94NdQ-VheIdyf_Lh"],
    ["https://www.youtube.com/embed/2ZRS0YciqWE?si=TVGuLkxEBiVdIutC"],
    ["https://www.youtube.com/embed/CYisGxXxsgM?si=ccSnWh-01LiQEyhf"],
  ];

  return (
    <div>
      <ul className="flex flex-wrap justify-end gap-[60px]">
          {recordings.map(([src, title, desc], i) => {
            return (
              <YoutubeEmbed
                key={i}
                embedSrc={src}
                title={title}
                description={desc}
              />
            );
          })}
        </ul>
    </div>
  );
}
