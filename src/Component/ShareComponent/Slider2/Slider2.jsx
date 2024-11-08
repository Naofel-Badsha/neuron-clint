import { useState, useEffect } from "react";

export const Slider2 = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliderImages = [
    { img: "https://i.ibb.co/FVVTCW5/pinspal.jpg" },
    { img: "https://i.ibb.co/DpSpGWN/20240204-165114-01-3-3000x3045-7000-jpeg-1-1.webp" },
    { img: "https://i.ibb.co/FVVTCW5/pinspal.jpg" },
    { img: "https://i.ibb.co/8Xr9fyN/hbbbb.jpg" },
    { img: "https://i.ibb.co/vXZ6kdc/image.png" }
  ];

  const prevSlider = () => setCurrentSlider(currentSlider === 0 ? sliderImages.length - 1 : currentSlider - 1);
  const nextSlider = () => setCurrentSlider(currentSlider === sliderImages.length - 1 ? 0 : currentSlider + 1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 4000); // Change slide every 3 seconds

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, [currentSlider]); // Re-run effect when currentSlider changes

  return (
    <div className="max-w-6xl mx-auto h-[540px] md:h-[670px] flex flex-col xl:flex-row items-center overflow-hidden gap-5 lg:gap-10 relative">
      <div className="absolute w-full h-full flex items-center justify-between z-50 px-5">
        {/* arrow left */}
        <button onClick={prevSlider} className="flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8">
          <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
        </button>
        {/* arrow right */}
        <button onClick={nextSlider} className="flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8">
          <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(180)"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
        </button>
      </div>
      {/* slider container */}
      <div className="h-[540px] md:h-[670px] w-2/3 ml-auto relative ease-linear duration-300 flex items-center"
        style={{ transform: `translateX(-${currentSlider * 50}%)` }}>
        {/* sliders */}
        {sliderImages.map((slide, inx) => (
          <div key={inx} 
            className={`${currentSlider === inx ? "h-[240px] sm:h-[310px] md:h-[480px] lg:h-[580px]" : "h-[220px] sm:h-[260px] md:h-[380px] lg:h-[480px] scale-95 opacity-40"} min-w-[50%] relative duration-200`}
            style={{perspective: "200px"}}>
            <img src={slide.img} className="w-full h-full bg-gray-900 rounded-lg duration-300" alt={slide.tags} style={{ transform: `${currentSlider - 1 === inx ? "rotateY(4deg)" : currentSlider + 1 === inx ? "rotateY(-4deg)" : ""}`, transformStyle: "preserve-3d",}}/>
          </div>
        ))}
      </div>
    </div>
  );
};
