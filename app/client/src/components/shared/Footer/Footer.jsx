import {
  BsFacebook,
  BsInstagram,
  BsPinterest,
  BsTwitter,
} from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { CollapsibleBlock } from "./CollapsibleBlock";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-list">
          <div>
            <h4>CONTENT</h4>
            <ul>
              <li>Calendar of festivities</li>
              <li>New Assets</li>
              <li>Most popular content</li>
              <li>Search trends</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h4>INFORMATION</h4>
            <ul>
              <li>Pricing</li>
              <li>About us</li>
              <li>Business</li>
              <li>Jobs</li>
              <li>Sell your content</li>
            </ul>
          </div>
          <div>
            <div>
              <h4>LEGAL</h4>
              <ul>
                <li>Terms and conditions</li>
                <li>License agreement</li>
                <li>Privacy policy</li>
                <li>Copyright information</li>
                <li>Cookies policy</li>
                <li>Cookies settings</li>
              </ul>
            </div>
            <div>
              <h4>SUPPORT</h4>
              <ul>
                <li>FAQ</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div>
            <h4>SOCIAL MEDIA</h4>
            <div className="sm-icons cursor-pointer">
              <BsFacebook size={20} color="#1877F2" className="zoom-hover" />
              <BsInstagram size={20} className="zoom-hover" />
              <BsTwitter size={20} color="#1da1f2" className="zoom-hover" />
              <FcGoogle size={20} className="zoom-hover" />
              <BsPinterest size={20} color="#f00" className="zoom-hover" />
            </div>
          </div>
        </div>
        <hr className="footer-divider" />
        <div className="copyright-text">
          <p className="footer-text centered-text">
            Copyright &copy; 2023 The Giatto Company LLC. All rights reserved.
          </p>
        </div>

        <div className="mobile-footer">
          <CollapsibleBlock
            header={"CONTENT"}
            content={[
              "Calendar of festivities",
              "New Asset",
              "Most popular content",
              "Search trends",
              "Blog",
            ]}
          />
          <CollapsibleBlock
            header={"INFORMATION"}
            content={[
              "Pricing",
              "About us",
              "Business",
              "Jobs",
              "Sell your content",
            ]}
          />
          <CollapsibleBlock
            header={"LEGAL"}
            content={[
              "Terms and conditions",
              "License agreement",
              "Privacy policy",
              "Copyright information",
              "Cookies policy",
              "Cookies settings",
            ]}
          />
          <CollapsibleBlock header={"SUPPORT"} content={["FAQ", "Contact"]} />
          <div className="mobile-sm">
            <h4>SOCIAL MEDIA</h4>
            <div className="sm-icons cursor-pointer">
              <BsFacebook size={22} color="#1877F2" />
              <BsInstagram size={22} />
              <BsTwitter size={22} color="#1da1f2" />
              <FcGoogle size={22} />
              <BsPinterest size={22} color="#f00" />
            </div>
          </div>
          <p className="mobile-copyright-text">
            Copyright &copy; 2023 The Giatto Company LLC. All rights reserved.
          </p>
        </div>
      </footer>
      <div className="footer-label flex-container">
            <p className="cursor-pointer">Giatto's projects</p>
            <ul>
              <li>Giatto</li>
              <li>Main Icon</li>
              <li>Flat Icon</li>
              <li>MVP</li>
              <li>Sides</li>
            </ul>
        </div>
    </>
  );
};

export default Footer;
