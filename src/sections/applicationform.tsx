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

    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-8">

        <h1 className="text-3xl font-bold text-center mb-8">
          Application Form
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          {/* Name */}
          <div>

            <label className="block mb-2 font-medium">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-black"
            />

          </div>

          {/* Email */}
          <div>

            <label className="block mb-2 font-medium">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-black"
            />

          </div>

          {/* Phone */}
          <div>

            <label className="block mb-2 font-medium">
              Phone Number
            </label>

            <input
              type="text"
              name="phno"
              value={formData.phno}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-black"
            />

          </div>

          {/* Role */}
          <div>

            <label className="block mb-2 font-medium">
              Applying Role
            </label>

            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-black"
            >

              <option value="">
                Select Role
              </option>

              <option value="Frontend Developer">
                Frontend Developer
              </option>

              <option value="Backend Developer">
                Backend Developer
              </option>

              <option value="Full Stack Developer">
                Full Stack Developer
              </option>

              <option value="UI/UX Designer">
                UI/UX Designer
              </option>

            </select>

          </div>

          {/* Resume Upload */}
          <div>

            <label className="block mb-2 font-medium">
              Upload Resume
            </label>

            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-black"
            />

          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-3 rounded-lg hover:opacity-90 transition"
          >

            {loading
              ? "Submitting..."
              : "Submit Application"}

          </button>

          {/* Message */}
          {message && (

            <p className="text-center font-medium pt-3">
              {message}
            </p>

          )}

        </form>

      </div>

    </div>
  );
}