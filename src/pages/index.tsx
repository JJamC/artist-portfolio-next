import { useState } from "react";
import Title from "./components/Title";
import Blog from "./components/Blog";
import Navbar from "./components/Navbar";
import Page from "./components/Page";

export default function Home() {
  const [nav, setNav] = useState("Home");
  const [active, setActive] = useState("");

  return (
    <div className="m-10 flex items-center justify-center">
      <div className="grid grid-cols-[350px_900px] gap-[70px]">
        <div className="grid-span-1 justify-self-center">
          <Title setNav={setNav} setActive={setActive} />
        </div>

        <div className="grid-span-2">
          <Navbar setNav={setNav} setActive={setActive} active={active} />
        </div>

        <div className="grid-span-1 content-start">
          <Blog />
        </div>

        <div className="grid-span-2">
          <Page nav={nav} />
        </div>
      </div>
    </div>
  );
}
