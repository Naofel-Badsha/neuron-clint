import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS for animations
import { useEffect } from "react";
const StudentCard = ({ student }) => {
  const { image, name, Secession, institutions } = student;

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
  }, []);
  return (
    <div className="shadow-xl border-2 w-full h-full rounded-xl p-6 mt-16 " data-aos="zoom-in">
      <div className="">
        <img
          src={image}
          className="w-full h-[350px] sm:w-full sm:h-full m-auto rounded-xl object-cover"
        />
      </div>
      <div className=" py-6 sm:text-center md:items-center lg:text-start">
        <h2 className=" text-2xl text-custom-bg font-bold">{name}</h2>
        <p className="text-black py-2 text-xl md:text-2xl lg:text-2xl font-bold">
          {Secession}
        </p>
        <h4 className="text-custom-bg text-md md:text-xl lg:text-xl">
          {institutions}
        </h4>
      </div>
    </div>
  );
};

export default StudentCard;
