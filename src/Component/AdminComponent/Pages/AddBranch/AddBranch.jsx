import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { IoMdAddCircleOutline } from "react-icons/io";

const AddBranch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true); // Start loading

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/Add/Branch`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success('Headline added successfully');
        reset();
      } else {
        toast.error('Error adding Headline');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred while adding the Vedio.');
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div className="container mx-auto my-8 p-4">
      <h1 className="text-3xl mb-4"> Add Branch</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block mb-2">শাখা Name</label>
          <input
            type="text"
            {...register('branchName', { required: true })}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block mb-2">পরিচালক</label>
          <input
            type="text"
            {...register('director', { required: true })}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block mb-2">Phon Numbar</label>
          <input
            type="text"
            {...register('phone', { required: true })}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block mb-2">location address</label>
          <input
            type="text"
            {...register('location', { required: true })}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>


        <div>
          <label className="block mb-2">facebook link</label>
          <input
            type="text"
            {...register('facebooklink', { required: true })}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>



        <div>
          <label className="block mb-2">Instragramlink</label>
          <input
            type="text"
            {...register('instragramlink', { required: true })}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>



        <div>
          <label className="block mb-2">Youtube Link</label>
          <input
            type="text"
            {...register('YoutubeLink', { required: true })}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>



        <div>
          <label className="block mb-2">locationLink</label>
          <input
            type="text"
            {...register('locationLink', { required: true })}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>




        

 <div>
  <label className="block mb-2">ক্যাটাগরি :</label>
  <select
    {...register('Brach', { required: true })}
    className="w-full p-2 border border-gray-300 rounded"
  >

<option value="main">main</option>
    <option value="Dhaka">Dhaka</option>
 
    <option value="Khulna">Khulna</option>
    <option value="Rajshahi">Rajshahi</option>
    <option value="Barishal">Barishal</option>
    <option value="Chattogram">Chattogram</option>
    <option value="Rangpur">Rangpur</option>
    <option value="Mymensingh">Mymensingh</option>
    <option value="Sylhet">Sylhet</option>
  </select>
</div>








        <button
          type="submit"
          className={`mt-5 text-xl bg-custom-bg text-white flex gap-2 items-center btn ${isLoading ? 'disabled:opacity-50 cursor-not-allowed' : ''}`}
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="spinner-border animate-spin inline-block w-4 h-4 border-2 rounded-full"></div>
          ) : (
            <IoMdAddCircleOutline />
          )}
          {isLoading ? 'Loading...' : 'Add Headline'}
        </button>
      </form>
    </div>
  );
};

export default AddBranch;
