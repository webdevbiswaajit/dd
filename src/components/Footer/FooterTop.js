import React from "react";
import "./footer.scss";
// icons
import { BsTelephone } from "react-icons/bs";
import { FaRegEnvelope } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { Container, Row, Col, Image } from "react-bootstrap";
import footer from "../../images/footer_logo.png";

const FooterTop = () => {
  return (
    <section id="footer">
      <Container>
        <Row>
          <Col xl={11} className="mx-auto">
            <Row>
              <Col
                xl={5}
                lg={5}
                md={12}
                sm={12}
                xs={12}
                className="align-self-center align-self-xl-baseline mb-5 mb-lg-0"
              >
                <div className="footer_logo">
                  <Image src={footer} alt="footer logo" fluid />
                </div>
              </Col>
              <Col xl={4} lg={4} md={6} sm={6} xs={10} className="mx-auto">
                <div className="middle">
                  <h6 className="min_title mb-3">Headquarters</h6>
                  <p className="text_link">
                    Strada Padana Superiore 2B <br /> 20063 Cernusco sul
                    Naviglio Milan, Italy
                  </p>
                  <p className="address">CF / P.IVA 05469810963</p>
                  <ul>
                    <li>
                      <a href="/" className="link">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="/" className="link">
                        Cookie Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xl={3} lg={3} md={6} sm={6} className="mx-auto">
                <div className="right">
                  <ul className="list_of_items">
                    <li>
                      <span>
                        <BsTelephone className="icon" />
                      </span>
                      <span className="fz"> +39 0240706003</span>
                    </li>
                    <li>
                      <span>
                        <AiOutlineGlobal className="icon icon_color" />
                      </span>
                      <span className="fz"> Get digital</span>
                    </li>
                    <li>
                      <span>
                        <FaRegEnvelope className="icon" />
                      </span>
                      <span className="fz"> Get in touch</span>
                    </li>
                  </ul>
                  <br />

                  <br />
                </div>
              </Col>

              {/* top animation box */}
              <div className="Top">
                <a href="#banner" className="mt-5 py-1 py-md-5">
                  Top
                </a>
                <span className="hscroll-line"></span>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FooterTop;
