import React, { useState } from "react";
import Portals from "../Common/Portals";
function Carousel() {
  const images = [
    "/image/1.JPG",
    "/image/2.JPG",
    "/image/3.JPG",
    "/image/4.JPG",
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <div className="carousel">
        <div className="slideshow"></div>
        <div className="prevBtn">
          <button
            style={{
              fontSize: "large",
              cursor: "pointer",
              backgroundColor: "red",
              border: "none",
              color: "white",
              padding: "10px",
              borderRadius: "8px",
            }}
            onClick={goToPreviousSlide}
          >
            Previous
          </button>
        </div>

        <div className="images">
          <div class="slider">
            <figure>
              <div class="slide">
                <img
                  className="carouselImage"
                  onClick={openModal}
                  src={images[currentIndex]}
                  alt={"images"}
                />
              </div>
            </figure>
          </div>
        </div>

        <div className="prevBtn">
          <button
            style={{
              fontSize: "large",
              cursor: "pointer",
              backgroundColor: "green",
              border: "none",
              color: "white",
              padding: "10px",
              borderRadius: "8px",
            }}
            onClick={goToNextSlide}
          >
            Next
          </button>
        </div>
      </div>

      {isModalOpen && (
        <Portals>
          <img className="portalImage" src={images[currentIndex]} alt="" />
          <button className="closeBtn" onClick={closeModal}>
            Close Modal
          </button>
        </Portals>
      )}
    </div>
  );
}

export default Carousel;
