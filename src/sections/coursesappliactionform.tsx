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
        "https://script.google.com/macros/s/AKfycbzOF-N-lusEKcVt5IVC0Dy9NxgRGwncTqeLMRAxeJH3Ebn2IN3f16YpBXXfdf3QNz78/exec",
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-xl bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center mb-6">
          Course Registration
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />

          {/* Phone */}
          <input
            type="text"
            name="phno"
            placeholder="Phone Number"
            value={formData.phno}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />

          {/* Course */}
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          >
            <option value="">Select Course</option>
            <option value="VLSI">VLSI</option>
            <option value="Embedded Systems">Embedded Systems</option>
            <option value="AWS">AWS</option>
            <option value="Cybersecurity">Cybersecurity</option>
            <option value="Full Stack Development">
              Full Stack Development
            </option>
            <option value="SAP">SAP</option>
          </select>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white p-3 rounded-lg"
          >
            {loading ? "Submitting..." : "Enroll Now"}
          </button>

          {/* Status */}
          {messageStatus && (
            <p className="text-center font-medium">
              {messageStatus}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}