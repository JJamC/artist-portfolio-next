import { useState } from "react";
import Title from "./components/Title";
import Blog from "./components/Blog";
import Navbar from "./components/Navbar";
import Page from "./components/Page";

export default function Home() {
  const [nav, setNav] = useState("Home");
  const [active, setActive] = useState("");

  return (
    <div className="mr-25 ml-25 flex min-h-screen items-center justify-center">
      <div className="grid grid-cols-[minmax(350px,1fr)_3fr] gap-[100px]">
        <div className="grid-span-1 justify-self-center">
          <Title setNav={setNav} setActive={setActive} />
        </div>

        <div className="grid-span-2">
          <Navbar setNav={setNav} setActive={setActive} active={active} />
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
