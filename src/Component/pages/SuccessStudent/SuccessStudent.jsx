// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

import { Autoplay } from "swiper/modules";
import SuccessStudentCard from "./SuccessStudentCard";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import { useQuery } from "@tanstack/react-query";

const SuccessStudent = () => {
  // const [successStudents, setSuccessStudents] = useState([]);

  const AxiosCommon = useAxiosCommon();

  const {
    data: successStudents = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["Successstory"],
    queryFn: async () => {
      const { data } = await AxiosCommon(`/Successstory`);
      return data;
    },
  });

  return (
    <div className="max-w-screen-xl mx-auto px-2">
      {/*-----------Heading-----------*/}
      <div className="">
        {/*==============Heading================*/}
        <div className="">
          <h2 className="text-center text-3xl md:text-4xl lg:text-5xl text-[#333333] font-bold ">
            আমাদের <span className="text-custom-bg"> সফলতার</span> গল্প
          </h2>
          <div className="flex w-20 m-auto">
            <span className="w-10 h-[4px] bg-[#333333]"></span>
            <span className="w-10 h-[4px] bg-custom-bg "></span>
          </div>
        </div>
      </div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={25}
        slidesPerView={1}
        autoplay={true}
        // grabCursor={true}
        delay={"100"}
        loop={true}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
        }}
      >
        <div>
          {/*-----------Slider-------1-------*/}
          {successStudents.map((successStudent) => (
            <SwiperSlide>
              <SuccessStudentCard
                key={successStudent.id}
                successStudent={successStudent}
              ></SuccessStudentCard>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default SuccessStudent;
