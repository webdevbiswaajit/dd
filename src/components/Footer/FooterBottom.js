import React from "react";
import {
  FaMobileAlt,
  FaMapMarkerAlt,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { RiContactsLine } from "react-icons/ri";
import { Container, Row, Col, Image } from "react-bootstrap";
import footer from "../../images/footer_logo.png";
// data
import { footerData } from "../../Data/Data";

const FooterBottom = () => {
  const date = new Date().getFullYear();
  return (
    <>
      <footer className="footer_bottom">
        <Container fluid>
          <Row>
            <Col xl={5} lg={4}>
              <div className="copyright">
                <p className="mb-0 mx-5 px-3">{date} All rights reserved</p>
              </div>
              <div className="social_list">
                <ul className="list_icon mt-5">
                  <li className="item">
                    <span>
                      <FaLinkedinIn className="icon" />
                    </span>
                  </li>
                  <li className="item">
                    <span>
                      <FaFacebookF className="icon" />
                    </span>
                  </li>
                  <li className="item">
                    <span>
                      <FaInstagram className="icon" />
                    </span>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xl={7} lg={8}>
              <div className="footer_bottom_list">
                <ul>
                  {footerData.map((item) => (
                    <li key={item.id}>
                      <a href={item.url}>{item.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default FooterBottom;
