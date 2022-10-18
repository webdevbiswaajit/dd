import { useEffect, useRef, useState } from "react";
import "./banner.scss";
import { Container, Row, Col, Image } from "react-bootstrap";
import bannerImg from "../../images/bannerImg.png";
// ityped
import { init } from "ityped";
import Slide from "../Slide/Slide";

const Banner = () => {
  // ityped
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 60,
      strings: [`IDREAMERS`, `SISAL`, `E.ON ENERGIA`],
    });
  }, []);

  return (
    <section id="banner">
      <Container fluid>
        <Row>
          <Col xl={4} className="align-self-center px-4">
            <div className="left mx-5 px-5">
              <h2 className="mt-5 px-3" data-aos="zoom-in-right">
                We are
              </h2>

              <Image
                src={bannerImg}
                alt="banner image"
                className="banner_img"
                data-aos="fade-down"
                data-aos-duration="1500"
              />
              <h1 className="para_one" data-aos="zoom-in-up">
                Every beautiful relationship starts with a
                <strong> simple hello</strong>. So let’s chat. It might just be
                the start of something memorable
              </h1>

              <div className="mt-5 pt-5">
                <hr className="w-75 w_inc pb-2" />

                <p className="para_two">
                  Now proudly working with{" "}
                  <strong className="spacing" ref={textRef}></strong>
                </p>
              </div>

              <div className="more" data-aos="fade-up-right">
                <a href="#whatWeDo">More</a>
                <span className="hscroll-line"></span>
              </div>
            </div>
          </Col>
          <Col xl={8}>
            <Slide />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
