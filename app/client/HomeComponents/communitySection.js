import becomeACreator from "../../assets/become.png";

const CommunitySection = () => {
  return (
    <div className="community-section flex-container">
      <div>
        <img
          src={becomeACreator}
          alt=""
          width="500px"
          height="280px"
          style={{ backgroundColor: "white" }}
        />
      </div>
      <div className="community-content">
        <h3 className="section-head">
          Join Giatto's <span>creator community</span>
        </h3>
        <p className="section-para">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          voluptas, at natus sed facilis deserunt sit hic, cum ducimus explicabo
        </p>
        <button className="btn community-btn cursor-pointer">
          Sell content
        </button>
      </div>
    </div>
  );
};

export default CommunitySection;
