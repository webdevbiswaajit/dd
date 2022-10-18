import React, { useEffect } from "react";
import "./careers.scss";

import { Container, Row, Col, Button } from "react-bootstrap";
// icons
import { MdKeyboardArrowRight } from "react-icons/md";
// AOS
import AOS from "aos";
import "aos/dist/aos.css";

const Careers = () => {
  // aos implement
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <section id="careers">
      <Container fluid>
        <Row>
          <Col xl={7} lg={7} className="order-2 order-lg-1 mt-5 mt-lg-0">
            <div className="left_content pb-4">
              <div
                className="line"
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-duration="1500"
              >
                Graphic Designer
              </div>
              <MdKeyboardArrowRight className="icon" />
            </div>
            <div className="left_content my-4 pb-4">
              <div
                className="line"
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-duration="1200"
              >
                Virtual Assistant
              </div>
              <MdKeyboardArrowRight className="icon" />
            </div>
            <div className="left_content pb-4">
              <div
                className="line"
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-duration="1500"
              >
                Senior UI Designer
              </div>
              <MdKeyboardArrowRight className="icon" />
            </div>
          </Col>
          <Col xl={2} lg={2} className="mx-auto order-1 order-lg-2">
            <div className="right" data-aos="zoom-out">
              <h5>CAREERS</h5>
              <h2 className="my-3">Play with us.</h2>
              <p className="mb-5">
                There’s always room for game-changers in our Playground.
              </p>
              <a href="/" className="link">
                Find out more here
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Careers;
