import { Link, useParams } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import {  TbCurrencyTaka } from "react-icons/tb";
import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../hooks/useAxiosCommon";


const CorseDetails = () => {
  const { id } = useParams(); // Get the dynamic user ID from the URL
  const AxiosCommon = useAxiosCommon();

  // Fetch user details using the ID
  const { data: corse, isLoading, error } = useQuery({
    queryKey: ["corsesingledata", id],
    queryFn: async () => {
      const { data } = await AxiosCommon(`/corse/singledata/${id}`);
      return data;
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading user details</p>;

  return (
 <div className="max-w-screen-xl mx-auto">
   <div className=" p-5 rounded-2xl  cursor-pointer grid grid-cols-1 md:grid-cols-2 gap-14 " >
            <div className="">
                <img src={corse?.image} className=" object-cover rounded-2xl w-full " alt="" />
            </div>
            <div className="">
                <h3 className="font-extrabold text-xl mt-5">{corse?.corsename}</h3>
                <div className="font-extrabold text-lg mt-2 flex items-center ">কোর্স ফি : <TbCurrencyTaka className="text-2xl" /> {corse?.coachprice} টাকা </div>

                <div className="px-6 mt-3">
                    <div className="flex gap-1 font-medium"> <FaCheckCircle className="text-custom-bg"/> বিষয়ভিত্তিক লেকচার শীট : {corse?.LectureSheet} টি  </div>
                    <div className="flex gap-1 font-medium"> <FaCheckCircle className="text-custom-bg"/> লেকচার ভিত্তিক পরীক্ষা : {corse?.TotalLucture} টি  </div>
                    <div className="flex gap-1 font-medium"> <FaCheckCircle className="text-custom-bg"/> ফাইনাল সলিউশন ক্লাস : {corse?.Solutionclass} টি  </div>
                    <div className="flex gap-1 font-medium"> <FaCheckCircle className="text-custom-bg"/> ফাইনাল মডেল টেস্ট : {corse?.ModelTest} টি  </div>
                    <div className="flex gap-1 font-medium"> <FaCheckCircle className="text-custom-bg"/> বিষয় ভিত্তিক সাবজেক্ট ফাইনাল : {corse?.SubjectFinal} টি  </div>
                    <div className="flex gap-1 font-medium"> <FaCheckCircle className="text-custom-bg"/> ডাউট সলভিংয়ে এর সার্বক্ষণিক Q & A সেবা </div>
                    <div className="flex gap-1 font-medium"> <FaCheckCircle className="text-custom-bg"/> {corse?.description} </div>

                </div>

                <div className=" mt-6 flex justify-center">
                <Link to={"/admition"}  >
                <button className="text-xl font-semibold  px-6 h-12 pt-[6px]  bg-custom-bg text-white relative overflow-hidden group z-10 hover:text-white duration-1000 rounded-full" ><span className="absolute bg-orange-700 size-32 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span><span className="absolute bg-orange-800 size-32 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span> এনরোল </button>
                </Link>
                       </div>

            </div>
            
        </div>
 </div>
  );
};

export default CorseDetails;
