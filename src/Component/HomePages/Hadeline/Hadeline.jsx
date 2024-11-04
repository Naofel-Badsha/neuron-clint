import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../hooks/useAxiosCommon";

const Headline = () => {
  const AxiosCommon = useAxiosCommon();

  const {
    data = [], // Default to an empty array if no data
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["Headline"],
    queryFn: async () => {
      const { data } = await AxiosCommon(`/Headline`);
      return data;
    },
  });

  // Assuming the data is an array of objects, and each object has a "Headline" property
  return (
    <div className="bg-gray-100 flex justify-center mb-4">
      <marquee className="font-medium px-10 py-2 rounded-full bg-gray-100 mt-2 text-gray-700 max-w-screen-xl mx-auto min-h-1">
        {data.map((item, index) => (
          <span key={index}>
            {item.Headline} {index < data.length - 1 && " | "}
          </span>
        ))}
      </marquee>
    </div>
  );
};

export default Headline;
