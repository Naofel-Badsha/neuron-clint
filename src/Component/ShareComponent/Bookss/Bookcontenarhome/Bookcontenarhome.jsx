import { useState, useEffect } from "react";
import Bookcard from "../../Bookcard/Bookcard";
import { Link } from "react-router-dom";
import useAxiosCommon from "../../../hooks/useAxiosCommon";
import { useQuery } from "@tanstack/react-query";

const Bookcontenarhome = () => {
  const AxiosCommon = useAxiosCommon();

  const {
    data: Image = [],
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

  // Update `items` when `Image` changes after fetching
  useEffect(() => {
    setItems(Image);
  }, [Image]);

  const filterItem = (categoryItem) => {
    const updateItems = Image.filter((book) => book.category === categoryItem);
    setItems(updateItems);
  };

  return (
    <div className="w-full bg-[#fef2f2] py-16">
      <div className="max-w-screen-xl mx-auto px-2">
        {/*==============Heading================*/}
        <div className="">
          <h2 className="text-center text-3xl md:text-4xl lg:text-5xl text-[#333333] font-bold ">
            আমাদের <span className="text-custom-bg"> বইসমূহ</span>
          </h2>
          <div className="flex w-20 m-auto">
            <span className="w-10 h-[4px] bg-[#333333]"></span>
            <span className="w-10 h-[4px] bg-custom-bg "></span>
          </div>
        </div>

        {/*----------Filter----------Buttons----------*/}
        <div>
          <div className="flex items-center justify-center gap-6 overflow-x-auto mt-10 mb-10">
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
              একাডেমিক
            </button>
            <button
              className="btn mb-2 text-white hover:text-white bg-slate-600 rounded-md hover:bg-custom-bg cursor-pointer focus:bg-[#ff4a4a] focus:text-white text-lg md:text-xl lg:text-2xl"
              onClick={() => filterItem("niyog")}
            >
              নিয়োগ
            </button>
            <button
              className="btn mb-2 text-white hover:text-white bg-slate-600 rounded-md hover:bg-custom-bg cursor-pointer focus:bg-[#ff4a4a] focus:text-white text-lg md:text-xl lg:text-2xl"
              onClick={() => filterItem("admission")}
            >
              এডমিশন
            </button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.slice(0, 4).map((item) => (
              <Bookcard key={item.id} item={item}></Bookcard>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link to="/AllBooks">
              <button className="btn text-2xl px-8 py-2 text-white bg-custom-bg rounded-lg hover:bg-red-800 duration-150">
                See More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookcontenarhome;
