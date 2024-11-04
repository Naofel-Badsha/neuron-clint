import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAxiosCommon from '../../../hooks/useAxiosCommon';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { data } from 'autoprefixer';

const UpdateContest = () => {
  const [formData, setFormData] = useState({
    corsename: '',
    coachprice: '',
    motclass: '',
    spashalclass: '',
    Solutionclass: '',
    SubjectFinal: '',
    finalmodeltest: '',
    image: '',
  });
  
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { id } = useParams(); // Get the dynamic user ID from the URL
  const AxiosCommon = useAxiosCommon();

  // Fetch contest details using the ID
  const { data: course, isLoading: isFetching, error } = useQuery({
    queryKey: ["corsesingledata", id],
    queryFn: async () => {
      const { data } = await AxiosCommon(`/corse/singledata/${id}`);
      return data;
    },
    enabled: !!id,
    onSuccess: (data) => {
      // Set the fetched data into formData
      setFormData({
        corsename: data.corsename || '',
        coachprice: data.coachprice || '',
        motclass: data.motclass || '',
        spashalclass: data.spashalclass || '',
        Solutionclass: data.Solutionclass || '',
        SubjectFinal: data.SubjectFinal || '',
        finalmodeltest: data.finalmodeltest || '',
        image: data.image || '',
      });
      setImagePreview(data.image || '');
    },
    onError: () => {
      toast.error('Failed to fetch contest data.');
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Create a FormData object
      const dataToSend = new FormData();

      // Append form values
      Object.entries(formData).forEach(([key, value]) => {
        dataToSend.append(key, value);
      });

      // Handle image upload if a new image is selected
      if (imageFile) {
        const imgUploadResponse = await axios.post(
          `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
          imageFile
        );

        if (imgUploadResponse.data.success) {
          dataToSend.append('image', imgUploadResponse.data.data.display_url);
        } else {
          throw new Error('Image upload failed');
        }
      } else {
        // Use the existing image URL
        dataToSend.append('image', imagePreview);
      }

      // Send PUT request to update contest
      const updateResponse = await AxiosCommon.put(`/course/${id}`, dataToSend);
      if (updateResponse.status === 200) {
        toast.success('Contest updated successfully.');
        // Reset formData
        setFormData({
          corsename: '',
          coachprice: '',
          motclass: '',
          spashalclass: '',
          Solutionclass: '',
          SubjectFinal: '',
          finalmodeltest: '',
          image: '',
        });
        setImagePreview('');
      } else {
        throw new Error('Contest update failed');
      }
    } catch (error) {
      toast.error(error.message || 'An error occurred while updating the contest.');
    } finally {
      setIsLoading(false);
    }
  };

  // Handle file input change
  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };


  console.log(data);
  
  return (
    <div className="container mx-auto my-8 p-4">
      <h1 className="text-3xl mb-4">Update Contest</h1>

      {isFetching ? (
        <p>Loading...</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2">Course Name</label>
            <input
              type="text"
              name="corsename"
              value={formData.corsename}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="my-10">
            {imageFile || imagePreview ? (
              <div className="flex items-center">
                <img className="w-[150px] h-[150px] object-cover" src={imagePreview} alt="Preview" />
                <button
                  type="button"
                  onClick={() => {
                    setImagePreview('');
                    setImageFile(null);
                  }}
                  className="ml-4 text-red-500"
                >
                  Remove Image
                </button>
              </div>
            ) : (
              <label htmlFor="file-upload" className="cursor-pointer text-blue-500">
                <input id="file-upload" type="file" className="hidden" onChange={handleFileChange} />
                Upload Image
              </label>
            )}
          </div>

          <div>
            <label className="block mb-2">Course Price</label>
            <input
              type="text"
              name="coachprice"
              value={formData.coachprice}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-2">Motivation Class</label>
            <input
              type="text"
              name="motclass"
              value={formData.motclass}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-2">Special Class</label>
            <input
              type="text"
              name="spashalclass"
              value={formData.spashalclass}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-2">Solution Class</label>
            <input
              type="text"
              name="Solutionclass"
              value={formData.Solutionclass}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-2">Subject Final</label>
            <input
              type="text"
              name="SubjectFinal"
              value={formData.SubjectFinal}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-2">Final Model Test</label>
            <input
              type="text"
              name="finalmodeltest"
              value={formData.finalmodeltest}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded"
            disabled={isLoading}
          >
            {isLoading ? 'Updating...' : 'Update Contest'}
          </button>
        </form>
      )}
    </div>
  );
};

export default UpdateContest;
