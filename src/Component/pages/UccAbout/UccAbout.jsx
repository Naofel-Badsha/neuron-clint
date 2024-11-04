import { Link } from "react-router-dom";
import UccAboutImage from "../../../assets/aboutimage.jpg";
import 'animate.css';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS for animations
import { useEffect } from "react";
const UccAbout = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 }); // Initialize AOS with animation duration
  }, []);
  return (
    <div className=" mx-auto mt-6">
      {/*-----------Heading-----------*/}

      {/*-----------UccAbout-------Main-----Content--------*/}
      <div className="hero   ">
        <div className="flex items-center justify-between gap-16 flex-col lg:flex-row">
          {/*--------------Text------------*/}
          <div className="flex-1 " data-aos="fade-right">
            <div>
              <h1 className="text-2xl md:text-3xl text-black text-justify font-bold">
              ৯ বছরের ঈর্ষান্বিত সফলতাকে সঙ্গে নিয়ে ১০ এর কোটায় পা রেখেছে 
              {" "}
                <span className="text-3xl font-bold text-custom-bg">
                নিউরন পরিবার ! ! !
                </span>
              </h1>
              <p className="text-lg md:xl text-black text-justify py-5">
              শিক্ষার মূল উদ্দেশ্য হলো একজন শিক্ষার্থীর সুপ্ত মেধা ও প্রতিভাকে বিকশিত করা, তার চিন্তা শক্তিকে ত্বরান্বিত করা এবং তাকে ধৈর্যশীল, আত্মবিশ্বাসী, নীতিবান ও দায়িত্ববান মানুষ হিসাবে গড়ে তোলা, এই নীতিকে সামনে নিয়ে শুরু থেকেই ইউসিসি পরিবারের পথচলা । সততা, নিষ্ঠতা, সেবা ও পরিবর্তনের মন মানসিকতা নিয়ে হাটি হাটি পায়ে ১০ টি বছর অতিক্রম করেছে এই ঐতিহ্যবাহী প্রতিষ্ঠানটি । এগিয়ে চলেছে পরিবর্তনের প্রত্যয় নিয়ে, এগিয়ে চলেছে একটি সুন্দর বাংলাদেশের স্বপ্ন নিয়ে ।

              </p>
              <div>
                <Link to="/AboutUs">
                  <button className="text-2xl text-white bg-custom-bg py-2 md:py-4 px-4 md:px-7 rounded-lg hover:bg-red-800 duration-150">
                    আরও পড়ুন
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/*-------------Image----------------*/}
          <div className="flex-1 " data-aos="zoom-in">
            <img src={UccAboutImage} className=" mx-auto " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UccAbout;
