import { useEffect } from "react";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS for animations

const UniqueAllService = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
  }, []);

  return (
    <div className="mx-6 m-auto py-16">
      {/*==============Heading================*/}
      <div className="pb-10 mb-10">
        <h2 className="text-center text-5xl text-[#333333] font-bold mt-8">
          অনন্য সব <span className="text-custom-bg">সেবা পরিক্রমা</span>
        </h2>
        <div className="flex w-16 m-auto">
          <span className="w-8 h-[4px] bg-[#333333]"></span>
          <span className="w-8 h-[4px] bg-custom-bg "></span>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-4">
        {/*-----------1-------------*/}
        <div
          className="rounded-[30px] bg-[#f9f1f1] py-10 hover:-translate-y-2 duration-150 shadow-sm hover:shadow-lg shadow-custom-bg"
          data-aos="zoom-in"
        >
          <div>
            <img
              src="https://i.ibb.co.com/ft0f1nw/open-book-1.png"
              className="w-28 h-28 m-auto bg-custom-bg p-5 rounded-[20px]"
              alt="অফলাইন/অনলাইন প্রোগ্রাম"
            />
          </div>
          <h3 className="text-xl text-[#585656] text-center mt-6">
            অফলাইন/অনলাইন প্রোগ্রাম
          </h3>
        </div>

        {/*-----------2-------------*/}
        <div
          className="rounded-[30px] bg-[#f9f1f1] py-10 hover:-translate-y-2 duration-150 shadow-sm hover:shadow-lg shadow-custom-bg"
          data-aos="zoom-in"
        >
          <div>
            <img
              src="https://i.ibb.co.com/BVyKMRB/teaching.png"
              className="w-28 h-28 m-auto bg-custom-bg p-5 rounded-[20px]"
              alt="মেধাবী ও অভিজ্ঞ শিক্ষক"
            />
          </div>
          <h3 className="text-xl text-[#585656] text-center mt-6">
            মেধাবী ও অভিজ্ঞ শিক্ষক
          </h3>
        </div>

        {/*-----------3-------------*/}
        <div
          className="rounded-[30px] bg-[#f9f1f1] py-10 hover:-translate-y-2 duration-150 shadow-sm hover:shadow-lg shadow-custom-bg"
          data-aos="zoom-in"
        >
          <div>
            <img
              src="https://i.ibb.co.com/NCvjJWg/writing.png"
              className="w-28 h-28 m-auto bg-custom-bg p-5 rounded-[20px]"
              alt="মানসম্মত স্টাডি ম্যাটেরিয়ালস"
            />
          </div>
          <h3 className="text-xl text-[#585656] text-center mt-6">
            মানসম্মত স্টাডি ম্যাটেরিয়ালস
          </h3>
        </div>

        {/*-----------4-------------*/}
        <div
          className="rounded-[30px] bg-[#f9f1f1] py-10 hover:-translate-y-2 duration-150 shadow-sm hover:shadow-lg shadow-custom-bg"
          data-aos="zoom-in"
        >
          <div>
            <img
              src="https://i.ibb.co.com/KLVJ7V8/presentation.png"
              className="w-28 h-28 m-auto bg-custom-bg p-5 rounded-[20px]"
              alt="কনসেপ্ট বেইজড ক্লাস"
            />
          </div>
          <h3 className="text-xl text-[#585656] text-center mt-6">
            কনসেপ্ট বেইজড ক্লাস
          </h3>
        </div>

        {/*-----------5-------------*/}
        <div
          className="rounded-[30px] bg-[#f9f1f1] py-10 hover:-translate-y-2 duration-150 shadow-sm hover:shadow-lg shadow-custom-bg"
          data-aos="zoom-in"
        >
          <div>
            <img
              src="https://i.ibb.co.com/NN8CS4s/document.png"
              className="w-28 h-28 m-auto bg-custom-bg p-5 rounded-[20px]"
              alt="ইউনিক এক্সাম সিস্টেম"
            />
          </div>
          <h3 className="text-xl text-[#585656] text-center mt-6">
            ইউনিক এক্সাম সিস্টেম
          </h3>
        </div>

        {/*-----------6-------------*/}
        <div
          className="rounded-[30px] bg-[#f9f1f1] py-10 hover:-translate-y-2 duration-150 shadow-sm hover:shadow-lg shadow-custom-bg"
          data-aos="zoom-in"
        >
          <div>
            <img
              src="https://i.ibb.co.com/vPPxq3b/chat.png"
              className="w-28 h-28 m-auto bg-custom-bg p-5 rounded-[20px]"
              alt="Auto SMS রেজাল্ট"
            />
          </div>
          <h3 className="text-xl text-[#585656] text-center mt-6">
            Auto SMS রেজাল্ট
          </h3>
        </div>

        {/*-----------7-------------*/}
        <div
          className="rounded-[30px] bg-[#f9f1f1] py-10 hover:-translate-y-2 duration-150 shadow-sm hover:shadow-lg shadow-custom-bg"
          data-aos="zoom-in"
        >
          <div>
            <img
              src="https://i.ibb.co.com/qNtyqT2/exam.png"
              className="w-28 h-28 m-auto bg-custom-bg p-5 rounded-[20px]"
              alt="এক্সাম এনালাইসিস রিপোর্ট"
            />
          </div>
          <h3 className="text-xl text-[#585656] text-center mt-6">
            এক্সাম এনালাইসিস রিপোর্ট
          </h3>
        </div>

        {/*-----------8-------------*/}
        <div
          className="rounded-[30px] bg-[#f9f1f1] py-10 hover:-translate-y-2 duration-150 shadow-sm hover:shadow-lg shadow-custom-bg"
          data-aos="zoom-in"
        >
          <div>
            <img
              src="https://i.ibb.co.com/WW38nwx/best.png"
              className="w-28 h-28 m-auto bg-custom-bg p-5 rounded-[20px]"
              alt="কনসেপ্ট বেইজড ক্লাস"
            />
          </div>
          <h3 className="text-xl text-[#585656] text-center mt-6">
            কনসেপ্ট বেইজড ক্লাস
          </h3>
        </div>
      </div>
    </div>
  );
};

export default UniqueAllService;
