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
    <div className="max-w-screen-xl mx-auto my-4">
      {/*==============Heading================*/}
      <div className="">
        <h2 className="text-center text-4xl text-[#333333] font-bold mt-8">
          আমাদের <span className="text-custom-bg">বইসমূহ</span>
        </h2>
        <div className="flex w-16 m-auto">
          <span className="w-8 h-[4px] bg-[#333333]"></span>
          <span className="w-8 h-[4px] bg-custom-bg "></span>
        </div>
      </div>

      <div>
        <div className="flex flex-wrap gap-6 py-10 justify-center">
          <button
            className="px-5 pb-4 pt-5 text-black hover:text-white bg-slate-200 hover:bg-slate-700 cursor-pointer focus:bg-[#ff4a4a] focus:text-white text-2xl rounded-xl"
            onClick={() => setItems(Image)}
          >
            All
          </button>
          <button
            className="px-5 pb-4 pt-5 text-black hover:text-white bg-slate-200 hover:bg-slate-700 cursor-pointer focus:bg-[#ff4a4a] focus:text-white text-2xl rounded-xl"
            onClick={() => filterItem("akadami")}
          >
            একাডেমিক বই
          </button>
          <button
            className="px-5 pb-4 pt-5 text-black hover:text-white bg-slate-200 hover:bg-slate-700 cursor-pointer focus:bg-[#ff4a4a] focus:text-white text-2xl rounded-xl"
            onClick={() => filterItem("niyog")}
          >
            নিয়োগ বই
          </button>
          <button
            className="px-5 pb-4 pt-5 text-black hover:text-white bg-slate-200 hover:bg-slate-700 cursor-pointer focus:bg-[#ff4a4a] focus:text-white text-2xl rounded-xl"
            onClick={() => filterItem("admission")}
          >
            এডমিশন বই
          </button>
        </div>
        <div className="grid gap-2 md:grid-cols-3 lg:grid-cols-4">
          {items.map((item) => (
            <Bookcard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookcontenar;
