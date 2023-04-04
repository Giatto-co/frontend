import colorful from "../../assets/istockphoto-1157972723-612x612.jpg";
import colorfulTwo from "../../assets/photo-1433888104365-77d8043c9615.jpeg";
import colorfulThree from "../../assets/360_F_564884039_rP47cN5Wv7c1DMZ7TEbmvaeftks3jFaA.jpg";

const CalendarSection = () => {
  return (
    <div className="calendar-section">
      <div className="flex-container">
        <div className="calendar-text">
          <h4 className="section-head">
            Welcome to <span>Giatto's calendar</span>
          </h4>
          <p className="section-para">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <button className="btn calendar-btn transparent-bg">
            Browse calendar
          </button>
        </div>
        <div className="calendar-section-imgs">
          <div className="calendar-bordered-imgs">
            <div className="flex-container colorful-imgs">
              <img
                src={colorful}
                alt=""
                width="250px"
                height="180px"
                className="f-colorful-image"
              />
              <div >
                <img src={colorfulTwo} alt="" width="250px" height="180px" />
                <img src={colorfulThree} alt="" width="250px" height="180px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarSection;
