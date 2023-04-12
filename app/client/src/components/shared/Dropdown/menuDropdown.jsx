const MenuDropdown = ({ submenus, dropdown }) => {
  return (
    <>
      {submenus.submenulinks && (
        <ul className={`dropdown ${dropdown ? "show" : ""}`}>
          {submenus.map((menu, index) => (
            <li key={index}>
              {menu.title}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MenuDropdown;
