import { Link } from "react-router-dom";
import UccAboutImage1 from "../../../assets/aboutimage.jpg";
import UccAboutImage2 from "../../../assets/about-2.png";
const AboutUs = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-6 px-2">
      {/*-----------UccAbout-------Main-----Content--------*/}
      {/*-----------hero------1-----------*/}
      <div className="hero">
        <div className="flex items-center justify-between gap-16 flex-col lg:flex-row py-10">
          {/*--------------Text------------*/}
          <div className="flex-1">
            <div>
              <h1 className="text-3xl text-black font-bold">
                আমাদের{" "}
                <span className="text-3xl font-bold text-custom-bg">
                  সম্পর্কে
                </span>
              </h1>
              <p className="text-lg md:text-xl lg:text-xl text-black  md:text-justify lg:text-justify py-5">
                মানব সেবায় নার্সিং একটি নোভেল প্রফেশন, দিন দিন সারা বিশ্বে এর
                গুরুত্ব বাড়ছে। বাংলাদেশের নার্সিং বইয়ের প্রকাশনা জগতে নিউরন
                পাবলিকেশন স্বনামধন্য ও গৌরবউজ্জল একটি নাম। এই নিউরন পাবলিকেশন
                দ্বারা পরিচালিত দেশের একমাত্র কোচিং "নিউরন নার্সিং কোচিং"।
                বর্তমানে দেখা যাচ্ছে নিউরন নামের সাথে কিছু যোগ করে কিংবা সরাসরি
                নিউরন নামে ও বেনামে অনেক কোচিং চালাচ্ছে যাতে নিউরন পাবলিকেশনের
                ভাবমূর্তি নষ্ট হচ্ছে। প্রিয় নার্সিং শিক্ষার্থী ও নার্সিং এর সাথে
                জড়িত আপনাদের কথা মাথায় রেখেই আমরা নিউরন পাবলিকেশন " নিউরন
                নার্সিং কোচিং" পরিচালনা করে আসছি । আমাদের কোচিং-এর লোগো এবং
                পাবলিকেশন এর লোগো দেখে ভর্তি হন যাতে আপনাদের প্রতারিত হতে না হয়।
                আমাদের নার্সিং বিষয়ক একাডেমিক বই ও ভর্তি গাইড গুলো সারা
                বাংলাদেশে খুবই জনপ্রিয়। তাই প্রতারিত না হয়ে আসল নিউরন নার্সিং
                কোচিং এ ভর্তি হন। "এইচ আল হাসিব" এবং "সাইফুল সাইফ" দ্বারা
                পরিচালিত নিউরন নার্সিং কোচিং এ ভর্তি হন।
              </p>
            </div>
          </div>
          {/*-------------Image----------------*/}
          <div className="flex-1">
            <img src={UccAboutImage1} className="m-auto w-full h-[500px] object-cover border-2 rounded-md" />
          </div>
        </div>
      </div>
      {/*-----------hero------2-----------*/}
      <div className="hero">
        <div className="flex items-center justify-between gap-16 flex-col-reverse lg:flex-row py-10">
          {/*-------------Image----------------*/}
          <div className="flex-1">
            <img src={UccAboutImage2} className="m-auto w-full h-[500px] object-cover border-2 rounded-md" />
          </div>
          {/*--------------Text------------*/}
          <div className="flex-1">
            <div>
              <h1 className="text-3xl text-black  font-bold">
                ৯ বছরের ঈর্ষান্বিত সফলতাকে সঙ্গে নিয়ে ১০ এর কোটায় পা রেখেছে{" "}
                <span className="text-3xl font-bold text-custom-bg">
                  নিউরন পরিবার ! ! !
                </span>
              </h1>
              <p className="text-lg md:text-xl lg:text-xl text-black  md:text-justify lg:text-justify py-5">
                শিক্ষার মূল উদ্দেশ্য হলো একজন শিক্ষার্থীর সুপ্ত মেধা ও প্রতিভাকে
                বিকশিত করা, তার চিন্তা শক্তিকে ত্বরান্বিত করা এবং তাকে ধৈর্যশীল,
                আত্মবিশ্বাসী, নীতিবান ও দায়িত্ববান মানুষ হিসাবে গড়ে তোলা, এই
                নীতিকে সামনে নিয়ে শুরু থেকেই ইউসিসি পরিবারের পথচলা । সততা,
                নিষ্ঠতা, সেবা ও পরিবর্তনের মন মানসিকতা নিয়ে হাটি হাটি পায়ে ১০
                টি বছর অতিক্রম করেছে এই ঐতিহ্যবাহী প্রতিষ্ঠানটি । এগিয়ে চলেছে
                পরিবর্তনের প্রত্যয় নিয়ে, এগিয়ে চলেছে একটি সুন্দর
                বাংলাদেশের স্বপ্ন নিয়ে ।
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
