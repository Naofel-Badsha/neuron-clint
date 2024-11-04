import { useState } from "react";
import "../ImageCard/ImageCard.css";
import { IoMdClose } from "react-icons/io";

const ImageCard = ({ item }) => {
  const { image } = item;

  //------Images-----Showing-----------
  const [model, setModel] = useState(false);
  const [tempImage, setTempImage] = useState('');

  const getImg = (image) => {
    //  console.log(image)
    setTempImage(image);
    setModel(true);
  };
  return (
    <div>
      {/*--------Modal------Image-----------*/}
      <div className={model ? "model open" : "model"}>
        <img src={tempImage} />
        <IoMdClose onClick={() => setModel(false)}/>
      </div>
      <div className=" card-compact bg-base-100 shadow-xl">
        {/*--------Main------Image-----------*/}
        <div
          onClick={() => getImg(image)}
          className="pics "
        >
          <img
            src={image}
            className="w-full h-[260px] object-cover bg-inherit hover:opacity-05 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
