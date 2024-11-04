import { Helmet } from "react-helmet-async";
import Hadeline from "../HomePages/Hadeline/Hadeline";

import Slider from "../Slider/Slider";
// import { Slider2 } from "../ShareComponent/Slider2/Slider2";
import Student from "../pages/Student/Student";
import SuccessStudent from "../pages/SuccessStudent/SuccessStudent";
import UccBanner from "../pages/UccBanner/UccBanner";
import UccaAbout from "../pages/UccAbout/UccAbout";
import Corsehome from "../pages/Corsehome/Corsehome";

import Imagegalaryhome from "../ShareComponent/Gallary/Imagegalaryhome/Imagegalaryhome";
import UniqueAllService from "../ShareComponent/UniqueAllServiceEdite/UniqueAllService";
import Bookcontenarhome from "../ShareComponent/Bookss/Bookcontenarhome/Bookcontenarhome";
import Maps from "../ShareComponent/Maps/Maps";
import Counter from "../pages/Counter/Counter";
import Slidersmall from "../HomePages/Slidersmall/Slidersmall";

import VideogalleryHome from "../pages/VideogalleryHome/VideogalleryHome/VideogalleryHome";
import "animate.css";

// import Title from "../Title/Title";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>HomeFixer || Home</title>
      </Helmet>
      <Hadeline></Hadeline>
      <div className="max-w-screen-xl mx-auto"></div>
      <div className="hidden md:block lg:block">
        <Slider></Slider>
      </div>
      <div className="block md:hidden lg:hidden">
        <Slidersmall></Slidersmall>
      </div>

      {/* <Title></Title> */}

      <div className="w-full bg-[#fef2f2]">
        <div className="max-w-screen-xl mx-auto">
          <UccaAbout></UccaAbout>
        </div>
      </div>

      <div className="w-full ">
        <div className="max-w-screen-xl mx-auto">
          <Counter></Counter>
        </div>
      </div>

      <div className="w-full bg-[#fef2f2]">
        <div className="max-w-screen-xl mx-auto">
          <Corsehome></Corsehome>
        </div>
      </div>

      <div className="w-full ">
        <div className="max-w-screen-xl mx-auto">
          <Student></Student>
        </div>
      </div>

      {/* <Slider2></Slider2> */}

      <div className="w-full bg-[#fef2f2]">
        <div className="max-w-screen-xl mx-auto">
          <Bookcontenarhome></Bookcontenarhome>
        </div>
      </div>

      <UccBanner></UccBanner>

      <div className="max-w-screen-xl mx-auto">
        <SuccessStudent></SuccessStudent>
      </div>
      <div className="w-full bg-[#fef2f2]">
        <div className="max-w-screen-xl mx-auto">
          <Imagegalaryhome></Imagegalaryhome>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <UniqueAllService></UniqueAllService>
      </div>

      <div className="max-w-screen-xl mx-auto">
        <VideogalleryHome></VideogalleryHome>

        <Maps></Maps>
      </div>
    </div>
  );
};

export default Home;
