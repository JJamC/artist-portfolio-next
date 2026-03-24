import ContactForm from "./Contact";
import Prints from "./Prints";
import Recordings from "./Recordings";
import HomePage from "./Homepage";
import About from "./About";
import Film from "./Film";
import Production from "./Projects";

interface PageProps {
  nav: string;
}

export default function Page({ nav }: PageProps) {
  if (nav === "about") {
    return <About />;
  }

  if (nav === "production") {
    return <Production/>;
  }

  if (nav === "film") {
    return <Film />;
  }

  if (nav === "Contact") {
    return <ContactForm />;
  }

  if (nav === "Compositions") {
    return <Prints />;
  }

  if (nav === "Recordings") {
    return <Recordings />;
  }

  if (nav === "Home") {
    return <HomePage />;
  }
}
