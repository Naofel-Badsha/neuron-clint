import { FaCheckCircle } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS for animations
import { useEffect } from "react";

const Corscard = ({ corse }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 }); // Initialize AOS with animation duration
  }, []);
  console.log(corse);
  return (
    <div
      className="border bg-white border-gray-400 p-5 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-transform transition-shadow duration-300 ease-in-out cursor-pointer "
      data-aos="flip-right"
    >
      <div className="">
        <img
          src={corse?.image}
          className="h-48 object-cover rounded-2xl w-full "
          alt=""
        />
      </div>
      <div className="">
        <h3 className="font-extrabold text-xl mt-5">{corse?.corsename}</h3>
        <div className="font-extrabold text-lg mt-2 flex items-center ">
          কোর্স ফি : <TbCurrencyTaka className="text-2xl" /> {corse?.coachprice}{" "}
          টাকা{" "}
        </div>

        <div className="px-6 mt-3">
            {/*-----------*/}
          <div className="flex  gap-1 font-medium">
            <FaCheckCircle className="text-custom-bg mt-[1px]" /> 
            <p>বিষয়ভিত্তিক মোট ক্লাস: {corse?.motclass} টি</p>
          </div>
          <div className="flex gap-1 font-medium">
            <FaCheckCircle className="text-custom-bg mt-[1px]" />
            <p>স্পেশাল ক্লাস : {corse?.spashalclass} টি</p>
          </div>
          <div className="flex gap-1 font-medium">
            <FaCheckCircle className="text-custom-bg mt-[1px]" />
            <p>সলভ ক্লাস : {corse?.Solutionclass} টি</p>
          </div>
          <div className="flex gap-1 font-medium">
            <FaCheckCircle className="text-custom-bg mt-[1px]" />
            <p>মোট ক্লাস টেস্ট : {corse?.motclass} টি</p>
          </div>
          <div className="flex gap-1 font-medium">
            <FaCheckCircle className="text-custom-bg mt-[1px]" />
            <p>সাবজেক্ট ফাইনাল টেস্ট : {corse?.SubjectFinal} টি</p>
          </div>
          <div className="flex gap-1 font-medium">
            <FaCheckCircle className="text-custom-bg mt-[1px]" />
           <p>ফাইনাল মডেল টেস্ট : {corse?.finalmodeltest} টি</p>
          </div>
          <div className="flex gap-1 font-medium">
            <FaCheckCircle className="text-custom-bg mt-[1px]" />
            <p>গ্রান্ড ফাইনাল এক্সাম : {corse?.finalmodelexam} টি</p>
          </div>
        </div>

        <div className=" mt-6 flex justify-around">
          <Link to={"/admition"}>
            <button className="text-xl font-semibold  px-6 h-12 pt-[6px]  bg-custom-bg text-white relative overflow-hidden group z-10 hover:text-white duration-1000 rounded-full">
              <span className="absolute bg-orange-700 size-32 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
              <span className="absolute bg-orange-800 size-32 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>{" "}
              এনরোল{" "}
            </button>
          </Link>
          <Link to={`/corse/view/${corse?._id}`}>
            <button className="text-xl px-6 h-12 pt-2 bg-custom-bg text-white relative overflow-hidden group z-10 hover:text-white duration-1000 rounded-full">
              <span className="absolute bg-orange-700 size-32 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
              <span className="absolute bg-orange-800 size-32 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>{" "}
              বিস্তারিত
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Corscard;
