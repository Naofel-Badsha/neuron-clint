import { Button } from "antd";
import {  TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS for animations
import { useEffect } from "react";


const bookcard = ({ item }) => {

  
  useEffect(() => {
    AOS.init({ duration: 2000 }); // Initialize AOS with animation duration
  }, []);

    return (
        <div className=" border border-gray-400 bg-white p-8 shadow-xl rounded-xl" data-aos="slide-up">
          <div className=" w-full h-72"> <img src={ item.image } className="object-cover w-full h-72 rounded-2xl" alt="" /></div>
          <div className="">
          <h3 className="font-extrabold text-xl mt-5 text-center">{ item.name }</h3>
                <div className="font-extrabold text-xl mt-2 flex items-center text-center justify-center pb-3"> <TbCurrencyTaka className="text-2xl" />{ item.price} </div>
        <div className=" flex justify-center items-center">
        <Link to={`/book/view/${item._id}`}> 
            
        <Button className="relative inline-flex items-center justify-center p-4 px-5 py-6 overflow-hidden font-medium text-custom-bg transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
<span className="absolute inset-0 w-full h-full bg-gradient-to-br from-custom-bg via-purple-600 to-pink-700"></span>
<span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
<span className="relative text-white">BUY NOW</span>
</Button>
</Link>
        </div>
          </div>
        </div>
    );
};

export default bookcard;