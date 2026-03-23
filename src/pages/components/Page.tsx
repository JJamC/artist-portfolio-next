import ContactForm from "./Contact";
import Home from "..";
import Prints from "./Prints";
import Recordings from "./Recordings";
import { useState } from "react";
import HomePage from "./Homepage";

interface PageProps {
  nav: string;
}

export default function Page({ nav }: PageProps) {
  if (nav === "Contact") {
    return <ContactForm />;
  }

  if (nav === "prints") {
    return <Prints />;
  }

  if (nav === "Recordings") {
    return <Recordings />;
  }

  if (nav === "Home") {
    return <HomePage />;
  }
}
