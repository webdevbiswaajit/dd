import React, { useState, useEffect } from "react";
// style
import "./what.scss";
import { Container, Row, Col, Image } from "react-bootstrap";
import WhatContent from "./WhatContent";
// data
import { contentData } from "../../Data/Data";
// AOS
import AOS from "aos";
import "aos/dist/aos.css";

const WhatWeDo = () => {
  const [data, setData] = useState(contentData);
  // aos implement
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <section id="whatWeDo">
      <Container fluid>
        <Row>
          <Col
            xl={4}
            lg={12}
            md={12}
            // className="bg-danger"
            data-aos="fade-down"
            data-aos-easing="linear"
          >
            <h6 className="title">What we do</h6>
            <h3 className="sub_title my-4"> Innovation and impact.</h3>
            <p className="main_para pb-5">
              Our digital agency aims to design and optimize every user’s
              experience in a way that creates real impact for our clients.
            </p>
            <div className="discover">Discover more</div>
          </Col>
          <Col xl={8}>
            <Row>
              {data.map((item) => (
                <WhatContent key={item.id} {...item} />
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhatWeDo;
