const SuccessStudentCard = ({ successStudent }) => {
  const { image, name, story, institutions } = successStudent;

  return (
    <div className=" bg-[#f1e8e8] border-2 mt-10 p-6">
      <div className="h-[300px] w-[300px] m-auto ">
        <img src={image} className=" h-[300px] object-cover" />
      </div>

      <div className=" px-0 md:p-5">
        <div className="flex items-center justify-start py-4">
          <i className="fas fa-quote-left quote text-4xl text-custom-bg"></i>
        </div>
        <div className="">
          <h2 className="card-title text-2xl text-custom-bg">{name}</h2>
          <h2 className="card-title text-xl md:text-2xl lg:text-3xl text-black py-4">
            {institutions}
          </h2>
          <p className="text-md md:text-2xl lg:text-2xl text-black  min-h-[196px] max-h-[196px] mb-7 overflow-auto">
            {story}
          </p>
        </div>
        <div className="flex items-center justify-end">
          <i className="fa-solid fa-quote-right text-4xl text-custom-bg"></i>
        </div>
      </div>
    </div>
  );
};

export default SuccessStudentCard;
