import { useState } from "react";
import Title from "./components/Title";
import Blog from "./components/Blog";
import Navbar from "./components/Navbar";
import Page from "./components/Page";

export default function Home() {
  const [nav, setNav] = useState("Home");

  return (
    <div className="min-h-screen flex items-center justify-center">
    <div className="grid grid-cols-[minmax(350px,1fr)_3fr] gap-4">
      <div className="grid-span-1 justify-self-center">
        <Title />
      </div>

      <div className="grid-span-2">
        <Navbar setNav={setNav} />
      </div>

      <div className="grid-span-1 content-center">
        <Blog />
      </div>

      <div className="grid-span-2">
        <Page nav={nav} />
      </div>
      </div>
      </div>
  );
}
