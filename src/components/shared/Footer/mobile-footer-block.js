import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

export const MobileFooterBlock = ({ header, content }) => {
  const [show, setShow] = useState(false);

  const toggleShow = (id) => {
    setShow(!show);
  };

  return (
    <div className="m-footer-container">
      <>
        <li className="fo-link" onClick={() => toggleShow()}>
          {header}
          <span className="fo-hidden-plus">
            {show ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </span>
        </li>
        {show && (
          <ul>
            {content.map((val, i) => {
              return (
                <li key={i} >
                  <Link to="#" className="m-fo-list">{val}</Link>
                </li>
              );
            })}
          </ul>
        )}
      </>
    </div>
  );
};
