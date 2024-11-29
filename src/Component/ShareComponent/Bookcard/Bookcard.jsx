
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS for animations
import { useEffect } from "react";

const bookcard = ({ item }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 }); // Initialize AOS with animation duration
  }, []);

  return (
    <div
      className="mt-2 border-2 border-gray-400 bg-white p-6 shadow-xl rounded-xl"
      data-aos="slide-up"
    >
      <div className="w-full h-72">
        <img
          src={item.image}
          className="object-cover w-full h-72 rounded-2xl"
        />
      </div>
      <div>
        <h3 className="font-extrabold text-xl mt-5 text-center">{item.name}</h3>
        <div className="font-extrabold text-xl mt-2 flex items-center text-center justify-center pb-3">
          <TbCurrencyTaka className="text-2xl" />
          {item.price}
        </div>
        <div className="flex justify-center items-center mb-3">
          <Link to={`/book/view/${item._id}`}>
                <button className="btn text-2xl px-8 py-2 text-white bg-custom-bg rounded-lg hover:bg-red-800 duration-150">
                Buy Now
              </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default bookcard;
