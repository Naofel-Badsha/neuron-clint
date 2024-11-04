import { FaPhoneAlt } from "react-icons/fa";
import { toast } from "react-toastify";

const AdmissionForm = () => {
  const handleSubmitForm = async (event) => {
    event.preventDefault();
    const form = event.target;

    const submitFrom = {
      name: form.name.value,
      banglaName: form.banglaName.value,
      fatherName: form.fatherName.value,
      motherName: form.motherName.value,
      phone: form.phone.value,
      guardianPhone: form.guardianPhone.value,
      bloodGroup: form.bloodGroup.value,
      presentAddress: form.presentAddress.value,
      postOffice: form.postOffice.value,
      thana: form.thana.value,
      district: form.district.value,
      country: form.country.value,
      permanentAddress: form.permanentAddress.value,
      ppostOffice: form.ppostOffice.value,
      tthana: form.tthana.value,
      ddistrict: form.ddistrict.value,
      ccountry: form.ccountry.value,
      degreeName: form.degreeName.value,
      instituteName: form.instituteName.value,
      year: form.year.value,
      result: form.result.value,
      ddegreeName: form.ddegreeName.value,
      yyear: form.yyear.value,
      iinstituteName: form.iinstituteName.value,
      courseType: form.courseType.value,
      Corsename: form.Corsename.value,
    };

    console.log(submitFrom);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/Add/Admition`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submitFrom),
        }
      );

      if (response.ok) {
        toast.success("Requst successfully");
        form.reset(); // Reset the form fields after submission
      } else {
        toast.error("Error Send Requst");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error Send Requst");
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto pop mt-10 px-2">
      <form
        onSubmit={handleSubmitForm}
        className="p-3 border-2 shadow-md rounded-lg" 
      >
        
        <h3 className="font-semibold text-lg md:text-2xl flex gap-2 items-center text-green-900">
          Online Admission Helpline: <FaPhoneAlt className="text-lg" />
          01730577236{" "}
        </h3>

        {/*----------Section---------1--------*/}
        <div className="grid lg:gap-16 md:gap-14 gap-3 lg:grid-cols-2 py-3">
          {/*----------Inpot-----1--------*/}
          <div className="form-control ">
            <label className="label">
              <span className="label-text text-xl">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name..."
              className="input input-bordered bg-slate-50 text-black text-xl"
              required
            />
          </div>
          {/*----------Inpot-----2--------*/}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">সম্পুর্ন নাম (বাংলা)</span>
            </label>
            <input
              type="text"
              name="banglaName"
              placeholder="বাংলাতে নাম লিখুন"
              className="input input-bordered bg-slate-50 text-black text-xl"
              required
            />
          </div>
        </div>

        {/*----------Section---------2--------*/}
        <div className="grid lg:lg:gap-16 md:gap-14  gap-3  md:gap-14  gap-3 lg:grid-cols-2 py-3">
          {/*----------Inpot-----1--------*/}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">Father's Name</span>
            </label>
            <input
              type="text"
              name="fatherName"
              placeholder="Enter your father's name..."
              className="input input-bordered bg-slate-50 text-black text-xl"
              required
            />
          </div>
          {/*----------Inpot-----2--------*/}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">Mother's Name</span>
            </label>
            <input
              type="text"
              name="motherName"
              placeholder="Enter your Mother's Name..."
              className="input input-bordered bg-slate-50 text-black text-xl"
              required
            />
          </div>
        </div>

        {/*----------Section---------3--------*/}
        <div className="grid lg:gap-16 md:gap-14  gap-3   lg:grid-cols-3 py-3">
          {/*----------Inpot-----1--------*/}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">Phone Number *</span>
            </label>
            <input
              type="number"
              name="phone"
              placeholder="Enter your phone number..."
              className="input input-bordered bg-slate-50 text-black text-xl"
              required
            />
          </div>
          {/*----------Inpot-----3--------*/}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">Guardian's Phone *</span>
            </label>
            <input
              type="number"
              name="guardianPhone"
              placeholder="Guardian's Phone..."
              className="input input-bordered bg-slate-50 text-black text-xl"
              required
            />
          </div>
          {/*----------Inpot-----3--------*/}
          <div className="form-control">
            <label className="form-control w-full ">
              <span className="label-text text-xl ">Blood Group</span>
              <select
                name="bloodGroup"
                className="select bg-slate-100 text-xl text-black w-full"
              >
                <option value="a+">A+</option>
                <option value="a-">A-</option>
                <option value="ab+">AB+</option>
                <option value="ab-">AB-</option>
                <option value="b+">B+</option>
                <option value="b-">B-</option>
                <option value="o+">O+</option>
                <option value="o-">O-</option>
              </select>
            </label>
          </div>
        </div>
        <hr></hr>

        {/*----------Section---------4--------*/}
        {/*----------Inpot-----1--------*/}
        <div className="py-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">Present Address</span>
            </label>
            <input
              type="text"
              name="presentAddress"
              placeholder="Enter your phone number..."
              className="input input-bordered bg-slate-50 text-black text-xl"
              required
            />
          </div>
        </div>

        {/*----------Section---------6--------*/}
        <div className="grid lg:gap-16 md:gap-14  gap-3   lg:grid-cols-4 py-3">
          {/*----------Inpot-----1--------*/}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">Post Office</span>
            </label>
            <input
              type="text"
              name="postOffice"
              placeholder=""
              className="input input-bordered bg-slate-50 text-black text-xl"
            />
          </div>
          {/*----------Inpot-----2--------*/}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">Thana</span>
            </label>
            <input
              type="text"
              name="thana"
              placeholder=""
              className="input input-bordered bg-slate-50 text-black text-xl"
            />
          </div>
          {/*----------Inpot-----3--------*/}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">District</span>
            </label>
            <input
              type="text"
              name="district"
              placeholder=""
              className="input input-bordered bg-slate-50 text-black text-xl"
            />
          </div>
          {/*----------Inpot-----4--------*/}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">Country</span>
            </label>
            <input
              type="text"
              name="country"
              placeholder=""
              className="input input-bordered bg-slate-50 text-black text-xl"
            />
          </div>
        </div>
        <hr></hr>

        {/*----------Section---------7--------*/}
        {/*----------Inpot-----1--------*/}
        <div className="py-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">Permanent Address</span>
            </label>
            <input
              type="text"
              name="permanentAddress"
              placeholder="Enter your phone number..."
              className="input input-bordered bg-slate-50 text-black text-xl"
              required
            />
          </div>
        </div>
        {/*----------Section---------8--------*/}
        <div className="grid lg:gap-16 md:gap-14  gap-3   lg:grid-cols-4 py-3">
          {/*----------Inpot-----1--------*/}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">Post Office</span>
            </label>
            <input
              type="text"
              name="ppostOffice"
              placeholder=""
              className="input input-bordered bg-slate-50 text-black text-xl"
            />
          </div>
          {/*----------Inpot-----2--------*/}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">Thana</span>
            </label>
            <input
              type="text"
              name="tthana"
              placeholder=""
              className="input input-bordered bg-slate-50 text-black text-xl"
            />
          </div>
          {/*----------Inpot-----3--------*/}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">District</span>
            </label>
            <input
              type="text"
              name="ddistrict"
              placeholder=""
              className="input input-bordered bg-slate-50 text-black text-xl"
            />
          </div>
          {/*----------Inpot-----4--------*/}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">Country</span>
            </label>
            <input
              type="text"
              name="ccountry"
              placeholder=""
              className="input input-bordered bg-slate-50 text-black text-xl"
            />
          </div>
        </div>
        <hr></hr>

        {/*----------Section---------9--------*/}
        <div className="grid lg:gap-16 md:gap-14  gap-3   lg:grid-cols-4 py-3">
          {/*----------Inpot-----1--------*/}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">Degree Name</span>
            </label>
            <input
              type="text"
              name="degreeName"
              placeholder="SSC Equiv"
              className="input input-bordered bg-slate-50 text-black text-xl"
            />
          </div>
          {/*----------Inpot-----2--------*/}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">Institute Name *</span>
            </label>
            <input
              type="text"
              name="instituteName"
              placeholder="Inter your Inistutename..."
              className="input input-bordered bg-slate-50 text-black text-xl"
            />
          </div>
          {/*----------Inpot-----3--------*/}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">Year *</span>
            </label>
            <input
              type="text"
              name="year"
              placeholder="Passing ye"
              className="input input-bordered bg-slate-50 text-black text-xl"
            />
          </div>
          {/*----------Inpot-----4--------*/}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">Result *</span>
            </label>
            <input
              type="text"
              name="result"
              placeholder="Result GP"
              className="input input-bordered bg-slate-50 text-black text-xl"
            />
          </div>
        </div>

        {/*----------Section---------10--------*/}
        <div className="grid lg:gap-16 md:gap-14  gap-3   lg:grid-cols-4 py-3">
          {/*----------Inpot-----1--------*/}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">Degree Name</span>
            </label>
            <input
              type="text"
              name="ddegreeName"
              placeholder="HSC Equiv"
              className="input input-bordered bg-slate-50 text-black text-xl"
            />
          </div>
          {/*----------Inpot-----2--------*/}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">Institute Name *</span>
            </label>
            <input
              type="text"
              name="iinstituteName"
              placeholder="Inter your Inistutename..."
              className="input input-bordered bg-slate-50 text-black text-xl"
            />
          </div>
          {/*----------Inpot-----3--------*/}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">Year *</span>
            </label>
            <input
              type="text"
              name="yyear"
              placeholder="Passing ye"
              className="input input-bordered bg-slate-50 text-black text-xl"
            />
          </div>
          {/*----------Inpot-----4--------*/}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">Result *</span>
            </label>
            <input
              type="text"
              //   name="rresult"
              placeholder="Result GP"
              className="input input-bordered bg-slate-50 text-black text-xl"
            />
          </div>
        </div>

        <div className="grid lg:gap-16 md:gap-14  gap-3   lg:grid-cols-3 py-3">
          {/*----------Radieo------Section-------*/}
          <div>
            <label className="label">
              <span className="label-text text-xl">
                আপনি কিভাবে কোর্স করতে চান *
              </span>
            </label>

            <div className="flex items-center gap-4 py-2">
              <input
                type="radio"
                name="courseType"
                value="Online"
                className="radio"
                defaultChecked
              />
              <span className="text-xl text-black">Online</span>
            </div>

            <div className="flex items-center gap-4 py-2">
              <input
                type="radio"
                name="courseType"
                value="Offline"
                className="radio"
              />
              <span className="text-xl text-black">Offline</span>
            </div>
          </div>

          {/*----------Inpot-----3--------*/}
          <div className="form-control">
            <label className="form-control w-full">
              <span className="label-text text-xl mt-3"> কোর্স নির্বাচন করুন</span>
              <select
                name="Corsename"
                className="select bg-slate-100 text-xl mt-4 text-black w-full">
                <option
                  value="বিএসসি ইন  নার্সিং">
                  বিএসসি ইন নার্সিং
                </option>
                <option
                  value="ডিপ্লোমা ইন নার্সিং">
                  ডিপ্লোমা ইন নার্সিং
                </option>
                <option
                  value="ডিপ্লোমা ইন মিডওয়াইফারি">
                  ডিপ্লোমা ইন মিডওয়াইফারি
                </option>
              </select>
            </label>
          </div>
        </div>

        {/* <input type="submit" value="submit" /> */}
        <div className="mt-4 flex justify-center">
          <button className=" btn text-xl text-white   hover:bg-slate-300  hover:text-black bg-custom-bg w-1/3">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdmissionForm;
