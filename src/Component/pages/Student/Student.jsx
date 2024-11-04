import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import 'swiper/css/navigation';

// import required modules
import { Autoplay } from "swiper/modules";
// import required modules
import { Navigation } from 'swiper/modules';

import StudentCard from "./StudentCard";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import { useQuery } from "@tanstack/react-query";

const Student = () => {
   

    const AxiosCommon = useAxiosCommon();

    const {
      data: students = [], // fetched data
      isLoading,
      refetch,
    } = useQuery({
      queryKey: ["Successfulstudents"],
      queryFn: async () => {
        const { data } = await AxiosCommon(`/Successfulstudents`);
        return data;
      },
    });

  return (
    <div className=" m-auto mb-10 p-3">
      {/*-----------Heading-----------*/}
      <div className="py-6">
    
      <h2 className="text-center text-4xl md:text-5xl font-bold">আমাদের <span className="text-custom-bg">সাফল্য</span>গাঁথা</h2>
        <div className="w-40 h-[2px] bg-deep-orange-600 m-auto mt-2"></div>
      </div>

      <Swiper
    //   Autoplay,
        modules={[Autoplay, Navigation]}
        spaceBetween={25}
        slidesPerView={1}
        autoplay={true}
        grabCursor={true}
        navigation={true}
        delay={"100"}
        loop={true}
        className="mySwiper Navigation"
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1240: {
            slidesPerView: 4,
          },
        }}
      >
        <div>
          {/*-----------Slider-------1-------*/}
          {students.map((student) => (
            <SwiperSlide>
              <StudentCard
                key={student.id}
                student={student}
              ></StudentCard>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Student;
