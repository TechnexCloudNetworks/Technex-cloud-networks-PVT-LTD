import React, { useState } from "react";

export function Contactus() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phno: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [messageStatus, setMessageStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
        message: formData.message,
      };

      await fetch(
        "https://script.google.com/macros/s/AKfycbyfVcyK-JwI_ngV1K-ehri8tc34hQ_RpH8vqRJK5POXdu6coOBLuGvULLx7TBo8zIiSng/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify(payload),
        }
      );

      setMessageStatus("Message sent successfully ✅");

      setFormData({
        name: "",
        email: "",
        phno: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      setMessageStatus("Something went wrong ❌");
    }

    setLoading(false);
  };

return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-200 px-4 py-10">

    {/* OUTER GLOW BORDER */}
    <div className="w-full max-w-2xl p-[3px] rounded-3xl bg-gradient-to-r from-[#2F3E46] via-[#3C4F58] to-[#2F3E46] shadow-2xl">

      {/* SECOND BORDER LAYER */}
      <div className="p-[3px] rounded-3xl bg-white/80 backdrop-blur-md">

        {/* INNER CARD */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-inner">

          {/* TOP ACCENT LINE */}
          <div className="h-1 w-20 bg-[#2F3E46] rounded-full mx-auto mb-6" />

          {/* HEADER */}
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#2F3E46] mb-2">
            Contact Us
          </h2>

          <p className="text-center text-gray-500 mb-8 text-sm sm:text-base">
            We’d love to hear from you. Fill the form below.
          </p>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 
              focus:outline-none focus:ring-2 focus:ring-[#2F3E46] 
              shadow-sm transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 
              focus:outline-none focus:ring-2 focus:ring-[#2F3E46] 
              shadow-sm transition"
            />

            <input
              type="text"
              name="phno"
              placeholder="Phone Number"
              value={formData.phno}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 
              focus:outline-none focus:ring-2 focus:ring-[#2F3E46] 
              shadow-sm transition"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 
              focus:outline-none focus:ring-2 focus:ring-[#2F3E46] 
              shadow-sm transition resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl font-semibold text-white 
              bg-[#2F3E46] hover:bg-[#1f2a30] 
              transition-all duration-300 shadow-md active:scale-[0.98]"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

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