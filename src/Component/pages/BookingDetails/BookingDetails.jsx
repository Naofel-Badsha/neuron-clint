import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../hooks/useAxiosCommon";

const BookingDetails = () => {
  const { id } = useParams(); // Get the dynamic ID from the URL
  const AxiosCommon = useAxiosCommon();

  // Fetch user details using the ID
  const { data, isLoading, error } = useQuery({
    queryKey: ["user", id],
    queryFn: async () => {
      const { data } = await AxiosCommon(`/Bookbuy/singledata/${id}`);
      return data;
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading user details</p>;

  return (
    <div className="max-w-screen-xl mx-auto shadow-2xl p-5">
      <h2 className="text-2xl font-bold text-center">Order Details</h2>
      <div className="mt-5">
        <h3 className="text-xl font-semibold">User Information</h3>
        <p><strong>Name:</strong> {data.name}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Mobile:</strong> {data.mobile}</p>
        <p><strong>Address:</strong> {data.address}</p>
        <p><strong>City:</strong> {data.city}</p>
        <p><strong>Thana/Upazila:</strong> {data.thana}</p>
      </div>
      <div className="mt-5">
        <h3 className="text-xl font-semibold">Book Details</h3>
        <p><strong>Book Name:</strong> {data.bookName}</p>
        <p><strong>Book Price:</strong> ${data.bookPrice}</p>
        <p><strong>Order Status:</strong> {data.order}</p>
      </div>
    </div>
  );
};

export default BookingDetails;
