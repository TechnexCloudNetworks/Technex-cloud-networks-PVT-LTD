import React, { useState } from "react";

export function CoursesForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phno: "",
    course: "",
  });

  const [loading, setLoading] = useState(false);
  const [messageStatus, setMessageStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessageStatus("");

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phno: formData.phno,
        course: formData.course,
      };

      await fetch(
        "https://script.google.com/macros/s/AKfycbzUi5PED_BXYfdxqk_nNnkCMa4hVTGysqFcYvJDR5Kb-n_c-MbL3_aUY9sDfZn64eug/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify(payload),
        }
      );

      setMessageStatus("Course submitted successfully ✅");

      setFormData({
        name: "",
        email: "",
        phno: "",
        course: "",
      });
    } catch (error) {
      console.log(error);
      setMessageStatus("Something went wrong ❌");
    }

    setLoading(false);
  };

  return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-200 px-4 py-10">

    {/* OUTER GRADIENT BORDER */}
    <div className="w-full max-w-2xl p-[3px] rounded-3xl bg-gradient-to-r from-[#2F3E46] via-[#3C4F58] to-[#2F3E46] shadow-2xl">

      {/* GLASS LAYER */}
      <div className="p-[3px] rounded-3xl bg-white/80 backdrop-blur-md">

        {/* MAIN CARD */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-inner">

          {/* HEADER */}
          <div className="text-center mb-8">

            <div className="h-1 w-24 bg-[#2F3E46] rounded-full mx-auto mb-4" />

            <h2 className="text-3xl sm:text-4xl font-bold text-[#2F3E46]">
              Course Registration
            </h2>

            <p className="text-gray-500 mt-2 text-sm sm:text-base">
              Choose your course and start learning today
            </p>

          </div>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* NAME */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200
              text-gray-800 placeholder-gray-400
              transition-all duration-300
              hover:bg-white hover:border-gray-300
              focus:bg-white focus:border-[#2F3E46]
              focus:ring-4 focus:ring-[#2F3E46]/15
              focus:outline-none shadow-sm"
            />

            {/* EMAIL */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200
              text-gray-800 placeholder-gray-400
              transition-all duration-300
              hover:bg-white hover:border-gray-300
              focus:bg-white focus:border-[#2F3E46]
              focus:ring-4 focus:ring-[#2F3E46]/15
              focus:outline-none shadow-sm"
            />

            {/* PHONE */}
            <input
              type="text"
              name="phno"
              placeholder="Phone Number"
              value={formData.phno}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200
              text-gray-800 placeholder-gray-400
              transition-all duration-300
              hover:bg-white hover:border-gray-300
              focus:bg-white focus:border-[#2F3E46]
              focus:ring-4 focus:ring-[#2F3E46]/15
              focus:outline-none shadow-sm"
            />

            {/* COURSE DROPDOWN */}
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200
              text-gray-800
              transition-all duration-300
              hover:bg-white hover:border-gray-300
              focus:bg-white focus:border-[#2F3E46]
              focus:ring-4 focus:ring-[#2F3E46]/15
              focus:outline-none shadow-sm"
            >
              <option value="">Select Course</option>
              <option value="Data Science">Data Science</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Fullstack Development">Fullstack Development</option>
              <option value="Cybersecurity">Cybersecurity</option>
              <option value="AI/ML">AI/ML</option>
              <option value="UI/UX Designing">UI/UX Designing</option>
              <option value="VLSI">VLSI</option>
              <option value="Embedded Systems">Embedded Systems</option>
            </select>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl font-semibold text-white
              bg-[#2F3E46] hover:bg-[#1f2a30]
              transition-all duration-300 shadow-md active:scale-[0.98]"
            >
              {loading ? "Submitting..." : "Enroll Now"}
            </button>

            {/* STATUS */}
            {messageStatus && (
              <p className="text-center text-sm font-medium text-gray-600">
                {messageStatus}
              </p>
            )}

          </form>

        </div>
      </div>
    </div>
  </div>
);
}