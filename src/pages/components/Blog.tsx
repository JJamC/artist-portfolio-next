import Image from "next/image";

export default function Blog() {

  return (
    <div>
      <img
        className="h-full w-full object-cover"
        src={
          "https://artist-page-images-32345.s3.eu-north-1.amazonaws.com/Prints/website.jpg"
        }
        alt="YouTube thumbnail"
      />
      <br></br>
      <div>
        <p className="p-5 text-[16px] text-[#D2E4C4]">
          <b>Jay Jameil Carroll</b> is a pianist, composer and music producer
          based in Manchester, England.
        </p>
      </div>
    </div>
  );
}

/*
        <p className="text-white p-5">
          <b>Jay Jameil Carroll</b> is a pianist, composer and music producer.
          Jay studied piano at the Royal Northern College of Music where he was
          deeply involved in chamber music, winning both the Nossek Prize (as a
          member of the Deancach Trio) and the Frost-Cronshaw and Courtney
          Kenney Song Prize&apos;s Best Accompanist. Jay has since performed
          across the UK and Ireland as a soloist and chamber musician.
          <br></br>
          <br></br>
          As a classical pianist, Jay constructs his programmes around central
          emotional arcs and narratives and aims to shed light on lesser known
          works. His compositions draw from a wide range of genres spanning
          classical and electronic music and are influenced by his love of
          French Impressionism, video game music and dance music.
          <br></br>
          <br></br>
          At the heart of his work is playful curiosity and eclecticism which
          take his practice to colourful, sometimes unexpected, places. He is
          currently based in Manchester and is in collaboration with artists
          from London and Bristol.
        </p>
        */