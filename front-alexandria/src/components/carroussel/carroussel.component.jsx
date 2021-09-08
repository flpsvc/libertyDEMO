import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default class Carrossel extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      speed: 500,      
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3500
    };
    return (
      <div>
        <Slider {...settings}>
          <div>aaa</div>
          {this.props.children}
        </Slider>
      </div>
    );
  }
}