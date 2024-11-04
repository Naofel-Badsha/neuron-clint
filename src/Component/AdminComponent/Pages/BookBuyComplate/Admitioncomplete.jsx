import { useState } from 'react';
import { Link } from 'react-router-dom';
import useAxiosCommon from '../../../hooks/useAxiosCommon';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookBuyComplate = () => {
  const AxiosCommon = useAxiosCommon();
  const [itemToDelete, setItemToDelete] = useState(null); // For selected user to delete

  const { data: users = [], isLoading, refetch } = useQuery({
    queryKey: ["Bookbuycomplate"],
    queryFn: async () => {
      const { data } = await AxiosCommon(`/Bookbuy/complate`); // Fetch users with pending status
      return data;
    },
  });

  // Handle deletion of user
  const handleDelete = () => {
    AxiosCommon.delete(`/Bookbuy/${itemToDelete}`)
      .then((res) => {
        refetch(); // Refetch to update UI
        toast.success('User deleted successfully!', { position: 'top-center' });
        closeModal(); // Close modal after deletion
      })
      .catch((err) => {
        console.error(err);
        toast.error('Failed to delete user', { position: 'top-center' });
      });
  };

  // Open modal for delete confirmation
  const openDeleteModal = (id) => {
    setItemToDelete(id);
    document.getElementById('delete_modal').showModal();
  };

  // Close modal
  const closeModal = () => {
    setItemToDelete(null);
    document.getElementById('delete_modal').close();
  };

  return (
    <div className="max-w-6xl mx-auto my-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">User Management</h1>

      {/* Responsive Table Wrapper */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 border">#</th> {/* Row Count Header */}
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Phone</th>
              <th className="px-4 py-2 border">Book Name</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => ( // Use index for row count
              <tr key={user._id}>
                <td className="px-4 py-2 border">{index + 1}</td> {/* Display row index */}
                <td className="px-4 py-2 border">{user.name}</td>
                <td className="px-4 py-2 border">{user.mobile}</td>
                <td className="px-4 py-2 border">{user.bookName}</td>
                <td className="px-4 py-2 border text-center">
                  <Link to={`/view/book/${user._id}`}>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mr-2">
                      View More
                    </button>
                  </Link>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 mr-2"
                    onClick={() => openDeleteModal(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Delete confirmation modal */}
      <dialog id="delete_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Delete Confirmation</h3>
          <p className="py-4">Are you sure you want to delete this user?</p>
          <div className="modal-action">
            <button className="btn btn-success" onClick={handleDelete}>
              Yes
            </button>
            <button className="btn btn-error" onClick={closeModal}>
              No
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default BookBuyComplate;
