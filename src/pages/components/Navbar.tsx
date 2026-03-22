
interface NavbarProps {
  setNav: React.Dispatch<React.SetStateAction<string>>;
}

export default function Navbar({ setNav }: NavbarProps) {
  const handleNavClick = (page: string) => {
    setNav(page);
  };

  return (
    <nav className="flex content-center gap-4 justify-self-center text-lg text-[#D2E4C4]">
      <a
        className="after:bg-[#D2E4C4] relative bg-[#293F14] p-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:transition-all hover:after:w-full"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          handleNavClick("Home");
        }}
      >
        <h2>Home</h2>
      </a>

      <a
        className="relative bg-[#293F14] p-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#D2E4C4] after:transition-all hover:after:w-full"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          handleNavClick("Recordings");
        }}
      >
        <h2>Recordings</h2>
      </a>

      <a
        className="relative bg-[#293F14] p-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#D2E4C4] after:transition-all hover:after:w-full"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          handleNavClick("Compositions");
        }}
      >
        <h2>Compositions</h2>
      </a>

      <a
        className="relative bg-[#293F14] p-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#D2E4C4] after:transition-all hover:after:w-full"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          handleNavClick("Contact");
        }}
      >
        <h2>Contact</h2>
      </a>
    </nav>
  );
}
