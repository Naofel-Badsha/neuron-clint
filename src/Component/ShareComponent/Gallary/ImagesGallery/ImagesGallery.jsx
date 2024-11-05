import { useState, useEffect } from "react";
import ImageCard from "../ImageCard/ImageCard";
import { Link } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../../hooks/useAxiosCommon";

const ImagesGallery = () => {
  const AxiosCommon = useAxiosCommon();

  // Fetch images using React Query
  const {
    data: Image = [], // default value as an empty array
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["Image"],
    queryFn: async () => {
      const { data } = await AxiosCommon(`/Image`);
      return data;
    },
  });

  // State to hold filtered items
  const [items, setItems] = useState([]);

  // Effect to set all images when the data is fetched
  useEffect(() => {
    setItems(Image); // Update items with fetched images when Image data is available
  }, [Image]);

  // Filter items based on category
  const filterItem = (categorItem) => {
    const updateItems = Image.filter(
      (carElem) => carElem.category === categorItem
    );
    setItems(updateItems);
  };

  return (
    <div className="max-w-screen-xl mx-auto px-2">
      {/*==============Heading================*/}
      <div className="pb-10 mt-16">
        <h2 className="text-center text-2xl md:text-4xl lg:text-4xl text-[#333333] font-bold mt-8">
          ফটো <span className="text-custom-bg">গ্যালারি</span>
        </h2>
        <div className="flex w-16 m-auto">
          <span className="w-8 h-[4px] bg-[#333333]"></span>
          <span className="w-8 h-[4px] bg-custom-bg "></span>
        </div>
      </div>

      <div>
        {/*---------Filter---------Buttons---------*/}
        {/* flex-wrap gap-2 md:gap-6 lg:gap-6 */}
        <div className="flex gap-6 overflow-x-auto mt-5 mb-10">
          <button
            className="btn mb-2 text-white hover:text-white bg-slate-600 rounded-md hover:bg-custom-bg cursor-pointer focus:bg-[#ff4a4a] focus:text-white text-lg md:text-xl lg:text-2xl"
            onClick={() => setItems(Image)}
          >
            All
          </button>
          <button
            className="btn mb-2 text-white hover:text-white bg-slate-600 rounded-md hover:bg-custom-bg cursor-pointer focus:bg-[#ff4a4a] focus:text-white text-lg md:text-xl lg:text-2xl"
            onClick={() => filterItem("success")}
          >
            Success
          </button>
          <button
            className="btn mb-2 text-white hover:text-white bg-slate-600 rounded-md hover:bg-custom-bg cursor-pointer focus:bg-[#ff4a4a] focus:text-white text-lg md:text-xl lg:text-2xl"
            onClick={() => filterItem("campus")}
          >
            Campus
          </button>
          <button
            className="btn mb-2 text-white hover:text-white bg-slate-600 rounded-md hover:bg-custom-bg cursor-pointer focus:bg-[#ff4a4a] focus:text-white text-lg md:text-xl lg:text-2xl"
            onClick={() => filterItem("students")}
          >
            Students
          </button>
          <button
            className="btn mb-2 text-white hover:text-white bg-slate-600 rounded-md hover:bg-custom-bg cursor-pointer focus:bg-[#ff4a4a] focus:text-white text-lg md:text-xl lg:text-2xl"
            onClick={() => filterItem("others")}
          >
            Others
          </button>
        </div>

        {/*---------Image---------Gallery---------*/}
        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
          {items.map((item) => (
            <ImageCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImagesGallery;

        {/* See More Button */}
        {/* <div className="flex justify-center mt-6">
          <Link to="/photogalary">
            <button className="text-2xl text-white bg-custom-bg py-4 px-7 rounded-lg hover:bg-red-800 duration-150">
              See More
            </button>
          </Link>
        </div> */}
