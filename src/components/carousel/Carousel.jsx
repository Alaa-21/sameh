import React from "react";
import "./carousel.css";

const Carousel = (props) => {
  return (
    <div key={props.key}>
      <h2 className="d-flex justify-content-between bg-light">
        <a href="#" className="more">
          المزيد
        </a>
        <span>{props.header}</span>
      </h2>
      <div id={props.id} className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className="active"
          ></li>
          <li data-bs-target={`#${props.id}`} data-bs-slide-to="1"></li>
          <li data-bs-target={`#${props.id}`} data-bs-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <img src={props.firstImg} alt="" />
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <img src={props.secondImg} alt="" />
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <img src={props.thirdImg} alt="" />
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target={`#${props.id}`}
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target={`#${props.id}`}
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
