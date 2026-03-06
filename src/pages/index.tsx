import { useState } from "react";
import Title from "./components/Title";
import Blog from "./components/Blog";
import Navbar from "./components/Navbar";
import Page from "./components/Page";

export default function Home() {
  const [nav, setNav] = useState("");

  return (
    <div className="grid grid-cols-[200px_minmax(300px,_1fr)]">
      <div className="grid-span-1">
        <Title />
      </div>

      <div className="grid-span-2">
        <Navbar setNav={setNav} />
      </div>

      <div className="grid-span-1">
        <Blog />
      </div>

      <div className="grid-span-2">
        <Page nav={nav} />
      </div>
    </div>
  );
}
