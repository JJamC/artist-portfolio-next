import { useState } from "react";

interface NavbarProps {
  setNav: React.Dispatch<React.SetStateAction<string>>;
  setActive: React.Dispatch<React.SetStateAction<string>>;
  active: string;
}

export default function Navbar({ setNav, setActive, active }: NavbarProps) {

  const linkStyles = (name: string) =>
    `relative inline-block cursor-pointer
  after:bg-current text-[#D2E4C4]
     after:absolute after:left-0 after:bottom-0 after:h-[2px]  after:transition-all after:duration-300
     ${active === name ? "after:w-full" : "after:w-0 hover:after:w-full"}`;

  const handleNavClick = (page: string) => {
    setNav(page);
  };

  return (
    <nav className="flex justify-end gap-4 text-[20px] text-white">
      <a
        className={linkStyles("Recordings")}
        href="#"
        onClick={(e) => {
          e.preventDefault();
          handleNavClick("Recordings");
          setActive("Recordings");
        }}
      >
        <h2>Recordings</h2>
      </a>

      <a
        className={linkStyles("prints")}
        href="#"
        onClick={(e) => {
          e.preventDefault();
          handleNavClick("prints");
          setActive("prints");
        }}
      >
        <h2>Prints</h2>
      </a>

      <a
        className={linkStyles("Contact")}
        href="#"
        onClick={(e) => {
          e.preventDefault();
          handleNavClick("Contact");
          setActive("Contact");
        }}
      >
        <h2>Contact</h2>
      </a>
    </nav>
  );
}
