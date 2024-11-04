import { useParams } from "react-router";
import { toast } from "react-toastify";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import { useQuery } from "@tanstack/react-query";

const Bookboking = () => {
  const { id } = useParams(); // Get the dynamic user ID from the URL
  const AxiosCommon = useAxiosCommon();

  // Fetch user details using the ID
  const { data, isLoading, error } = useQuery({
    queryKey: ["user", id],
    queryFn: async () => {
      const { data } = await AxiosCommon(`/books/singledata/${id}`);
      return data;
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading user details</p>;

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    const form = event.target;

    const submitFrom = {
      name: form.name.value,
      email: form.email.value,
      mobile: form.mobile.value,
      address: form.address.value,
      city: form.city.value,
      thana: form.thana.value,
      bookName: data.name, 
      bookPrice: data.price,
    };

    console.log(submitFrom);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/Add/Bookbuy`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitFrom),
      });

      if (response.ok) {
        toast.success('Request successfully sent');
        form.reset(); // Reset the form fields after submission
      } else {
        toast.error('Error sending request');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Error sending request');
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto shadow-2xl">
      <div className="">
        <h3 className="text-xl text-center font-medium">{data.name}</h3>
        <h3 className="text-xl text-center font-medium">${data.price}</h3>
      </div>
      <form onSubmit={handleSubmitForm} className="card-body shadow-2xl lg:p-20 md:p-20 p-3">
        <div className="grid lg:gap-16 md:gap-14 gap-3 lg:grid-cols-2 py-3">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">Name *</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name..."
              className="input input-bordered bg-slate-50 text-black text-xl"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">Email *</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email..."
              className="input input-bordered bg-slate-50 text-black text-xl"
              required
            />
          </div>
        </div>

        <div className="grid lg:gap-16 md:gap-14 gap-3 lg:grid-cols-2 py-3">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">Mobile *</span>
            </label>
            <input
              type="tel"
              name="mobile"
              placeholder="Enter your mobile number..."
              className="input input-bordered bg-slate-50 text-black text-xl"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">Full Address *</span>
            </label>
            <input
              type="text"
              name="address"
              placeholder="Enter your full address..."
              className="input input-bordered bg-slate-50 text-black text-xl"
              required
            />
          </div>
        </div>

        <div className="grid lg:gap-16 md:gap-14 gap-3 lg:grid-cols-2 py-3">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">City *</span>
            </label>
            <input
              type="text"
              name="city"
              placeholder="Enter your city..."
              className="input input-bordered bg-slate-50 text-black text-xl"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">Thana/Upazila *</span>
            </label>
            <input
              type="text"
              name="thana"
              placeholder="Enter your Thana/Upazila..."
              className="input input-bordered bg-slate-50 text-black text-xl"
              required
            />
          </div>
        </div>

        <div className="mt-4 flex justify-center">
          <button className="btn text-xl text-white hover:bg-slate-300 hover:text-black bg-custom-bg w-1/3">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Bookboking;
