import { useState } from "react";
import Title from "./components/Title";
import Blog from "./components/Blog";
import Navbar from "./components/Navbar";
import Page from "./components/Page";

export default function Home() {
  const [nav, setNav] = useState("");

  return (
    <div className="home-page-grid">
      <div className="title">
        <Title />
      </div>

      <div className="nav">
        <Navbar setNav={setNav} />
      </div>

      <div className="blog">
        <Blog />
      </div>

      <div className="page">
        <Page nav={nav} />
      </div>
    </div>
  );
}
