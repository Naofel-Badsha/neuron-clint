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
    <div className="container m-auto my-4 p-4 ">
      <div className="mt-6">
        <h2 className="text-center text-3xl md:text-5xl font-bold">
          আমাদের <span className="text-custom-bg">বইসমূহ</span>
        </h2>
      </div>
      <div>
        <div className="flex flex-wrap  gap-3 md:gap-6 py-10 justify-center">
          <button
            className=" px-4 md:px-5 pb-2 md:pb-4 pt-3 md:pt-5 text-white hover:text-white bg-slate-600 hover:bg-slate-700 cursor-pointer focus:bg-[#ff4a4a] focus:text-white text-2xl rounded-xl"
            onClick={() => setItems(Image)}
          >
            All
          </button>
          <button
            className="px-4 md:px-5 pb-2 md:pb-4 pt-3 md:pt-5 text-white hover:text-white bg-slate-600 hover:bg-slate-700 cursor-pointer focus:bg-[#ff4a4a] focus:text-white text-2xl rounded-xl"
            onClick={() => filterItem("akadami")}
          >
             একাডেমিক 
           
          </button>
          <button
            className="px-4 md:px-5 pb-2 md:pb-4 pt-3 md:pt-5 text-white hover:text-white bg-slate-600 hover:bg-slate-700 cursor-pointer focus:bg-[#ff4a4a] focus:text-white text-2xl rounded-xl"
            onClick={() => filterItem("niyog")}
          >
            নিয়োগ 
          </button>
          <button
            className="px-4 md:px-5 pb-2 md:pb-4 pt-3 md:pt-5 text-white hover:text-white bg-slate-600 hover:bg-slate-700 cursor-pointer focus:bg-[#ff4a4a] focus:text-white text-2xl rounded-xl"
            onClick={() => filterItem("admission")}
          >
            এডমিশন 
          </button>
        </div>
        <div className="grid gap-2 md:grid-cols-3 lg:grid-cols-4">
          {items.slice(0, 4).map((item) => (
            <Bookcard key={item.id} item={item}></Bookcard>
          ))}
        </div>
        <div className="flex justify-center mt-6 pb-7">
          <Link to="/AllBooks">
            <button className="text-2xl text-white bg-custom-bg py-2 md:py-4 px-4 md:px-7 rounded-lg hover:bg-red-800 duration-150">
              See More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Bookcontenarhome;
