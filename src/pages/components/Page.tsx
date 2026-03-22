import ContactForm from "./Contact";
import Home from "..";
import Compositions from "./Compositions";
import Recordings from "./Recordings";
import { useState } from "react";
import HomePage from "./Homepage";

interface PageProps {
  nav: string;
}

export default function Page({ nav }: PageProps) {
  if (nav === "Contact") {
    return <ContactForm />
  }

  if (nav === "Compositions") {
    return <Compositions />;
  }

  if (nav === "Recordings") {
    return <Recordings />;
  }

  if (nav === "Home") {
    return <HomePage />;
  }
}
