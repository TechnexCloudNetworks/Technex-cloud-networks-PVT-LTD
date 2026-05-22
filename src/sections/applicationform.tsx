import React, { useRef, useState } from "react";

export function Applicationform() {

  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phno: "",
    role: "",
  });

  const [resume, setResume] = useState<File | null>(null);

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");

  // Handle Input Change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle File Change
  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0]);
    }
  };

  // Submit Form
  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    setLoading(true);

    setMessage("");

    try {

      let resumeBase64 = "";

      // Convert Resume To Base64
      if (resume) {

        const reader = new FileReader();

        resumeBase64 = await new Promise((resolve, reject) => {

          reader.readAsDataURL(resume);

          reader.onload = () => {
            resolve(reader.result as string);
          };

          reader.onerror = (error) => {
            reject(error);
          };

        }) as string;
      }

      // Payload
      const payload = {
        ...formData,
        resume: resumeBase64,
        fileName: resume?.name || "",
      };

      // Send Data
      await fetch(
        "https://script.google.com/macros/s/AKfycbyhP5UTgneWt7gUMwd4C8-n-1efTpUO0T4XgXFaMstcpLp8s9Nm4I9WFiz6V54Vqamolg/exec",
        {
          method: "POST",

          mode: "no-cors",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(payload),
        }
      );

      // Success Message
      setMessage(
        "Application Submitted Successfully ✅"
      );

      // Reset Form
      setFormData({
        name: "",
        email: "",
        phno: "",
        role: "",
      });

      // Reset Resume State
      setResume(null);

      // Reset File Input
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

    } catch (error) {

      console.log(error);

      setMessage(
        "Something went wrong ❌"
      );
    }

    setLoading(false);
  };

  return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-200 px-4 py-10">

    {/* OUTER GRADIENT FRAME */}
    <div className="w-full max-w-3xl p-[3px] rounded-3xl bg-gradient-to-r from-[#2F3E46] via-[#3C4F58] to-[#2F3E46] shadow-2xl">

      {/* GLASS LAYER */}
      <div className="p-[3px] rounded-3xl bg-white/80 backdrop-blur-md">

        {/* MAIN CARD */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-inner">

          {/* HEADER */}
          <div className="text-center mb-8">
            <div className="h-1 w-24 bg-[#2F3E46] rounded-full mx-auto mb-4" />

            <h1 className="text-3xl sm:text-4xl font-bold text-[#2F3E46]">
              Application Form
            </h1>

            <p className="text-gray-500 mt-2 text-sm sm:text-base">
              Apply for your desired role by filling this form
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* NAME */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200
                text-gray-800 placeholder-gray-400
                transition-all duration-300
                hover:bg-white hover:border-gray-300
                focus:bg-white focus:border-[#2F3E46]
                focus:ring-4 focus:ring-[#2F3E46]/15
                focus:outline-none shadow-sm"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200
                text-gray-800 placeholder-gray-400
                transition-all duration-300
                hover:bg-white hover:border-gray-300
                focus:bg-white focus:border-[#2F3E46]
                focus:ring-4 focus:ring-[#2F3E46]/15
                focus:outline-none shadow-sm"
              />
            </div>

            {/* PHONE */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Phone Number
              </label>

              <input
                type="text"
                name="phno"
                value={formData.phno}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200
                text-gray-800 placeholder-gray-400
                transition-all duration-300
                hover:bg-white hover:border-gray-300
                focus:bg-white focus:border-[#2F3E46]
                focus:ring-4 focus:ring-[#2F3E46]/15
                focus:outline-none shadow-sm"
              />
            </div>

            {/* ROLE */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Applying Role
              </label>

              <select
                name="role"
                value={formData.role}
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
                <option value="">Select Role</option>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Backend Developer">Backend Developer</option>
                <option value="Full Stack Developer">Full Stack Developer</option>
                <option value="UI/UX Designer">UI/UX Designer</option>
              </select>
            </div>

            {/* RESUME */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Upload Resume
              </label>

              <div className="relative">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-lg file:border-0
                  file:bg-[#2F3E46] file:text-white
                  file:cursor-pointer
                  hover:bg-white hover:border-gray-300
                  focus:outline-none shadow-sm"
                />
              </div>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl font-semibold text-white
              bg-[#2F3E46] hover:bg-[#1f2a30]
              transition-all duration-300 shadow-md active:scale-[0.98]"
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>

            {/* MESSAGE */}
            {message && (
              <p className="text-center text-sm font-medium text-gray-600">
                {message}
              </p>
            )}

          </form>

        </div>
      </div>
    </div>
  </div>
);
}