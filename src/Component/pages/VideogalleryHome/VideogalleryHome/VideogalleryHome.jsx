import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../../hooks/useAxiosCommon";
import { Link } from "react-router-dom";

const VideogalleryHome = () => {
  const AxiosCommon = useAxiosCommon();

  const {
    data: videoData = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["Vedio"],
    queryFn: async () => {
      const { data } = await AxiosCommon(`/Vedio`);
      return data;
    },
  });

  return (
    <div className="w-full bg-[#fef2f2] py-16 mt-16">
      <div className="max-w-screen-xl mx-auto px-2">
        {/*==============Heading================*/}
        <div className="">
          <h2 className="text-center text-3xl md:text-4xl lg:text-5xl text-[#333333] font-bold ">
            ভিডিও <span className="text-custom-bg">গ্যালারি</span>
          </h2>
          <div className="flex w-16 m-auto">
            <span className="w-8 h-[4px] bg-[#333333]"></span>
            <span className="w-8 h-[4px] bg-custom-bg "></span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10">
          {videoData.slice(0, 6).map((item, index) => (
            <div key={index}>
              <div className="w-full h-[250px] border-2  ">
                <iframe
                  className="w-full h-full"
                  src={item.videoUrl}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={`YouTube Video ${item.id}`}
                ></iframe>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link to="/vediogalary">
            <button className="btn text-2xl px-8 py-2 text-white bg-custom-bg rounded-lg hover:bg-red-800 duration-150">
              See More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VideogalleryHome;
