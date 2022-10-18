// react bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
// global css
import "./global.scss";
// components
import ToolbarMain from "./components/Toolbar/Toolbar";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";
import Excellence from "./components/Excellence/Excellence";
import WhoWe from "./components/WhoWe/WhoWe";
import Careers from "./components/Careers/Careers";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";

const App = () => {
  return (
    <>
      <ToolbarMain />
      <Banner />
      <WhatWeDo />
      <Excellence />
      <WhoWe />
      <Careers />
      <Footer />
    </>
  );
};

export default App;
