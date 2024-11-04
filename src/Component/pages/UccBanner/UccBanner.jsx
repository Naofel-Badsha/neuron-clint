import Benar from "../../../assets/madelbenar.png";
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS for animations
import { useEffect } from "react";
const UccBanner = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 }); // Initialize AOS with animation duration
  }, []);
  return (
    <div className="m-auto">
      <div className="carousel-item relative w-full mt-10">
        <img
          src={Benar}
          className="w-full h-[400px] object-cover"
        />
     
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute flex items-center h-full left-0 top-0" data-aos="fade-right">
          <div className=" md:pl-24 pl-7 lg:pl-36">
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold">
              ভর্তি যুদ্ধে জয়ী হতে
              </h1>
              <h1 className="text-2 xl md:text-3xl lg:text-4xl text-white font-bold py-3">
            <span className="text-2xl md:text-4xl lg:text-5xl text-custom-bg">  Neuron </span>Best Choice
              </h1>
            </div>

            <div>
              <p className="text-xl md:text-xl lg:text-2xl text-white">
              আমাদের আছে দেশ সেরা একগুচ্ছ শিক্ষক প্যানেল।
              </p>
              <p className="text-xl md:text-xl lg:text-2xl text-white">
              আমাদের 10 বছরের অভিজ্ঞতায় তৈরী গাইড লাইন তো আছেই।
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UccBanner;
