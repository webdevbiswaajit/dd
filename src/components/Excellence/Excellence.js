import React, { useEffect } from "react";
import "./excellence.scss";
import award from "../../images/award.svg";
import dot1 from "../../images/dot1.svg";
import dot2 from "../../images/dot2.svg";
import dot3 from "../../images/dot3.svg";
import { excellence } from "../../Data/Data";

import { Row, Col, Container, Image } from "react-bootstrap";
// AOS
import AOS from "aos";
import "aos/dist/aos.css";

const Excellence = () => {
  // aos implement
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <section id="excellence">
      <Container fluid>
        <Row>
          <Col xl={6} lg={6} md={6} sm={12} className="order-2 order-md-1">
            <Row>
              {excellence.map((item) => (
                <Col
                  xl={3}
                  lg={3}
                  md={3}
                  sm={3}
                  xs={6}
                  className="py-4 align-self-center"
                >
                  <div className="image_wrapper">
                    <Image fluid src={item.url} alt="" className="item" />

                    <h6 className="hover_text">{item.text}</h6>
                    {/* handling dot  */}
                    <Image src={dot1} alt="" className="dotOne" />
                    <Image src={dot3} alt="" className="dotTwo" />
                    <Image src={dot2} alt="" className="dotThree" />
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
          <Col
            xl={3}
            lg={3}
            md={3}
            sm={12}
            className="mx-auto order-1 order-md-2"
          >
            <div className="right">
              <div className="number">01</div>
              <div className="icon">
                <Image src={award} alt="award" fluid />
              </div>
              <h6 className="sub_title my-4" data-aos="zoom-out">
                EXCELLENCE
              </h6>
              <h2 className="main_title" data-aos="zoom-out">
                We’re an award winning agency.
              </h2>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Excellence;
