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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-xl bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center mb-6">
          Contact Us
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

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full border p-3 rounded-lg"
          />

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white p-3 rounded-lg"
          >
            {loading ? "Sending..." : "Send Message"}
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