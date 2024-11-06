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
      <div className="hidden md:block lg:block">
        <Slider></Slider>
      </div>
      <div className="block md:hidden lg:hidden">
        <Slidersmall></Slidersmall>
      </div>
      <UccaAbout></UccaAbout>
      <Counter></Counter>
      <Corsehome></Corsehome>
      <Student></Student>
      {/* <Slider2></Slider2> */}
      <Bookcontenarhome></Bookcontenarhome>
      <UccBanner></UccBanner>
      <SuccessStudent></SuccessStudent>
      <Imagegalaryhome></Imagegalaryhome>
      <UniqueAllService></UniqueAllService>
      <VideogalleryHome></VideogalleryHome>

        <Maps></Maps>

    </div>
  );
};

export default Home;
