import { Link } from "react-router-dom";

import Logo from "../../assets/logonu.png";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaInstagram, FaPhoneAlt, FaYoutube } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="w-full bg-[#4d386b]">
      <div className=" max-w-screen-xl mx-auto">
        <div className="flex justify-between gap-10 flex-wrap py-10 px-2">
          {/*---------Part--------1-------*/}
          <div className="mb-0 col-span-full lg:col-span-2 ">
            {/*-----website-----logo-----*/}
            <div className=" flex items-center gap-2">
              <img src={Logo} className="w-[60px] h-[60px]"  />
              <div className="">
                <p className="tracking-wider text-2xl md:text-4xl lg:text-4xl font-bold bg-clip-text text-transparent bg-custom-bg">
                  NEURON
                </p>
                <p className="tracking-tight text-xs font-medium text-white">
                  Nursing Admission Coaching
                </p>
              </div>
            </div>
            {/*------Social------Icon------*/}
            <div className="flex ml-0 md:ml-16 lg:ml-16 gap-5 mt-7 ">
              <a
                className="relative w-10 h-10 rounded-full transition-all duration-500 flex justify-center items-center bg-[linear-gradient(45deg,#FEE411_6.9%,#FEDB16_10.98%,#FEC125_17.77%,#FE983D_26.42%,#FE5F5E_36.5%,#FE2181_46.24%,#9000DC_85.57%)]  hover:bg-gradient-to-b from-gray-900 to-gray-900"
              >
                <FaInstagram className="text-2xl text-white"/>
              </a>
              <a href="https://www.facebook.com/profile.php?id=100093095790723">
                <a className="relative w-10 h-10 rounded-full transition-all duration-500 flex justify-center items-center bg-custom-bg  hover:bg-gray-900 ">
                  <FaFacebook className="text-2xl text-white"/> 
                </a>
              </a>
              <a className="relative w-10 h-10 rounded-full transition-all duration-500 flex justify-center items-center bg-[#FF0000]  hover:bg-gray-900 ">
                <FaYoutube className="text-2xl text-white"/>
              </a>
            </div>
          </div>

          {/*---------Part--------2-------*/}
          <div>
            <h4 className="text-xl text-white font-medium mb-7">
              Get In Touch
            </h4>
            <ul className="text-white  transition-all duration-500">
              {/*----------Li-------1------*/}
              <li className="flex gap-2 mt-4">
                <FaPhoneAlt className="text-xl" /> +88 01730577236{" "}
              </li>
              {/*----------Li-------2------*/}
              <li className="flex gap-2 mt-4">
                <MdEmail className="text-xl" /> neuronnursing32@gmail.com
              </li>
              {/*----------Li-------3------*/}
              <li className="flex gap-2 mt-4">
                <TbWorld className="text-xl" />{" "}
                https://neuronnursingcoaching.com/{" "}
              </li>
              {/*----------Li-------4------*/}
              <li className="flex gap-2 mt-4 ">
                <IoLocationSharp className="text-xl" /> ৯৫ গ্রীনরোড, বিটিআই
                সেন্ট্রাল প্লাজা, <br></br> ৩য় তলা (লিফটের-২), আনন্দ সিনেমা <br></br>  হলের বিপরীতে{" "}
              </li>
            </ul>
          </div>
           {/*---------Part--------3-------*/}
          <div>
            <h4 className="text-xl text-white font-medium mb-7">Products</h4>
            <ul className="text-white transition-all duration-500 flex flex-col">
              <Link to={"/"} className="mb-3">
                <a className="text-white hover:text-white">হোম</a>
              </Link>
              <Link to={"/AllCorsess"} className="mb-3">
                <a className="text-white hover:text-white">কোর্সসমূহ</a>
              </Link>
              <Link to={"/AboutUs"} className="mb-3">
                <a className="text-white hover:text-white">আমাদেরসম্পর্কে</a>
              </Link>
              <Link to={"/Allbranch"} className="mb-3">
                <a className="text-white hover:text-white"> শাখাসমূহ</a>
              </Link>
            </ul>
          </div>
           {/*---------Part--------4-------*/}
          <div>
            <h4 className="text-xl text-white font-medium mb-7">
              Newsletter
            </h4>
            <div className="flex">
              <input
                type="text"
                className="w-full py-2.5 px-3 rounded-l-full border-0 border-gray-300 shadow-sm text-gray-800  placeholder:text-gray-400 focus:outline-none focus:border-gray-500"
                placeholder="Your email here.."
              />
              <button
                type="submit"
                className="bg-custom-bg py-2.5 px-3 rounded-r-full duration-500 text-sm text-white font-semibold hover:bg-gray-800"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
         {/*---------Copy--------Right---------*/}
        <div className="py-7 border-t border-gray-200 px-2">
          <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
            <span className="text-sm text-white ">
              <div className="flex">
                <p>&copy; 1998 NEURON All rights reserved.</p>
                <p>
                  Developed by
                  <a href="https://web.facebook.com/fred.jh.31" target="_blank">
                    Zobayer & Naofel
                  </a>
                </p>
              </div>
            </span>
            <ul className="flex items-center gap-9 mt-4 lg:mt-0">
              <li>
                <a className="text-sm text-white">Terms</a>
              </li>
              <li>
                <a className="text-sm text-white">Privacy</a>
              </li>
              <li>
                <a className="text-sm text-white">Cookies</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
