import Image from "next/image";

export default function Blog() {

    return (
      <div>
        <div>
          <Image
            src={"https://blocks.astratic.com/img/general-img-landscape.png"}
            alt="Display photo"
          />
        </div>
        <div>
          <p>
            <b>Jay Jameil Carroll</b> is a pianist, composer and producer. Jay
            studied piano at the Royal Northern College of Music where he was
            deeply involved in chamber music, winning both the Nossek Prize (as
            a member of the Deancach Trio) and the Frost-Cronshaw and Courtney
            Kenney Song Prize&apos;s Best Accompanist. Jay has since performed
            across the UK and Ireland as a soloist and chamber musician. As a
            classical pianist, Jay constructs his programmes with emotional arcs
            and narratives and aims to shed light on lesser known works. Jay
            composes across a range of genres and mediums including contemporary
            classical, electronic music and Jazz, with influences from his
            specialism in 20th Century French Classical Music and love for dance
            music. At the heart of his work is playful curiosity and brave
            eclecticism which take his practice to colourful, sometimes
            unexpected but nonetheless exciting, destinations. He is currently
            based in Manchester, but frequently collaborates with artists from
            London and Bristol.
          </p>
        </div>
      </div>
    );
}