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
  })

  return (
      <div className="container m-auto py-10">
          <h2 className="text-center text-4xl font-bold">
            ভিডিও <span className="text-custom-bg">গ্যালারি</span>
        </h2>
       
          <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
             {videoData.map((item, index) => (
               <div key={index}>
                 <div className='w-full h-[250px] border-2  '>
                   <iframe
                     className='w-full h-full'
                     src={item.videoUrl}
                     frameBorder='0'
                     allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
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
