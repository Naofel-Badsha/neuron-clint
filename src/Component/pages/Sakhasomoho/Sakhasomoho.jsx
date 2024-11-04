import { FaPhoneAlt, FaUserNurse } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";

function Sakhasomoho() {
  const AxiosCommon = useAxiosCommon();

  // Fetch for Main Branch
  const {
    data: mainBranch = [],
    isLoading: mainLoading,
    refetch: refetchMain,
  } = useQuery({
    queryKey: ["BranchMain"],
    queryFn: async () => {
      const { data } = await AxiosCommon(`/Branch/main`);
      return data;
    },
  });

  // Fetch for Dhaka Branch
  const {
    data: dhakaBranch = [],
    isLoading: dhakaLoading,
    refetch: refetchDhaka,
  } = useQuery({
    queryKey: ["BranchDhaka"],
    queryFn: async () => {
      const { data } = await AxiosCommon(`/Branch/Dhaka`);
      return data;
    },
  });

  // Fetch for Khulna Branch
  const {
    data: khulnaBranch = [],
    isLoading: khulnaLoading,
    refetch: refetchKhulna,
  } = useQuery({
    queryKey: ["BranchKhulna"],
    queryFn: async () => {
      const { data } = await AxiosCommon(`/Branch/Khulna`);
      return data;
    },
  });

  // Fetch for Rajshahi Branch
  const {
    data: rajshahiBranch = [],
    isLoading: rajshahiLoading,
    refetch: refetchRajshahi,
  } = useQuery({
    queryKey: ["BranchRajshahi"],
    queryFn: async () => {
      const { data } = await AxiosCommon(`/Branch/Rajshahi`);
      return data;
    },
  });

  // Fetch for Barishal Branch
  const {
    data: barishalBranch = [],
    isLoading: barishalLoading,
    refetch: refetchBarishal,
  } = useQuery({
    queryKey: ["BranchBarishal"],
    queryFn: async () => {
      const { data } = await AxiosCommon(`/Branch/Barishal`);
      return data;
    },
  });

  // Fetch for Chattogram Branch
  const {
    data: chattogramBranch = [],
    isLoading: chattogramLoading,
    refetch: refetchChattogram,
  } = useQuery({
    queryKey: ["BranchChattogram"],
    queryFn: async () => {
      const { data } = await AxiosCommon(`/Branch/Chattogram`);
      return data;
    },
  });

  // Fetch for Rangpur Branch
  const {
    data: rangpurBranch = [],
    isLoading: rangpurLoading,
    refetch: refetchRangpur,
  } = useQuery({
    queryKey: ["BranchRangpur"],
    queryFn: async () => {
      const { data } = await AxiosCommon(`/Branch/Rangpur`);
      return data;
    },
  });

  // Fetch for Mymensingh Branch
  const {
    data: mymensinghBranch = [],
    isLoading: mymensinghLoading,
    refetch: refetchMymensingh,
  } = useQuery({
    queryKey: ["BranchMymensingh"],
    queryFn: async () => {
      const { data } = await AxiosCommon(`/Branch/Mymensingh`);
      return data;
    },
  });

  // Fetch for Sylhet Branch
  const {
    data: sylhetBranch = [],
    isLoading: sylhetLoading,
    refetch: refetchSylhet,
  } = useQuery({
    queryKey: ["BranchSylhet"],
    queryFn: async () => {
      const { data } = await AxiosCommon(`/Branch/Sylhet`);
      return data;
    },
  });

  if (
    mainLoading ||
    dhakaLoading ||
    khulnaLoading ||
    rajshahiLoading ||
    barishalLoading ||
    chattogramLoading ||
    rangpurLoading ||
    mymensinghLoading ||
    sylhetLoading
  ) {
    return <p>Loading...</p>;
  }

  return (
    <div className=" max-w-screen-xl mx-auto">
      <h2 className="text-center text-4xl font-bold mb-8 mt-8">
        আমাদের <span className="text-custom-bg">শাখাসমূহ</span>
      </h2>
      {/*==============Heading================*/}
      <div className="pb-10 mt-16">
        <h2 className="text-center text-3xl text-[#333333] font-bold mt-8">
          প্রধান <span className="text-custom-bg">শাখা </span>
        </h2>
        <div className="flex w-16 m-auto">
          <span className="w-8 h-[4px] bg-[#333333]"></span>
          <span className="w-8 h-[4px] bg-custom-bg "></span>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 ">
        {/*---------------Card-----------*/}
        {mainBranch.map((data, idx) => (
          <div
            key={idx}
            className="bg-[#f9ecea] w-full border-[3px] border-gray-200 rounded-2xl p-2 hover:-translate-y-1 duration-300 "
          >
            <div>
              <h2 className="text-2xl text-center text-[#333333] font-bold mt-4 ">
                {data.branchName}
              </h2>
              <div className="flex items-start py-6 px-3">
                <div>
                  <div className="flex items-center">
                    <FaUserNurse className="text-2xl text-[#dd020c]" />
                    <h3 className="text-xl text-[#3c3a3a] py-2 ml-2">
                      পরিচালক: {data.director}
                    </h3>
                  </div>
                  <div className="flex items-center">
                    <FaPhoneAlt className="text-2xl text-[#dd020c]" />
                    <h4 className="text-xl text-[#3c3a3a] py-2 ml-2">
                      {data.phone}
                    </h4>
                  </div>
                  <div className="flex items-center">
                    <FaLocationDot className="text-2xl text-[#dd020c]" />
                    <h4 className="text-xl text-[#3c3a3a] py-2 ml-2">
                      {data.location}
                    </h4>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 py-5">
                <Link to={data?.facebooklink}>
                  {" "}
                  <i className="fa-brands fa-facebook-f flex items-center justify-center w-12 h-12 bg-[#3b5998] text-white hover:text-gray-700 hover:scale-100 duration-150 text-2xl"></i>
                </Link>
                <Link to={data?.instragramlink}>
                  {" "}
                  <i className="fa-brands fa-instagram flex items-center justify-center w-12 h-12 bg-[#d77070] text-white hover:text-gray-700 hover:scale-100 duration-150 text-2xl"></i>
                </Link>
                <Link to={data?.YoutubeLink}>
                  {" "}
                  <i className="fa-brands fa-youtube flex items-center justify-center w-12 h-12 bg-[#c22e2a] text-white hover:text-gray-700 hover:scale-100 duration-150 text-2xl"></i>
                </Link>
                <Link to={data?.locationLink}>
                  {" "}
                  <i className="fa-solid fa-location-dot flex items-center justify-center w-12 h-12 bg-[#c22e2a] text-white hover:text-gray-700 hover:scale-100 duration-150 text-2xl"></i>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/*==============Heading================*/}
      <div className="pb-10 mt-16">
        <h2 className="text-center text-3xl text-[#333333] font-bold mt-8">
        ঢাকা <span className="text-custom-bg">শাখা</span>
        </h2>
        <div className="flex w-16 m-auto">
          <span className="w-8 h-[4px] bg-[#333333]"></span>
          <span className="w-8 h-[4px] bg-custom-bg "></span>
        </div>
      </div>

      {/*-----------Heading-----------*/}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 ">
        {/*---------------Card-----------*/}
        {dhakaBranch.map((data, idx) => (
          <div
            key={idx}
            className="bg-[#f9ecea] w-full border-[3px] border-gray-200 rounded-2xl p-2 hover:-translate-y-1 duration-300 "
          >
            <div>
              <h2 className="text-2xl text-center text-[#333333] font-bold mt-4 ">
                {data.branchName}
              </h2>
              <div className="flex items-start py-6 px-3">
                <div>
                  <div className="flex items-center">
                    <FaUserNurse className="text-2xl text-[#dd020c]" />
                    <h3 className="text-xl text-[#3c3a3a] py-2 ml-2">
                      পরিচালক: {data.director}
                    </h3>
                  </div>
                  <div className="flex items-center">
                    <FaPhoneAlt className="text-2xl text-[#dd020c]" />
                    <h4 className="text-xl text-[#3c3a3a] py-2 ml-2">
                      {data.phone}
                    </h4>
                  </div>
                  <div className="flex items-center">
                    <FaLocationDot className="text-2xl text-[#dd020c]" />
                    <h4 className="text-xl text-[#3c3a3a] py-2 ml-2">
                      {data.location}
                    </h4>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 py-5">
                <Link to={data?.facebooklink}>
                  {" "}
                  <i className="fa-brands fa-facebook-f flex items-center justify-center w-12 h-12 bg-[#3b5998] text-white hover:text-gray-700 hover:scale-100 duration-150 text-2xl"></i>
                </Link>
                <Link to={data?.instragramlink}>
                  {" "}
                  <i className="fa-brands fa-instagram flex items-center justify-center w-12 h-12 bg-[#d77070] text-white hover:text-gray-700 hover:scale-100 duration-150 text-2xl"></i>
                </Link>
                <Link to={data?.YoutubeLink}>
                  {" "}
                  <i className="fa-brands fa-youtube flex items-center justify-center w-12 h-12 bg-[#c22e2a] text-white hover:text-gray-700 hover:scale-100 duration-150 text-2xl"></i>
                </Link>
                <Link to={data?.locationLink}>
                  {" "}
                  <i className="fa-solid fa-location-dot flex items-center justify-center w-12 h-12 bg-[#c22e2a] text-white hover:text-gray-700 hover:scale-100 duration-150 text-2xl"></i>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/*==============Heading================*/}
      <div className="pb-10 mt-16">
        <h2 className="text-center text-3xl text-[#333333] font-bold mt-8">
        খুলনা <span className="text-custom-bg">শাখা</span>
        </h2>
        <div className="flex w-16 m-auto">
          <span className="w-8 h-[4px] bg-[#333333]"></span>
          <span className="w-8 h-[4px] bg-custom-bg "></span>
        </div>
      </div>

      {/*-----------Heading-----------*/}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 ">
        {/*---------------Card-----------*/}
        {khulnaBranch.map((data, idx) => (
          <div
            key={idx}
            className="bg-[#f9ecea] w-full border-[3px] border-gray-200 rounded-2xl p-2 hover:-translate-y-1 duration-300 "
          >
            <div>
              <h2 className="text-2xl text-center text-[#333333] font-bold mt-4 ">
                {data.branchName}
              </h2>
              <div className="flex items-start py-6 px-3">
                <div>
                  <div className="flex items-center">
                    <FaUserNurse className="text-2xl text-[#dd020c]" />
                    <h3 className="text-xl text-[#3c3a3a] py-2 ml-2">
                      পরিচালক: {data.director}
                    </h3>
                  </div>
                  <div className="flex items-center">
                    <FaPhoneAlt className="text-2xl text-[#dd020c]" />
                    <h4 className="text-xl text-[#3c3a3a] py-2 ml-2">
                      {data.phone}
                    </h4>
                  </div>
                  <div className="flex items-center">
                    <FaLocationDot className="text-2xl text-[#dd020c]" />
                    <h4 className="text-xl text-[#3c3a3a] py-2 ml-2">
                      {data.location}
                    </h4>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 py-5">
                <Link to={data?.facebooklink}>
                  {" "}
                  <i className="fa-brands fa-facebook-f flex items-center justify-center w-12 h-12 bg-[#3b5998] text-white hover:text-gray-700 hover:scale-100 duration-150 text-2xl"></i>
                </Link>
                <Link to={data?.instragramlink}>
                  {" "}
                  <i className="fa-brands fa-instagram flex items-center justify-center w-12 h-12 bg-[#d77070] text-white hover:text-gray-700 hover:scale-100 duration-150 text-2xl"></i>
                </Link>
                <Link to={data?.YoutubeLink}>
                  {" "}
                  <i className="fa-brands fa-youtube flex items-center justify-center w-12 h-12 bg-[#c22e2a] text-white hover:text-gray-700 hover:scale-100 duration-150 text-2xl"></i>
                </Link>
                <Link to={data?.locationLink}>
                  {" "}
                  <i className="fa-solid fa-location-dot flex items-center justify-center w-12 h-12 bg-[#c22e2a] text-white hover:text-gray-700 hover:scale-100 duration-150 text-2xl"></i>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/*==============Heading================*/}
      <div className="pb-10 mt-16">
        <h2 className="text-center text-3xl text-[#333333] font-bold mt-8">
        রাজশাহী <span className="text-custom-bg">শাখা</span>
        </h2>
        <div className="flex w-16 m-auto">
          <span className="w-8 h-[4px] bg-[#333333]"></span>
          <span className="w-8 h-[4px] bg-custom-bg "></span>
        </div>
      </div>

      {/*-----------Heading-----------*/}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 ">
        {/*---------------Card-----------*/}
        {rajshahiBranch.map((data, idx) => (
          <div
            key={idx}
            className="bg-[#f9ecea] w-full border-[3px] border-gray-200 rounded-2xl p-2 hover:-translate-y-1 duration-300 "
          >
            <div>
              <h2 className="text-2xl text-center text-[#333333] font-bold mt-4 ">
                {data.branchName}
              </h2>
              <div className="flex items-start py-6 px-3">
                <div>
                  <div className="flex items-center">
                    <FaUserNurse className="text-2xl text-[#dd020c]" />
                    <h3 className="text-xl text-[#3c3a3a] py-2 ml-2">
                      পরিচালক: {data.director}
                    </h3>
                  </div>
                  <div className="flex items-center">
                    <FaPhoneAlt className="text-2xl text-[#dd020c]" />
                    <h4 className="text-xl text-[#3c3a3a] py-2 ml-2">
                      {data.phone}
                    </h4>
                  </div>
                  <div className="flex items-center">
                    <FaLocationDot className="text-2xl text-[#dd020c]" />
                    <h4 className="text-xl text-[#3c3a3a] py-2 ml-2">
                      {data.location}
                    </h4>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 py-5">
                <Link to={data?.facebooklink}>
                  {" "}
                  <i className="fa-brands fa-facebook-f flex items-center justify-center w-12 h-12 bg-[#3b5998] text-white hover:text-gray-700 hover:scale-100 duration-150 text-2xl"></i>
                </Link>
                <Link to={data?.instragramlink}>
                  {" "}
                  <i className="fa-brands fa-instagram flex items-center justify-center w-12 h-12 bg-[#d77070] text-white hover:text-gray-700 hover:scale-100 duration-150 text-2xl"></i>
                </Link>
                <Link to={data?.YoutubeLink}>
                  {" "}
                  <i className="fa-brands fa-youtube flex items-center justify-center w-12 h-12 bg-[#c22e2a] text-white hover:text-gray-700 hover:scale-100 duration-150 text-2xl"></i>
                </Link>
                <Link to={data?.locationLink}>
                  {" "}
                  <i className="fa-solid fa-location-dot flex items-center justify-center w-12 h-12 bg-[#c22e2a] text-white hover:text-gray-700 hover:scale-100 duration-150 text-2xl"></i>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/*==============Heading================*/}
      <div className="pb-10 mt-16">
        <h2 className="text-center text-3xl text-[#333333] font-bold mt-8">
        চট্টগ্রাম <span className="text-custom-bg">শাখা</span>
        </h2>
        <div className="flex w-16 m-auto">
          <span className="w-8 h-[4px] bg-[#333333]"></span>
          <span className="w-8 h-[4px] bg-custom-bg "></span>
        </div>
      </div>

      {/*-----------Heading-----------*/}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 ">
        {/*---------------Card-----------*/}
        {chattogramBranch.map((data, idx) => (
          <div
            key={idx}
            className="bg-[#f9ecea] w-full border-[3px] border-gray-200 rounded-2xl p-2 hover:-translate-y-1 duration-300 "
          >
            <div>
              <h2 className="text-2xl text-center text-[#333333] font-bold mt-4 ">
                {data.branchName}
              </h2>
              <div className="flex items-start py-6 px-3">
                <div>
                  <div className="flex items-center">
                    <FaUserNurse className="text-2xl text-[#dd020c]" />
                    <h3 className="text-xl text-[#3c3a3a] py-2 ml-2">
                      পরিচালক: {data.director}
                    </h3>
                  </div>
                  <div className="flex items-center">
                    <FaPhoneAlt className="text-2xl text-[#dd020c]" />
                    <h4 className="text-xl text-[#3c3a3a] py-2 ml-2">
                      {data.phone}
                    </h4>
                  </div>
                  <div className="flex items-center">
                    <FaLocationDot className="text-2xl text-[#dd020c]" />
                    <h4 className="text-xl text-[#3c3a3a] py-2 ml-2">
                      {data.location}
                    </h4>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 py-5">
                <Link to={data?.facebooklink}>
                  {" "}
                  <i className="fa-brands fa-facebook-f flex items-center justify-center w-12 h-12 bg-[#3b5998] text-white hover:text-gray-700 hover:scale-100 duration-150 text-2xl"></i>
                </Link>
                <Link to={data?.instragramlink}>
                  {" "}
                  <i className="fa-brands fa-instagram flex items-center justify-center w-12 h-12 bg-[#d77070] text-white hover:text-gray-700 hover:scale-100 duration-150 text-2xl"></i>
                </Link>
                <Link to={data?.YoutubeLink}>
                  {" "}
                  <i className="fa-brands fa-youtube flex items-center justify-center w-12 h-12 bg-[#c22e2a] text-white hover:text-gray-700 hover:scale-100 duration-150 text-2xl"></i>
                </Link>
                <Link to={data?.locationLink}>
                  {" "}
                  <i className="fa-solid fa-location-dot flex items-center justify-center w-12 h-12 bg-[#c22e2a] text-white hover:text-gray-700 hover:scale-100 duration-150 text-2xl"></i>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/*==============Heading================*/}
      <div className="pb-10 mt-16">
        <h2 className="text-center text-3xl text-[#333333] font-bold mt-8">
        বরিশাল <span className="text-custom-bg">শাখা</span>
        </h2>
        <div className="flex w-16 m-auto">
          <span className="w-8 h-[4px] bg-[#333333]"></span>
          <span className="w-8 h-[4px] bg-custom-bg "></span>
        </div>
      </div>

      {/*-----------Heading-----------*/}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 ">
        {/*---------------Card-----------*/}
        {barishalBranch.map((data, idx) => (
          <div
            key={idx}
            className="bg-[#f9ecea] w-full border-[3px] border-gray-200 rounded-2xl p-2 hover:-translate-y-1 duration-300 "
          >
            <div>
              <h2 className="text-2xl text-center text-[#333333] font-bold mt-4 ">
                {data.branchName}
              </h2>
              <div className="flex items-start py-6 px-3">
                <div>
                  <div className="flex items-center">
                    <FaUserNurse className="text-2xl text-[#dd020c]" />
                    <h3 className="text-xl text-[#3c3a3a] py-2 ml-2">
                      পরিচালক: {data.director}
                    </h3>
                  </div>
                  <div className="flex items-center">
                    <FaPhoneAlt className="text-2xl text-[#dd020c]" />
                    <h4 className="text-xl text-[#3c3a3a] py-2 ml-2">
                      {data.phone}
                    </h4>
                  </div>
                  <div className="flex items-center">
                    <FaLocationDot className="text-2xl text-[#dd020c]" />
                    <h4 className="text-xl text-[#3c3a3a] py-2 ml-2">
                      {data.location}
                    </h4>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 py-5">
                <Link to={data?.facebooklink}>
                  {" "}
                  <i className="fa-brands fa-facebook-f flex items-center justify-center w-12 h-12 bg-[#3b5998] text-white hover:text-gray-700 hover:scale-100 duration-150 text-2xl"></i>
                </Link>
                <Link to={data?.instragramlink}>
                  {" "}
                  <i className="fa-brands fa-instagram flex items-center justify-center w-12 h-12 bg-[#d77070] text-white hover:text-gray-700 hover:scale-100 duration-150 text-2xl"></i>
                </Link>
                <Link to={data?.YoutubeLink}>
                  {" "}
                  <i className="fa-brands fa-youtube flex items-center justify-center w-12 h-12 bg-[#c22e2a] text-white hover:text-gray-700 hover:scale-100 duration-150 text-2xl"></i>
                </Link>
                <Link to={data?.locationLink}>
                  {" "}
                  <i className="fa-solid fa-location-dot flex items-center justify-center w-12 h-12 bg-[#c22e2a] text-white hover:text-gray-700 hover:scale-100 duration-150 text-2xl"></i>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/*==============Heading================*/}
      <div className="pb-10 mt-16">
        <h2 className="text-center text-3xl text-[#333333] font-bold mt-8">
        সিলেট <span className="text-custom-bg">শাখা</span>
        </h2>
        <div className="flex w-16 m-auto">
          <span className="w-8 h-[4px] bg-[#333333]"></span>
          <span className="w-8 h-[4px] bg-custom-bg "></span>
        </div>
      </div>

      {/*-----------Heading-----------*/}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 ">
        {/*---------------Card-----------*/}
        {sylhetBranch.map((data, idx) => (
          <div
            key={idx}
            className="bg-[#f9ecea] w-full border-[3px] border-gray-200 rounded-2xl p-2 hover:-translate-y-1 duration-300 "
          >
            <div>
              <h2 className="text-2xl text-center text-[#333333] font-bold mt-4 ">
                {data.branchName}
              </h2>
              <div className="flex items-start py-6 px-3">
                <div>
                  <div className="flex items-center">
                    <FaUserNurse className="text-2xl text-[#dd020c]" />
                    <h3 className="text-xl text-[#3c3a3a] py-2 ml-2">
                      পরিচালক: {data.director}
                    </h3>
                  </div>
                  <div className="flex items-center">
                    <FaPhoneAlt className="text-2xl text-[#dd020c]" />
                    <h4 className="text-xl text-[#3c3a3a] py-2 ml-2">
                      {data.phone}
                    </h4>
                  </div>
                  <div className="flex items-center">
                    <FaLocationDot className="text-2xl text-[#dd020c]" />
                    <h4 className="text-xl text-[#3c3a3a] py-2 ml-2">
                      {data.location}
                    </h4>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 py-5">
                <Link to={data?.facebooklink}>
                  {" "}
                  <i className="fa-brands fa-facebook-f flex items-center justify-center w-12 h-12 bg-[#3b5998] text-white hover:text-gray-700 hover:scale-100 duration-150 text-2xl"></i>
                </Link>
                <Link to={data?.instragramlink}>
                  {" "}
                  <i className="fa-brands fa-instagram flex items-center justify-center w-12 h-12 bg-[#d77070] text-white hover:text-gray-700 hover:scale-100 duration-150 text-2xl"></i>
                </Link>
                <Link to={data?.YoutubeLink}>
                  {" "}
                  <i className="fa-brands fa-youtube flex items-center justify-center w-12 h-12 bg-[#c22e2a] text-white hover:text-gray-700 hover:scale-100 duration-150 text-2xl"></i>
                </Link>
                <Link to={data?.locationLink}>
                  {" "}
                  <i className="fa-solid fa-location-dot flex items-center justify-center w-12 h-12 bg-[#c22e2a] text-white hover:text-gray-700 hover:scale-100 duration-150 text-2xl"></i>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/*==============Heading================*/}
      <div className="pb-10 mt-16">
        <h2 className="text-center text-3xl text-[#333333] font-bold mt-8">
        ময়মনসিংহ <span className="text-custom-bg">শাখা</span>
        </h2>
        <div className="flex w-16 m-auto">
          <span className="w-8 h-[4px] bg-[#333333]"></span>
          <span className="w-8 h-[4px] bg-custom-bg "></span>
        </div>
      </div>

      {/*-----------Heading-----------*/}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 ">
        {/*---------------Card-----------*/}
        {mymensinghBranch.map((data, idx) => (
          <div
            key={idx}
            className="bg-[#f9ecea] w-full border-[3px] border-gray-200 rounded-2xl p-2 hover:-translate-y-1 duration-300 "
          >
            <div>
              <h2 className="text-2xl text-center text-[#333333] font-bold mt-4 ">
                {data.branchName}
              </h2>
              <div className="flex items-start py-6 px-3">
                <div>
                  <div className="flex items-center">
                    <FaUserNurse className="text-2xl text-[#dd020c]" />
                    <h3 className="text-xl text-[#3c3a3a] py-2 ml-2">
                      পরিচালক: {data.director}
                    </h3>
                  </div>
                  <div className="flex items-center">
                    <FaPhoneAlt className="text-2xl text-[#dd020c]" />
                    <h4 className="text-xl text-[#3c3a3a] py-2 ml-2">
                      {data.phone}
                    </h4>
                  </div>
                  <div className="flex items-center">
                    <FaLocationDot className="text-2xl text-[#dd020c]" />
                    <h4 className="text-xl text-[#3c3a3a] py-2 ml-2">
                      {data.location}
                    </h4>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 py-5">
                <Link to={data?.facebooklink}>
                  {" "}
                  <i className="fa-brands fa-facebook-f flex items-center justify-center w-12 h-12 bg-[#3b5998] text-white hover:text-gray-700 hover:scale-100 duration-150 text-2xl"></i>
                </Link>
                <Link to={data?.instragramlink}>
                  {" "}
                  <i className="fa-brands fa-instagram flex items-center justify-center w-12 h-12 bg-[#d77070] text-white hover:text-gray-700 hover:scale-100 duration-150 text-2xl"></i>
                </Link>
                <Link to={data?.YoutubeLink}>
                  {" "}
                  <i className="fa-brands fa-youtube flex items-center justify-center w-12 h-12 bg-[#c22e2a] text-white hover:text-gray-700 hover:scale-100 duration-150 text-2xl"></i>
                </Link>
                <Link to={data?.locationLink}>
                  {" "}
                  <i className="fa-solid fa-location-dot flex items-center justify-center w-12 h-12 bg-[#c22e2a] text-white hover:text-gray-700 hover:scale-100 duration-150 text-2xl"></i>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/*==============Heading================*/}
      <div className="pb-10 mt-16">
        <h2 className="text-center text-3xl text-[#333333] font-bold mt-8">
        রংপুর <span className="text-custom-bg">শাখা</span>
        </h2>
        <div className="flex w-16 m-auto">
          <span className="w-8 h-[4px] bg-[#333333]"></span>
          <span className="w-8 h-[4px] bg-custom-bg "></span>
        </div>
      </div>

      {/*-----------Heading-----------*/}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 ">
        {/*---------------Card-----------*/}
        {rangpurBranch.map((data, idx) => (
          <div
            key={idx}
            className="bg-[#f9ecea] w-full border-[3px] border-gray-200 rounded-2xl p-2 hover:-translate-y-1 duration-300 "
          >
            <div>
              <h2 className="text-2xl text-center text-[#333333] font-bold mt-4 ">
                {data.branchName}
              </h2>
              <div className="flex items-start py-6 px-3">
                <div>
                  <div className="flex items-center">
                    <FaUserNurse className="text-2xl text-[#dd020c]" />
                    <h3 className="text-xl text-[#3c3a3a] py-2 ml-2">
                      পরিচালক: {data.director}
                    </h3>
                  </div>
                  <div className="flex items-center">
                    <FaPhoneAlt className="text-2xl text-[#dd020c]" />
                    <h4 className="text-xl text-[#3c3a3a] py-2 ml-2">
                      {data.phone}
                    </h4>
                  </div>
                  <div className="flex items-center">
                    <FaLocationDot className="text-2xl text-[#dd020c]" />
                    <h4 className="text-xl text-[#3c3a3a] py-2 ml-2">
                      {data.location}
                    </h4>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 py-5">
                <Link to={data?.facebooklink}>
                  {" "}
                  <i className="fa-brands fa-facebook-f flex items-center justify-center w-12 h-12 bg-[#3b5998] text-white hover:text-gray-700 hover:scale-100 duration-150 text-2xl"></i>
                </Link>
                <Link to={data?.instragramlink}>
                  {" "}
                  <i className="fa-brands fa-instagram flex items-center justify-center w-12 h-12 bg-[#d77070] text-white hover:text-gray-700 hover:scale-100 duration-150 text-2xl"></i>
                </Link>
                <Link to={data?.YoutubeLink}>
                  {" "}
                  <i className="fa-brands fa-youtube flex items-center justify-center w-12 h-12 bg-[#c22e2a] text-white hover:text-gray-700 hover:scale-100 duration-150 text-2xl"></i>
                </Link>
                <Link to={data?.locationLink}>
                  {" "}
                  <i className="fa-solid fa-location-dot flex items-center justify-center w-12 h-12 bg-[#c22e2a] text-white hover:text-gray-700 hover:scale-100 duration-150 text-2xl"></i>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sakhasomoho;
