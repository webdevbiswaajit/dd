import logo from "../../images/logo.png";
import transLogo from "../../images/transLogo.png";
import React, { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Container, Row, Col } from "react-bootstrap";
import rightLogo from "../../images/update.png";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
// AOS
import AOS from "aos";
import "aos/dist/aos.css";
// style
import useScroll from "./useScroll";
import "./toolbar.scss";

const Toolbar = ({ name, ...props }) => {
  const [show, setShow] = useState(false);

  // scroll hide
  const [navClassList, setNavClassList] = useState([]);
  const scroll = useScroll();

  // update classList of nav on scroll
  useEffect(() => {
    const _classList = [];

    if (scroll.y > 150 && scroll.y - scroll.lastY > 0)
      _classList.push("nav-bar--hidden");
    setNavClassList(_classList);
  }, [scroll.y, scroll.lastY]);
  // end of scroll hide

  const toggle = () => setShow(!show);

  // end of hide when scroll

  // aos implement
  useEffect(() => {
    AOS.init();
  }, []);

  // hide when scroll

  return (
    <>
      <header id="header">
        {/* <div className={`${navClassList.join(" ")} header_container`}> */}
        <div className={`header_container`}>
          <div className={show ? "inactive" : "logo"}>
            <img src={transLogo} alt="logo" className="trans_logo" />
          </div>
          <div className="right">
            <div className="lang mx-4">
              <span className={show ? "text_color fw-bold" : "active item"}>
                EN
              </span>
              <span className={show ? "text_color pipe" : "pipe"}>|</span>
              <span className={show ? "text_color it" : "it"}>IT</span>
            </div>
            <div
              className={show ? "rotate_close_btn menu" : "menu"}
              onClick={toggle}
            >
              <div>
                <span className="line_1"></span>
                <span className="line_2 extra"></span>
                <span className="line_3"></span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Offcanvas show={show} onHide={toggle} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <div className="toggle_inside_icon">
              <span className="inside_logo">
                {/* {show && (
                  <img src={transLogo} alt="logo" className="hide_logo" />
                )} */}
              </span>
              {/* <div className="inside_right">
                <span className="active item">EN</span>
                <span className="pipe mx-3">|</span>
                <span className="it">IT</span>
              </div> */}
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="main_content">
            <div className="wrapper">
              <div className="left" data-aos="zoom-out-down">
                <ul>
                  <li className="li_one">Who we are</li>
                  <li className="li_two">What we do</li>
                  <li className="li_three">Case studies</li>
                  <li className="li_four">Careers</li>
                  <li className="li_five">Get in touch</li>
                </ul>
              </div>
              <div className="right" data-aos="fade-left">
                <div className="right_wrapper">
                  <img
                    src={rightLogo}
                    alt="digital gregge"
                    className="digital_img"
                  />
                  <p className="hq">HQ</p>
                  <p className="para">
                    Strada Padana Superiore 2B 20063 Cernusco sul Naviglio
                    Milan, Italy
                  </p>
                  <p className="c_no">
                    <strong>CF / P.IVA</strong> 05469810963
                  </p>
                  <a href="">
                    <FaLinkedinIn className="icon" />
                  </a>
                  <a href="" className="mx-4">
                    <FaFacebookF className="icon" />
                  </a>
                  <a href="">
                    <FaInstagram className="icon" />
                  </a>
                  <div className="contact">
                    <p className="cell_no">
                      <strong className="mr-3">T</strong>+39 0240706003
                    </p>

                    <p className="cell_no">
                      <strong className="mr-3">F</strong>+39 0240706003
                    </p>
                    <p className="cell_no">
                      <strong className="mr-3">M</strong>info@playground.it
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

const ToolbarMain = () => {
  return (
    <>
      {["end"].map((placement, idx) => (
        <Toolbar key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
};

export default ToolbarMain;
