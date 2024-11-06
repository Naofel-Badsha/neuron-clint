import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS for animations
import { useEffect } from "react";
const StudentCard = ({ student }) => {
  const { image, name, Secession, institutions } = student;

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
  }, []);
  return (
    <div className="shadow-xl border-2 h-full rounded-xl" data-aos="zoom-in">
      <div className="py-2">
        <img
          src={image}
          className="w-full h-[350px] sm:w-full sm:h-full m-auto px-2 rounded-xl object-cover"
        />
      </div>
      <div className="px-4 py-5 sm:text-center md:items-center lg:text-start">
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
