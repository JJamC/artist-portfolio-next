interface TitleProps {
  setNav: React.Dispatch<React.SetStateAction<string>>;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}

export default function Title({ setNav, setActive }: TitleProps) {
  
  const handleNavClick = (page: string) => {
    setNav(page);
  };

  return (
    <>
      <div className=" justify-self-center">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("Home");
            setActive("")
          }}
        >
          <h1 className="text-center text-5xl">Jay Jameil Carroll</h1>
        </a>
      </div>
    </>
  );
}
