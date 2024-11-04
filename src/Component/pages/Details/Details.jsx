import { Link, useParams } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../hooks/useAxiosCommon";

const Details = () => {
  const { id } = useParams(); // Get the dynamic user ID from the URL
  const AxiosCommon = useAxiosCommon();

  // Fetch user details using the ID
  const { data: data, isLoading, error } = useQuery({
    queryKey: ["user", id],
    queryFn: async () => {
      const { data } = await AxiosCommon(`/Admition/singledata/${id}`);
      return data;
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading user details</p>;

  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-md rounded-lg">
    <h1 className="text-2xl font-bold mb-4 text-center">User Details</h1>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h2 className="font-semibold text-lg">Name:</h2>
        <p>{data.name}</p>
      </div>
      <div>
        <h2 className="font-semibold text-lg">Bangla Name:</h2>
        <p>{data.banglaName}</p>
      </div>

      <div>
        <h2 className="font-semibold text-lg">Father's Name:</h2>
        <p>{data.fatherName}</p>
      </div>
      <div>
        <h2 className="font-semibold text-lg">Mother's Name:</h2>
        <p>{data.motherName}</p>
      </div>

      <div>
        <h2 className="font-semibold text-lg">Phone:</h2>
        <p>{data.phone}</p>
      </div>
      <div>
        <h2 className="font-semibold text-lg">Guardian Phone:</h2>
        <p>{data.guardianPhone}</p>
      </div>

      <div>
        <h2 className="font-semibold text-lg">Blood Group:</h2>
        <p>{data.bloodGroup}</p>
      </div>

      <div>
        <h2 className="font-semibold text-lg">Present Address:</h2>
        <p>{data.presentAddress}</p>
      </div>

      <div>
        <h2 className="font-semibold text-lg">Post Office:</h2>
        <p>{data.postOffice}</p>
      </div>

      <div>
        <h2 className="font-semibold text-lg">Thana:</h2>
        <p>{data.thana}</p>
      </div>

      <div>
        <h2 className="font-semibold text-lg">District:</h2>
        <p>{data.district}</p>
      </div>

      <div>
        <h2 className="font-semibold text-lg">Country:</h2>
        <p>{data.country}</p>
      </div>

      <div>
        <h2 className="font-semibold text-lg">Permanent Address:</h2>
        <p>{data.permanentAddress}</p>
      </div>

      <div>
        <h2 className="font-semibold text-lg">Permanent Post Office:</h2>
        <p>{data.ppostOffice}</p>
      </div>

      <div>
        <h2 className="font-semibold text-lg">Permanent Thana:</h2>
        <p>{data.tthana}</p>
      </div>

      <div>
        <h2 className="font-semibold text-lg">Permanent District:</h2>
        <p>{data.ddistrict}</p>
      </div>

      <div>
        <h2 className="font-semibold text-lg">Permanent Country:</h2>
        <p>{data.ccountry}</p>
      </div>

      <div>
        <h2 className="font-semibold text-lg">Degree Name:</h2>
        <p>{data.degreeName}</p>
      </div>
      <div>
        <h2 className="font-semibold text-lg">Institute Name:</h2>
        <p>{data.instituteName}</p>
      </div>

      <div>
        <h2 className="font-semibold text-lg">Graduation Year:</h2>
        <p>{data.year}</p>
      </div>

      <div>
        <h2 className="font-semibold text-lg">Result:</h2>
        <p>{data.result}</p>
      </div>

      <div>
        <h2 className="font-semibold text-lg">Higher Degree Name:</h2>
        <p>{data.ddegreeName}</p>
      </div>

      <div>
        <h2 className="font-semibold text-lg">Higher Degree Year:</h2>
        <p>{data.yyear}</p>
      </div>

      <div>
        <h2 className="font-semibold text-lg">Higher Institute Name:</h2>
        <p>{data.iinstituteName}</p>
      </div>

      <div>
        <h2 className="font-semibold text-lg">Course Type:</h2>
        <p>{data.courseType}</p>
      </div>
      <div>
        <h2 className="font-semibold text-lg">Course Name:</h2>
        <p>{data.Corsename}</p>
      </div>
    </div>
        {/* add new slidersimg */}
        <div className="mt-5 mb-24">
        <Link
          to="/dashboard/AdmitionRequest"
          className="inline-flex items-center w-full px-5 py-3 mb-3 mr-1 text-base font-semibold text-white no-underline align-middle bg-custom-bg border border-transparent border-solid rounded-md cursor-pointer select-none sm:mb-0 sm:w-auto hover:bg-orange-900 hover:border-orange-900 hover:text-white focus-within:bg-orange-900 focus-within:border-orange-900"
        >
          Back
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </Link>
     </div>
  </div>
  );
};

export default Details;
