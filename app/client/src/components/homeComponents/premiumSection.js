import { AiOutlineDownload, AiOutlineStar } from "react-icons/ai";
import { MdAddTask } from "react-icons/md";

const img = "https://images.unsplash.com/photo-1525097487452-6278ff080c31";

const PremiumSection = () => {
    return (
        <div className="white-premium-section">
        <div className="centered-text">
          <h3>Ready to level up?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            dolorum dignissimos earum ipsa, consectetur veniam id aliquam.
          </p>
        </div>

        <div className="flex-container premium-content">
          <div>
            <img src={img} alt="" width="560px" height="560px" />
          </div>
          <div>
            <div className="flex-container premium-text">
              <MdAddTask size={30} className="premium-icon" />
              <div>
                <h4>Increased productivity</h4>
                <p className="section-para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="flex-container premium-text">
              <AiOutlineDownload
                size={30}
                color="#00bfff"
                className="premium-icon"
              />
              <div>
                <h4>More downloads</h4>
                <p className="section-para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="flex-container premium-text">
              <AiOutlineStar size={30} className="premium-icon" />
              <div>
                <h4> Added benefits</h4>
                <p className="section-para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="flex-container premium-text">
              <button className="premium-btn btn cursor-pointer">Go Premium</button>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default PremiumSection;