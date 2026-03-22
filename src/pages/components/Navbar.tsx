
interface NavbarProps {
  setNav: React.Dispatch<React.SetStateAction<string>>;
}

export default function Navbar({ setNav }: NavbarProps) {
  const handleNavClick = (page: string) => {
    setNav(page);
  };

  return (
    <nav className="flex justify-end gap-4 text-[16px] text-white">
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          handleNavClick("Home");
        }}
      >
        <h2>Home</h2>
      </a>

      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          handleNavClick("Recordings");
        }}
      >
        <h2>Recordings</h2>
      </a>

      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          handleNavClick("Compositions");
        }}
      >
        <h2>Compositions</h2>
      </a>

      <a
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
