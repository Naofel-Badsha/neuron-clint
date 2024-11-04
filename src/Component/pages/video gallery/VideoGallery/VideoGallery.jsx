import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../../hooks/useAxiosCommon";

const VideoGallery = () => {
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
    <div className="container m-auto py-10">
      {/*==============Heading================*/}
      <div className="pb-10">
        <h2 className="text-center text-4xl text-[#333333] font-bold mt-8">
          ভিডিও <span className="text-custom-bg">গ্যালারি</span>
        </h2>
        <div className="flex w-16 m-auto">
          <span className="w-8 h-[4px] bg-[#333333]"></span>
          <span className="w-8 h-[4px] bg-custom-bg "></span>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {videoData.map((item, index) => (
          <div key={index}>
            <div className="border-2 border-sky-600 ">
              <iframe
                className="w-full h-[250px]"
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
    </div>
  );
};

export default VideoGallery;
