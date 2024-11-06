import { useQuery } from "@tanstack/react-query";
import Corscard from "../../ShareComponent/Corscard/Corscard";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import { Link } from "react-router-dom";

const Corsehome = () => {
  const AxiosCommon = useAxiosCommon();

  const {
    data = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["corse"],
    queryFn: async () => {
      const { data } = await AxiosCommon(`/corse`);
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
        <div className=" p-6 rounded-md bg-white shadow-md mx-auto max-w-fit ">
          <div className="animate-pulse">
            {/* Product Image Skeleton */}
            <div className="w-[300px] lg:h-52 md:h-52 h-48 rounded-lg bg-gray-300 mb-6"></div>
            {/* Product Title Skeleton */}
            <div className="w-[290px] h-4 rounded-lg bg-gray-300 mb-4"></div>
            {/* product heading skeleton */}
            <div className="w-[220px] h-4 rounded-lg bg-gray-300 mb-4"></div>
            {/* Product Description Skeleton */}
            <div className="w-[200px] h-4 rounded-lg bg-gray-300 mb-4"></div>
          </div>
        </div>

        <div className=" p-6 rounded-md bg-white shadow-md mx-auto max-w-fit">
          <div className="animate-pulse">
            {/* Product Image Skeleton */}
            <div className="w-[300px] lg:h-52 md:h-52 h-48 rounded-lg bg-gray-300 mb-6"></div>
            {/* Product Title Skeleton */}
            <div className="w-[290px] h-4 rounded-lg bg-gray-300 mb-4"></div>
            {/* product heading skeleton */}
            <div className="w-[220px] h-4 rounded-lg bg-gray-300 mb-4"></div>
            {/* Product Description Skeleton */}
            <div className="w-[200px] h-4 rounded-lg bg-gray-300 mb-4"></div>
          </div>
        </div>

        <div className=" p-6 rounded-md bg-white shadow-md mx-auto max-w-fit">
          <div className="animate-pulse">
            {/* Product Image Skeleton */}
            <div className="w-[300px] lg:h-52 md:h-52 h-48 rounded-lg bg-gray-300 mb-6"></div>
            {/* Product Title Skeleton */}
            <div className="w-[290px] h-4 rounded-lg bg-gray-300 mb-4"></div>
            {/* product heading skeleton */}
            <div className="w-[220px] h-4 rounded-lg bg-gray-300 mb-4"></div>
            {/* Product Description Skeleton */}
            <div className="w-[200px] h-4 rounded-lg bg-gray-300 mb-4"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#fef2f2] mt-10 py-10">
      <div className="max-w-screen-xl mx-auto px-2">
        <div className="pt-5 pb-5">
          {/*==============Heading================*/}
          <div className="pb-10 ">
            <h2 className="text-center text-3xl md:text-4xl lg:text-5xl text-[#333333] font-bold mt-8">
              আমাদের <span className="text-custom-bg">কোর্স সমূহ</span>
            </h2>
            <div className="flex w-20 m-auto">
              <span className="w-10 h-[4px] bg-[#333333]"></span>
              <span className="w-10 h-[4px] bg-custom-bg "></span>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {data.slice(0, 6).map((corse, idx) => (
            <Corscard key={idx} corse={corse}></Corscard>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <Link to="/AllCorsess">
            <button className="btn text-2xl text-white bg-custom-bg rounded-lg hover:bg-red-800 duration-150">
              See More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Corsehome;
