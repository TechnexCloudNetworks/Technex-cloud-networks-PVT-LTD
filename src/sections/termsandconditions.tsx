

const content = [
  {
    title: "1. Acceptance of Terms",
    description:
      "By accessing and using the TechNex Cloud Networks website (technexcloudnetworks.in) and its services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services.",
  },
  {
    title: "2. Services Offered",
    description:
      "TechNex Cloud Networks provides online courses, training programs, internship opportunities, and placement guidance in various technology domains. While we strive for accuracy, we do not guarantee the completeness or suitability of the information and materials found on this website for any particular purpose.",
  },
  {
    title: "3. User Accounts",
    description:
      "To access certain features of our services, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.",
  },
  {
    title: "4. Payments and Refunds",
    description:
      "All fees for courses and services are clearly stated on our website. Payments are processed securely through third-party payment gateways. Our refund policy is outlined separately on our website.",
  },
  {
    title: "5. Intellectual Property",
    description:
      "All content on this website, including text, graphics, logos, images, and course materials, is the property of TechNex Cloud Networks or its content suppliers and is protected by intellectual property laws.",
  },
  {
    title: "7. Governing Law",
    description:
      "These Terms and Conditions shall be governed by and construed in accordance with the laws of Hyderabad, Telangana, India.",
  },
  {
    title: "8. Changes to Terms",
    description:
      "We reserve the right to modify these Terms and Conditions at any time. Significant changes will be posted on our website.",
  },
  {
    title: "9. Contact Information",
    description:
      "If you have any questions about these Terms and Conditions, please contact us via email or our website.",
  },
];

export function Terms() {
  return (
    <div className="min-h-screen bg-[#F5F7FA] py-10 md:py-16 px-4 md:px-20">

      {/* HEADER */}
      <div className="text-center mb-10 md:mb-14">
        <h1 className="text-3xl md:text-6xl font-bold text-[#1A2D37]">
          Terms & Conditions
        </h1>
        <p className="text-gray-600 mt-3 md:mt-5 text-sm md:text-lg">
          TechNex Cloud Networks Pvt Ltd
        </p>
      </div>

      {/* MAIN CARD */}
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl p-5 md:p-14">

        {/* TERMS SECTIONS */}
        <div className="space-y-8 md:space-y-10">

          {content.map((item, index) => (
            <section key={index}>
              
              <h2 className="text-xl md:text-3xl font-bold text-[#1A2D37] mb-3 md:mb-4">
                {item.title}
              </h2>

              <div className="bg-white">
                <p className="text-gray-700 leading-[30px] md:leading-[34px] text-[15px] md:text-[17px]">
                  {item.description}
                </p>
              </div>

            </section>
          ))}

          {/* CONTACT SECTION */}
          <section className="pt-4 md:pt-6">
            <div className="bg-[#2F3E46] text-white p-6 md:p-10 rounded-3xl shadow-2xl">

              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-5">
                Contact Information
              </h2>

              <div className="space-y-2 md:space-y-3 text-gray-200 text-sm md:text-lg">

                <p>tcncontactinfo@gmail.com</p>

              </div>

            </div>
          </section>

        </div>
      </div>
    </div>
  );
}