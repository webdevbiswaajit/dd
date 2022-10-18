import React, { useEffect } from "react";
import { Col, Image } from "react-bootstrap";
// AOS
import AOS from "aos";
import "aos/dist/aos.css";

const Brand = ({ url }) => {
  // aos implement
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Col
        xl={3}
        lg={3}
        md={3}
        sm={6}
        className="py-4 py-xl-5 align-self-center"
        data-aos="fade-up"
      >
        <div className="img_wrap">
          <Image fluid src={url} alt="" className="item_img" />
        </div>
      </Col>
    </>
  );
};

export default Brand;
