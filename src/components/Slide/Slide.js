import React, { useEffect, useState } from "react";
import { Image, ProgressBar } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Controller,
  Thumbs,
  Autoplay,
  EffectFade,
} from "swiper";
import "swiper/swiper-bundle.css";
import "./slide.scss";
// data
import { sliderDataOne, sliderDataTwo } from "../../Data/Data";
// AOS
import AOS from "aos";
import "aos/dist/aos.css";
// img
import boxImg from "../../images/box.png";

SwiperCore.use([
  Navigation,
  Pagination,
  Controller,
  Thumbs,
  Autoplay,
  EffectFade,
]);

const Slide = () => {
  const [number, setNumber] = useState(1);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [controlledSwiper, setControlledSwiper] = useState(null);

  // aos implement
  useEffect(() => {
    AOS.init({
      // duration: "1500",
    });
  }, []);

  // slide first
  const slides = [];
  for (let i = 0; i < 12; i += 1) {
    slides.push(
      sliderDataOne.map((item) => (
        <>
          <SwiperSlide key={item.id} tag="li" className="slide_swiper">
            <div className="content_wrapper">
              <div className="item_img">
                <Image
                  src={item.img}
                  alt={`slide-${item.id}`}
                  className="single_img"
                  fluid
                  data-aos-duration="3000"
                  data-aos="slide-left"
                  data-aos-easing="ease-in-out"
                  data-aos-anchor-placement="center-center"
                />
              </div>
              <div className="item">
                <h5 className="top_label">{item.topLabel}</h5>
                <h3 className="main_title mt-3 mb-1">{item.title}</h3>
                <h2 className="sub_title mb-4">{item.subTitle}</h2>

                <h6 className="bottom_label">{item.bottomLabel}</h6>
              </div>

              <div className="index_number_box" data-aos="fade-left">
                <span className="index_number">
                  {number <= 9 ? `0${number}` : number}
                </span>
              </div>
            </div>
          </SwiperSlide>
        </>
      ))
    );
  }

  /* ############# small swiper ############# */

  const slides2 = [];
  for (let i = 0; i < 12; i += 1) {
    slides2.push(
      sliderDataTwo.map((item) => (
        <SwiperSlide key={item.id} tag="li" className="slide_swiper2">
          <div className="content_wrapper2">
            <div className="item_img2">
              <Image
                src={item.img}
                alt={`slide-${item.id}`}
                className="single_img2"
                fluid
                data-aos="zoom-in-up"
                data-aos-duration="2000"
              />
              <div className="main_title">
                <span>{item.topLabel}</span>
                <h2 className="display_title mt-5">{item.title}</h2>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))
    );
  }

  return (
    <>
      <div id="main">
        <Swiper
          navigation
          // pagination
          // thumbs={{ swiper: thumbsSwiper }}
          controller={{ control: controlledSwiper }}
          tag="section"
          wrapperTag="ul"
          effect={"fade"}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },

            992: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
          }}
          onInit={(swiper) => console.log("Swiper initialized!", swiper)}
          // onSlideChange={(swiper) => {
          //   console.log(
          //     "Slide index changed to: ",
          //     setNumber(swiper.activeIndex)
          //   );
          // }}
          onReachEnd={() => console.log("Swiper end reached")}
        >
          {slides}
        </Swiper>
        {/* ############# small swiper ############# */}

        <Swiper
          className="controller"
          onSwiper={setControlledSwiper}
          // thumbs={{ swiper: thumbsSwiper }}
          style={{ position: "absolute", top: "70%", right: "2%" }}
          onSlideChange={(swiper) => {
            console.log(
              "Slide index changed to: ",
              setNumber(swiper.activeIndex)
            );
          }}
        >
          {slides2}
        </Swiper>

        {/* animation box */}
        <div
          className="animation_box"
          data-aos="zoom-in-right"
          data-aos-duration="2000"
        >
          <div className="content">
            <div className="right">
              <div>
                <span className="number number1">
                  {number <= 9 ? `0${number}` : number}
                </span>

                {/* animated progress bar  */}
                <div class="loader">
                  <div class="loaderBar"></div>
                </div>

                <span className="number number2">12</span>
              </div>
              <div className="status">
                <a href="/" className="label mx-1 text-white">
                  All case studies
                </a>
                <span>
                  <Image
                    src={boxImg}
                    alt="box"
                    fluid
                    className="box_img mx-2"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slide;
