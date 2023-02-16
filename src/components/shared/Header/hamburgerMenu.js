const HamburgerMenu = ({ openHamburger, setOpenHamburger }) => {
  const toggleHamburger = () => {
    setOpenHamburger(!openHamburger);
  };

  return (
    <button className="hamburger-btn" onClick={toggleHamburger}>
      <div
        style={{
          transform: openHamburger ? "rotate(45deg)" : "rotate(0)",
        }}
      />
      <div
        style={{
          opacity: openHamburger ? "0" : "1",
          transform: openHamburger ? "translateX(20px)" : "translateX(0)",
        }}
      />
      <div
        style={{
          transform: openHamburger ? "rotate(-45deg)" : "rotate(0)",
        }}
      />
    </button>
  );
};

export default HamburgerMenu;
