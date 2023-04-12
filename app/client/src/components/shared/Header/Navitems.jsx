import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { BiCaretDown } from "react-icons/bi";
import MenuDropdown from "../Dropdown/menuDropdown";

const NavItems = ({ items }) => {
  const [dropdown, setDropdown] = useState(false);
  let ref = useRef();

  useEffect(() => {
    const closeOnOutsideClick = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };

    document.addEventListener("mousedown", closeOnOutsideClick);
    document.addEventListener("touchstart", closeOnOutsideClick);

    //remove event listeners for a cleanup
    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
      document.removeEventListener("touchstart", closeOnOutsideClick);
    };
  }, [dropdown]);

  return (
    <li ref={ref} className="nav-item">
      {items.submenu ? (
        <>
          <div
            className="dropdown--container"
            onClick={() => setDropdown((prev) => !prev)}
          >
            <button
              className="dropdown-btn cursor-pointer flex-container"
              activeclassname="active"
              // eslint-disable-next-line
              aria-expanded={dropdown ? "true" : "false"}
            >
              {items.title}
              <BiCaretDown className="dropdown-caret" />
            </button>
          </div>
          <MenuDropdown submenus={items.submenu} dropdown={dropdown} />
        </>
      ) : (
        <NavLink activeclassname="active" to={items.link}>
          {items.title}
        </NavLink>
      )}
    </li>
  );
};

export default NavItems;
