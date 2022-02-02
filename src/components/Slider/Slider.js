import { useState } from "react";
import Arrow from "./Arrow";
import { data } from "./data";

export default function Slider() {
  const [slide, setSlide] = useState({
    index: 1,
    inProgress: false,
  });

  const nextSlide = () => {
    if (slide.index !== data.length && !slide.inProgress) {
      setSlide({ index: slide.index + 1, inProgress: true });

      setTimeout(() => {
        setSlide({ index: slide.index + 1, inProgress: false });
      }, 400);
    }
    if (slide.index === data.length && !slide.inProgress) {
      setSlide({ index: 1, inProgress: true });

      setTimeout(() => {
        setSlide({ index: 1, inProgress: false });
      }, 400);
    }
  };

  const prevSlide = () => {
    if (slide.index !== 1 && !slide.inProgress) {
      setSlide({ index: slide.index - 1, inProgress: true });

      setTimeout(() => {
        setSlide({ index: slide.index - 1, inProgress: false });
      }, 400);
    }
    if (slide.index === 1 && !slide.inProgress) {
      setSlide({ index: data.length, inProgress: true });

      setTimeout(() => {
        setSlide({ index: data.length - 1, inProgress: false });
      }, 400);
    }
  };

  const moveDot = (index) => {
    setSlide({ index: index, inProgress: false });
  };

  return (
    <div className="slider-container">
      {data.map((item, i) => {
        return (
          <div
            key={i}
            className={slide.index === i + 1 ? "slide active" : "slide"}
          >
            <Arrow moveSlide={prevSlide} direction="prev" />
            <img src={item.img} alt={item.title} />
            <Arrow moveSlide={nextSlide} direction="next" />

            <div className="dots-container">
              {data.map((item, i) => {
                return (
                  <button
                    key={i}
                    className={slide.index === i + 1 ? "dot active" : "dot"}
                    onClick={() => moveDot(i + 1)}
                  ></button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
