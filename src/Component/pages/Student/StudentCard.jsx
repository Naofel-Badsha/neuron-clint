import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS for animations
import { useEffect } from 'react';
const StudentCard = ({ student }) => {
  const { image, name,Secession,institutions } = student;

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
  }, []);
  return (
    <div>
      <div className="shadow-xl border-2 rounded-xl h-full " data-aos="zoom-in">
        <div className=" m-auto py-2">
          <img
            src={image}
          className="w-full h-[350px] md:w-[200px] lg:w-[200px] md:h-[230px] lg:h-[230px] sm:w-full sm:h-full m-auto rounded-xl object-cover" />
        </div>
        <div className="px-8 py-3 sm:text-center md:items-center lg:text-start">
          <h2 className=" text-2xl text-custom-bg font-bold">{name}</h2>
          <p className="text-black py-2 text-2xl font-bold">{Secession}</p>
          <h4 className="text-custom-bg text-xl">{institutions}</h4>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
