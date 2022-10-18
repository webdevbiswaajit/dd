import { useEffect } from "react";
import "./whoWe.scss";
import { Row, Col, Container, Image, Button } from "react-bootstrap";
// images
import tree from "../../images/tree.png";
import videoLogo from "../../images/videoLogo.png";
import play from "../../images/play.png";
// AOS
import AOS from "aos";
import "aos/dist/aos.css";

const WhoWe = () => {
  // aos implement
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <section id="whoWe">
      <Container fluid>
        <Row>
          <Col xl={9} className="mx-auto">
            <Row>
              <Col xl={5} className="shadow first_shadow bg-white">
                <div className="left">
                  <div className="content">
                    <h5 className="top_title" data-aos="fade-down">
                      WHO WE ARE
                    </h5>
                    <h2 className="main_title mt-4 mb-4" data-aos="fade-down">
                      Peek behind the curtain.
                    </h2>
                    <p className="text pb-4 mt-2" data-aos="fade-down">
                      Meet our close-knit tribe of <br /> designers,
                      copywriters, developers, marketers, and strategists.
                    </p>
                    <a href="/" className="link">
                      Explore
                    </a>
                  </div>
                  <div className="black_box" data-aos="fade-left"></div>
                </div>
              </Col>
              <Col xl={6} className="text-end">
                <div className="right">
                  <Image src={tree} alt="image of tree" className="tree_img" />
                  <div className="tour_content">
                    <Image src={videoLogo} alt="video" fluid />
                    <div className="overlap_text">
                      <h5>Fancy a tour?</h5>
                      <p>Check out our new HQ</p>
                    </div>
                    <span>
                      <Image src={play} alt="play" />
                    </span>
                  </div>
                  <div className="red_box" data-aos="fade-right"></div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhoWe;
