import { useForm } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import { useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { IoMdAddCircleOutline } from "react-icons/io";

const AddContest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showName, setShowName] = useState(null);
  const [showImagePreview, setShowImagePreview] = useState("");
  const { register, handleSubmit, reset } = useForm();
  const fileInputRef = useRef();

  const handleClearFile = () => {
    setShowName(null);
    setShowImagePreview("");
    fileInputRef.current.value = "";
  };

  const onSubmit = async (data) => {
    if (showName) {
      setIsLoading(true); // Start loading
      const formData = new FormData();
      formData.append("image", showName);

      console.log("Uploading file:", showName);
      console.log("FormData:", formData.get("image"));

      try {
        const imgbbResponse = await axios.post(
          `https://api.imgbb.com/1/upload?key=${
            import.meta.env.VITE_IMGBB_API_KEY
          }`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (imgbbResponse.data.success) {
          data.image = imgbbResponse.data.data.display_url;

          const response = await fetch(
            `${import.meta.env.VITE_API_URL}/Add/corse`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            }
          );

          if (response.ok) {
            toast.success("Contest added successfully");
            reset();
            handleClearFile();
          } else {
            toast.error("Error adding contest");
          }
        } else {
          toast.error("Error uploading image");
        }
      } catch (error) {
        console.error("Error uploading image:", error);
        toast.error("An error occurred while uploading the image.");
      } finally {
        setIsLoading(false); // Stop loading
      }
    } else {
      toast.error("Please upload an image");
    }
  };

  return (
    <div className="container mx-auto my-8 p-4">
      <h1 className="text-3xl mb-4">Add Contest</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/*----------Input-------1---------*/}
        <div>
          <label className="block mb-2">কোর্সের নাম: </label>
          <input
            type="text"
            placeholder="কোর্সের নাম------"
            {...register("corsename", { required: true })}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        {/*----------Uploded-------Image---------*/}
        <div className="my-10 ">
          {showName?.name ? (
            <div className=" mx-auto flex max-w-[600px] items-center gap-x-6  rounded-lg border-2 border-dashed border-gray-400 p-5 bg-white">
              <img
                className="size-[100px] h-[100px] w-full max-w-[150px] rounded-lg object-cover"
                src={showImagePreview}
                alt={showName?.name}
              />
              <div className="flex-1 space-y-1.5 overflow-hidden">
                <h5 className=" text-xl font-medium tracking-tight truncate">
                  {showName?.name}
                </h5>
                <p className=" text-gray-500">
                  {(showName.size / 1024).toFixed(1)} KB
                </p>
              </div>
              <div onClick={handleClearFile}>
                <svg
                  width={30}
                  viewBox="0 -0.5 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M6.96967 16.4697C6.67678 16.7626 6.67678 17.2374 6.96967 17.5303C7.26256 17.8232 7.73744 17.8232 8.03033 17.5303L6.96967 16.4697ZM13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697L13.0303 12.5303ZM11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303L11.9697 11.4697ZM18.0303 7.53033C18.3232 7.23744 18.3232 6.76256 18.0303 6.46967C17.7374 6.17678 17.2626 6.17678 16.9697 6.46967L18.0303 7.53033ZM13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L13.0303 11.4697ZM16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303C18.3232 17.2374 18.3232 16.7626 18.0303 16.4697L16.9697 17.5303ZM11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697L11.9697 12.5303ZM8.03033 6.46967C7.73744 6.17678 7.26256 6.17678 6.96967 6.46967C6.67678 6.76256 6.67678 7.23744 6.96967 7.53033L8.03033 6.46967ZM8.03033 17.5303L13.0303 12.5303L11.9697 11.4697L6.96967 16.4697L8.03033 17.5303ZM13.0303 12.5303L18.0303 7.53033L16.9697 6.46967L11.9697 11.4697L13.0303 12.5303ZM11.9697 12.5303L16.9697 17.5303L18.0303 16.4697L13.0303 11.4697L11.9697 12.5303ZM13.0303 11.4697L8.03033 6.46967L6.96967 7.53033L11.9697 12.5303L13.0303 11.4697Z"
                      fill="#000000"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
          ) : (
            <label
              className=" mx-auto flex max-w-[600px] flex-col items-center justify-center space-y-3 rounded-lg border-2 border-dashed border-gray-400 p-6 bg-white"
              htmlFor="file5"
            >
              <svg
                width={50}
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 42 32"
                enableBackground="new 0 0 42 32"
                xmlSpace="preserve"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path
                      fill="black"
                      d="M33.958,12.988C33.531,6.376,28.933,0,20.5,0C12.787,0,6.839,5.733,6.524,13.384 C2.304,14.697,0,19.213,0,22.5C0,27.561,4.206,32,9,32h6.5c0.276,0,0.5-0.224,0.5-0.5S15.776,31,15.5,31H9c-4.262,0-8-3.972-8-8.5 C1,19.449,3.674,14,9,14h1.5c0.276,0,0.5-0.224,0.5-0.5S10.776,13,10.5,13H9c-0.509,0-0.99,0.057-1.459,0.139 C7.933,7.149,12.486,1,20.5,1C29.088,1,33,7.739,33,14v1.5c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5V14 c0-0.003,0-0.006,0-0.009c3.019,0.331,7,3.571,7,8.509c0,3.826-3.691,8.5-8,8.5h-7.5c-3.238,0-4.5-1.262-4.5-4.5V12.783l4.078,4.07 C25.176,16.951,25.304,17,25.432,17s0.256-0.049,0.354-0.146c0.195-0.195,0.195-0.513,0-0.707l-4.461-4.452 c-0.594-0.592-1.055-0.592-1.648,0l-4.461,4.452c-0.195,0.194-0.195,0.512,0,0.707s0.512,0.195,0.707,0L20,12.783V26.5 c0,3.804,1.696,5.5,5.5,5.5H33c4.847,0,9-5.224,9-9.5C42,17.333,37.777,13.292,33.958,12.988z"
                    ></path>{" "}
                  </g>
                </g>
              </svg>
              <div className="space-y-1.5 text-center">
                <h5 className="whitespace-nowrap text-lg font-medium tracking-tight ">
                  Upload your Image
                </h5>
                <p className="text-sm text-gray-500">
                  File Should be in PNG, JPEG or JPG formate
                </p>
              </div>
            </label>
          )}

          <input
            ref={fileInputRef}
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                const imageFile = e.target.files[0];
                setShowName(imageFile);
                setShowImagePreview(URL.createObjectURL(imageFile));
              }
            }}
            className="hidden"
            id="file5"
            type="file"
            name="image"
            accept="image/*"
          />
        </div>

        {/* <div>
          <label className="block mb-2">Image URL</label>
          <input
            type="text"
            {...register('image', { required: true })}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div> */}
        {/*----------Input-------2---------*/}
        <div>
          <label className="block mb-2">কোর্স ফি :</label>
          <input
            type="text"
            placeholder="কোর্স ফি------"
            {...register("coachprice", { required: true })}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        {/*----------Input-------3---------*/}
        <div>
          <label className="block mb-2">বিষয়ভিত্তিক মোট ক্লাস : </label>
          <input
            type="text"
            placeholder="বিষয়ভিত্তিক মোট ক্লাস------"
            {...register("motclass", { required: true })}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        {/*----------Input-------4---------*/}
        <div>
          <label className="block mb-2">স্পেশাল ক্লাস :</label>
          <textarea
            {...register("spashalclass", { required: true })}
            placeholder="স্পেশাল ক্লাস------"
            className="w-full p-2 border border-gray-300 rounded"
          ></textarea>
        </div>
        {/*----------Input-------5---------*/}
        <div>
          <label className="block mb-2">সলভ ক্লাস : </label>
          <textarea
            {...register("Solutionclass", { required: true })}
            placeholder="সলভ ক্লাস------"
            className="w-full p-2 border border-gray-300 rounded"
          ></textarea>
        </div>
        {/*----------Input-------6---------*/}
        <div>
          <label className="block mb-2">মোট ক্লাস টেস্ট : </label>
          <textarea
            {...register("motclass", { required: true })}
            placeholder="মোট ক্লাস টেস্ট------"
            className="w-full p-2 border border-gray-300 rounded"
          ></textarea>
        </div>
        {/*----------Input-------7---------*/}
        <div>
          <label className="block mb-2">সাবজেক্ট ফাইনাল টেস্ট : </label>
          <textarea
            {...register("SubjectFinal", { required: true })}
            placeholder="সাবজেক্ট ফাইনাল টেস্ট------"
            className="w-full p-2 border border-gray-300 rounded"
          ></textarea>
        </div>
        {/*----------Input-------8---------*/}
        <div>
          <label className="block mb-2">ফাইনাল মডেল টেস্ট : </label>
          <textarea
            {...register("finalmodeltest", { required: true })}
            placeholder="ফাইনাল মডেল টেস্ট------"
            className="w-full p-2 border border-gray-300 rounded"
          ></textarea>
        </div>
        {/*----------Input-------9---------*/}
        <div>
          <label className="block mb-2">গ্রান্ড ফাইনাল এক্সাম : </label>
          <textarea
            {...register("finalmodelexam", { required: true })}
            placeholder="গ্রান্ড ফাইনাল এক্সাম------"
            className="w-full p-2 border border-gray-300 rounded"
          ></textarea>
        </div>
        {/*----------Input-------10---------*/}
        <div>
          <label className="block mb-2">কোর্সের বর্ণনা : </label>
          <textarea
            {...register("description", { required: true })}
            placeholder="কোর্সের বর্ণনা------"
            className="w-full p-2 border border-gray-300 rounded"
          ></textarea>
        </div>
        {/*----------Input-------11---------*/}
        <button
          type="submit"
          className={`mt-5 text-xl bg-custom-bg text-white flex gap-2 items-center btn ${
            isLoading ? "disabled:opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="spinner-border animate-spin inline-block w-4 h-4 border-2 rounded-full"></div>
          ) : (
            <IoMdAddCircleOutline />
          )}
          {isLoading ? "Loading..." : "Add course"}
        </button>
      </form>
    </div>
  );
};

export default AddContest;
