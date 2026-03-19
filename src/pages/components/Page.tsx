import ContactForm from "./Contact";
import Home from "..";
import Compositions from "./Compositions";
import Recordings from "./Recordings";
import { useState } from "react";

interface PageProps {
  nav: string;
}

export default function Page({ nav }: PageProps) {

  if (nav === "Contact") {
    return (
      <div>
        <ContactForm />
      </div>
    );
  }

  if (nav === "Compositions") {
    return <Compositions/>
  } 

  if (nav === "Recordings") {
    return <Recordings/>
  }

  if (nav === "Home") {
    return (
      <div className="w-full h-full">
        <iframe
          src={"https://www.youtube.com/embed/Xf_Mv3VpOjo?autoplay=1&mute=1"}
          title="YouTube video"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    );
  }
}
