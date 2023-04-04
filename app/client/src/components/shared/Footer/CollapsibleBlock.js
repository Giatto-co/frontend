import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

export const CollapsibleBlock = ({
  header,
  content,
  collapsibleExtraClass,
  collapsibleIcon,
  collapsibleLinkExtraClass,
}) => {
  const [show, setShow] = useState(false);

  const toggleShow = (id) => {
    setShow(!show);
  };

  return (
    <div className={`${collapsibleExtraClass} m-footer-container`}>
      <li className="fo-link" onClick={() => toggleShow()}>
        <div className="collapsible-header">
          <span>{collapsibleIcon}</span>
          <span>{header}</span>
        </div>
        <span className="fo-hidden-plus">
          {show ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </span>
      </li>
      {show && (
        <ul>
          {content.map((val, i) => {
            return (
              <li key={i}>
                <Link
                  to="#"
                  className={`${collapsibleLinkExtraClass} m-fo-list`}
                >
                  {val}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
