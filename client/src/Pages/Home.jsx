import React from "react";
import NavBar from "../Components/NavBar";
import Header from "../Components/Header";
import Steps from "../Components/Steps";
import Description from "../Components/Description";
import Testimonials from "../Components/Testimonials";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <Steps />
      <Description />
      <Testimonials />
    </div>
  );
};

export default Home;
