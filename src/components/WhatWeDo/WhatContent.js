import React, { useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
// AOS
import AOS from "aos";
import "aos/dist/aos.css";

const WhatContent = ({ img, title, text }) => {
  // aos implement
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <>
      <Col xl={6} lg={6} md={6} sm={6} className="mx-auto">
        <div className="content my-3 my-sm-2  my-md-5 my-xl-3 py-2">
          <div className="icon">
            <span>
              <Image src={img} alt="Icon" fluid className="svg_img" />
            </span>
            <div data-aos="fade-up" data-aos-duration="2500">
              <h3 className="timeline my-4 pb-2">{title}</h3>
              <p className="sub_para">{text}</p>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
};

export default WhatContent;
