import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { IoMdAddCircleOutline } from "react-icons/io";

const AddYoutubevdio = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true); // Start loading

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/Add/Vedio`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success('Vedio added successfully');
        reset();
      } else {
        toast.error('Error adding Vedio');
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
      <h1 className="text-3xl mb-4">Add Vedio</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block mb-2">videoUrl</label>
          <input
            type="text"
            {...register('videoUrl', { required: true })}
            className="w-full p-2 border border-gray-300 rounded"
          />
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
          {isLoading ? 'Loading...' : 'Add Vedio'}
        </button>
      </form>
    </div>
  );
};

export default AddYoutubevdio;
