import { Link, useParams } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";
import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../hooks/useAxiosCommon";

const CorseDetails = () => {
  const { id } = useParams(); // Get the dynamic user ID from the URL
  const AxiosCommon = useAxiosCommon();

  // Fetch user details using the ID
  const {
    data: corse,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["corsesingledata", id],
    queryFn: async () => {
      const { data } = await AxiosCommon(`/corse/singledata/${id}`);
      return data;
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading user details</p>;

  return (
    <div className="max-w-screen-xl mx-auto mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-4 rounded-2xl border-2 border-gray-700">
        <div className="">
          <img
            src={corse?.image}
            className=" object-cover rounded-2xl w-full "
            alt=""
          />
        </div>
        <div className="">
          <h3 className="font-extrabold text-xl mt-5">{corse?.corsename}</h3>
          <div className="font-extrabold text-lg mt-2 flex items-center ">
            কোর্স ফি : <TbCurrencyTaka className="text-2xl" />
            {corse?.coachprice} টাকা
          </div>
          <div className=" mt-3">
            <div className="flex gap-1  font-medium">
              <FaCheckCircle className="text-custom-bg mt-[1px]" /> 
              <p>বিষয়ভিত্তিক লেকচার শীট : {corse?.LectureSheet} টি</p>
            </div>
            <div className="flex gap-1  font-medium">
              <FaCheckCircle className="text-custom-bg mt-[1px]" />
              <p>লেকচার ভিত্তিক পরীক্ষা : {corse?.TotalLucture} টি</p>
            </div>
            <div className="flex gap-1  font-medium">
              <FaCheckCircle className="text-custom-bg mt-[1px]" />
              <p>ফাইনাল সলিউশন ক্লাস : {corse?.Solutionclass} টি</p>
            </div>
            <div className="flex gap-1  font-medium">
              <FaCheckCircle className="text-custom-bg mt-[1px]" />
              <p>ফাইনাল মডেল টেস্ট :{corse?.ModelTest} টি</p>
            </div>
            <div className="flex gap-1  font-medium">
              <FaCheckCircle className="text-custom-bg mt-[1px]" /> 
              <p>বিষয় ভিত্তিক সাবজেক্ট ফাইনাল : {corse?.SubjectFinal} টি</p>
            </div>
            <div className="flex gap-1  font-medium">
              <FaCheckCircle className="text-custom-bg mt-[1px]" /> 
              <p>ডাউট সলভিংয়ে এর সার্বক্ষণিক Q & A সেবা</p>
            </div>
            <div className="flex gap-1  font-medium">
              <FaCheckCircle className="text-custom-bg mt-[1px]" /> {corse?.description}
            </div>
          </div>

          <div className="mt-6 flex ">
            <Link to={"/admition"}>
              <button className="text-xl font-semibold  px-6 h-12 pt-[6px]  bg-custom-bg text-white relative overflow-hidden group z-10 hover:text-white duration-1000 rounded-full">
                <span className="absolute bg-orange-700 size-32 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
                <span className="absolute bg-orange-800 size-32 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>{" "}
                এনরোল
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorseDetails;
