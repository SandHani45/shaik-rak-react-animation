import React, { useState } from "react";
import PropTypes from "prop-types";
import { Dots } from "../Dots";
import { ReviewSlide } from "./review-slide";
import "./slide.css";

const Slide = ({ slides, reviewList }) => {
  const [active, setActive] = useState(0);
  const [hover, setHover] = useState(false);
  const [hoverItem, setHoverItem] = useState(0);
  const percentage = -100 * active + "%";
  const sliderLength = slides.length - 1;

  const useScrollPosition = (e) => {
    if (active > sliderLength) {
      return setActive(0);
    }
    if (e.deltaY > 0) {
      active !== sliderLength && setActive((prv) => prv + 1);
    } else {
      setActive((prv) => prv && prv - 1);
    }
  };

  React.useEffect(() => {
    const getData = setTimeout(() => {
      document.addEventListener("wheel", useScrollPosition);
    }, 200);
    return () => {
      clearTimeout(getData);
      document.removeEventListener("wheel", useScrollPosition);
    };
  }, [useScrollPosition]);

  const handleMouseEnter = (e, id) => {
    setHoverItem(id);
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHoverItem(0);
    setHover(false);
  };

  const onReviewSubmit = () => {
    debugger;
    return alert("review");
  };

  if(slides.length === 0){
    return (
        <h1>No Slide's Available</h1>
    )
  }
  return (
    <>
      <div
        className="slides"
        style={{ transform: `translate3d(0, ${percentage}, 0)` }}
      >
        {slides.map((child, index) => {
          const optionList = !!child.options && child.options;
          return (
            <div
              className={`slide ${index === active && "active"}`}
              key={index}
            >
              <div className="container-slide">
                <div
                  className={`${
                    sliderLength === active ? "slide-review" : "slide-text"
                  }`}
                >
                  <h1>{child.title}</h1>
                </div>
                {sliderLength === active ? (
                  <ReviewSlide
                    {...reviewList}
                    onReviewSubmit={onReviewSubmit}
                  />
                ) : (
                  <div className="slide-emoji">
                    {optionList &&
                      optionList.map((option, index) => {
                        return (
                          <div
                            key={index}
                            className={`hover-emoji ${
                              hover &&
                              option.id !== hoverItem &&
                              "hover-emoji-other"
                            }`}
                            onMouseEnter={(e) => handleMouseEnter(e, option.id)}
                            onMouseLeave={handleMouseLeave}
                          >
                            <span className="emoji-icon">{option.icon}</span>
                            <span className="emoji-label">{option.label}</span>
                          </div>
                        );
                      })}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <Dots slides={slides} active={active} setActive={setActive} />
    </>
  );
};
Slide.propTypes = {
  slides: PropTypes.array.isRequired,
  reviewList: PropTypes.object.isRequired,
};

export default Slide;
