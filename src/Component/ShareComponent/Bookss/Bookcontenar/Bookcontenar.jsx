import { useState, useEffect } from "react";
import Bookcard from "../../Bookcard/Bookcard";
import { Link } from "react-router-dom";
import useAxiosCommon from "../../../hooks/useAxiosCommon";
import { useQuery } from "@tanstack/react-query";

const Bookcontenar = () => {
  const AxiosCommon = useAxiosCommon();

  const {
    data: Image = [], // fetched data
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["books"],
    queryFn: async () => {
      const { data } = await AxiosCommon(`/books`);
      return data;
    },
  });

  const [items, setItems] = useState([]);

  // Update items state when Image data is fetched
  useEffect(() => {
    setItems(Image);
  }, [Image]);

  const filterItem = (categoryItem) => {
    const updatedItems = Image.filter(
      (carElem) => carElem.category === categoryItem
    );
    setItems(updatedItems);
  };

  return (
    <div className="max-w-screen-xl mx-auto my-4 px-2">
      {/*==============Heading================*/}
      <div className="">
        <h2 className="text-center text-2xl md:text-4xl lg:text-4xl text-[#333333] font-bold mt-8">
          আমাদের <span className="text-custom-bg">বইসমূহ</span>
        </h2>
        <div className="flex w-16 m-auto">
          <span className="w-8 h-[4px] bg-[#333333]"></span>
          <span className="w-8 h-[4px] bg-custom-bg "></span>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-center gap-6 mt-16 mb-6 overflow-x-auto">
          <button
            className="btn mb-2 text-white hover:text-white bg-slate-600 rounded-md hover:bg-custom-bg cursor-pointer focus:bg-[#ff4a4a] focus:text-white text-lg md:text-xl lg:text-2xl"
            onClick={() => setItems(Image)}
          >
            সব
          </button>
          <button
            className="btn mb-2 text-white hover:text-white bg-slate-600 rounded-md hover:bg-custom-bg cursor-pointer focus:bg-[#ff4a4a] focus:text-white text-lg md:text-xl lg:text-2xl"
            onClick={() => filterItem("akadami")}
          >
            একাডেমিক বই
          </button>
          <button
            className="btn mb-2 text-white hover:text-white bg-slate-600 rounded-md hover:bg-custom-bg cursor-pointer focus:bg-[#ff4a4a] focus:text-white text-lg md:text-xl lg:text-2xl"
            onClick={() => filterItem("niyog")}
          >
            নিয়োগ বই
          </button>
          <button
            className="btn mb-2 text-white hover:text-white bg-slate-600 rounded-md hover:bg-custom-bg cursor-pointer focus:bg-[#ff4a4a] focus:text-white text-lg md:text-xl lg:text-2xl"
            onClick={() => filterItem("admission")}
          >
            এডমিশন বই
          </button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Bookcard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookcontenar;
