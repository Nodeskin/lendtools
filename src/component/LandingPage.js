import React from "react";
import FrontPage from "./FrontPage";
import Review from "./Review";
import ToolSection from "./ToolSection";
import Footer from "./Footer";
import Wrapper from "./Wrapper";

const LandingPage = () => {
  return (
    <Wrapper>
      <FrontPage />
      <Review />
      <ToolSection />
      <Footer />
    </Wrapper>
  );
};

export default LandingPage;
