import { useState, useRef, useEffect } from "react";
import imageCollection1 from "../../../assets/img-collection.png";
import imageCollection2 from "../../../assets/img-collection2.png";

const imageSlide = [imageCollection1, imageCollection2];
const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 2000;

const AutomaticImageSlide = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef();

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === imageSlide.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)`, height:"300px" }}
      >
        {imageSlide.map((image, index) => (
          <div
            className="slide"
            key={index}
            // style={{ backgroundColor }}
          >
            <img src={image} alt="" />
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default AutomaticImageSlide;
