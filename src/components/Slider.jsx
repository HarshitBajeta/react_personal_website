import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Test_card  from "./Test_card";
import { test_card_data } from "./data";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div id="testi" className=" bg-[#0b0309] text-white ">
       <h1 className="text-5xl text-center py-10 heading" data-aos="fade" data-aos-duration="3000">Testinomial</h1>
        <Slider {...settings} className="mx-28 pb-10 content">
        {test_card_data.map((val)=>{
                return (
                    <Test_card
                        key={val.id}
                        text={val.text}
                        img={val.img}
                        name={val.name}
                        designation={val.designation}
                     />
                );

            })}
        </Slider>
      </div>
    );
  }
}