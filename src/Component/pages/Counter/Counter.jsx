import { useState, useEffect } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { FaGraduationCap, FaUsers } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS for animations
import { Link } from "react-router-dom";

const Counter = () => {
  const [counterOn, setCounterOn] = useState(false);
  
  useEffect(() => {
    AOS.init({ duration: 2000 }); // Initialize AOS with animation duration
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-2 mt-10">
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        {/*---------Counter---------Start---------*/}
        <div className="scrollable-container">
          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
            {/*-------------Counter---------1---------*/}
            <Link to="/Allbranch">
            <div className="" data-aos="fade-right">
            <div className="bg-custom-bg px-6 rounded-md py-10" >
                <div className="flex justify-center text-white text-4xl md:text-6xl mb-2 md:mb-6">
                  <AiFillHome />
                </div>
                <h1 className="text-center font-bold text-white text-3xl md:text-5xl lg:text-6xl">
                  {counterOn && (
                    <CountUp
                      start={0}
                      end={55}
                      duration={15}
                      delay={0}
                    />
                  )}
                  +
                </h1>
                <h2 className="text-center text-white font-bold text-xl md:text-3xl lg:text-3xl mt-2 md:mt-6">
                  আমাদের শাখা সমূহ
                </h2>
              </div>
            </div>
            </Link>
            
            {/*-------------Counter---------2---------*/}
       <div className="" data-aos="fade-right">
       <div className="bg-custom-bg px-6 rounded-md py-10" >
              <div className="flex justify-center text-white text-4xl md:text-6xl mb-2 md:mb-6">
                <FaUsers />
              </div>
              <h1 className="text-center font-bold text-white text-3xl md:text-5xl lg:text-6xl">
                {counterOn && (
                  <CountUp
                    start={0}
                    end={14000}
                    duration={15}
                    delay={0}
                  />
                )}
                +
              </h1>
              <h2 className="text-center text-white font-bold text-xl md:text-3xl lg:text-3xl mt-2 md:mt-6">
                আমাদের ছাত্র-ছাত্রী
              </h2>
            </div>
       </div>

            {/*-------------Counter---------3---------*/}
          <div className=""  data-aos="fade-right">

          <div className="bg-custom-bg px-6 rounded-md py-10" >
              <div className="flex justify-center text-white text-4xl md:text-6xl mb-2 md:mb-6">
                <FaGraduationCap />
              </div>
              <h1 className="text-center font-bold text-white text-3xl md:text-5xl lg:text-6xl">
                {counterOn && (
                  <CountUp
                    start={0}
                    end={2732}
                    duration={15}
                    delay={0}
                  />
                )}
                +
              </h1>
              <h2 className="text-center text-white font-bold text-xl md:text-3xl lg:text-3xl mt-2 md:mt-6">
                আমাদের সাফল্য
              </h2>
            </div>
          </div>
          </div>
        </div>
        {/*---------Counter---------End---------*/}
      </ScrollTrigger>
    </div>
  );
};

export default Counter;
