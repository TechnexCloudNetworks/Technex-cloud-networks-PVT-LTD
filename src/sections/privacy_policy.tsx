

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#F5F7FA] py-10 md:py-16 px-4 md:px-20">

      {/* HEADER */}
      <div className="text-center mb-10 md:mb-14">
        <h1 className="text-3xl md:text-6xl font-bold text-[#1A2D37]">
          Privacy Policy
        </h1>
        <p className="text-gray-600 mt-3 md:mt-5 text-sm md:text-lg">
          TechNex Cloud Networks Pvt Ltd
        </p>
      </div>

      {/* MAIN CARD */}
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl p-5 md:p-14">

        {/* SECTION 1 */}
        <section className="mb-8 md:mb-12">
          <h2 className="text-xl md:text-3xl font-bold text-[#1A2D37] mb-3 md:mb-5">
            1. Introduction
          </h2>

          <p className="text-gray-700 leading-[30px] md:leading-[35px] text-[15px] md:text-[17px]">
            Welcome to TechNex Cloud Networks. We are committed to protecting
            your privacy and personal data. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your information when you
            visit our website and use our services.
          </p>
        </section>

        {/* SECTION 2 */}
        <section className="mb-8 md:mb-12">
          <h2 className="text-xl md:text-3xl font-bold text-[#1A2D37] mb-3 md:mb-5">
            2. Information We Collect
          </h2>

          <div className="space-y-6 md:space-y-8">

            {/* Personal Info */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-[#1A2D37] mb-2 md:mb-3">
                Personal Information
              </h3>

              <ul className="list-disc ml-6 text-gray-700 leading-[28px] md:leading-[35px] text-[14px] md:text-[17px]">
                <li>Full Name</li>
                <li>Email Address</li>
                <li>Phone Number</li>
                <li>Educational Information</li>
                <li>Payment Information</li>
              </ul>
            </div>

            {/* Usage Info */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-[#1A2D37] mb-2 md:mb-3">
                Usage Information
              </h3>

              <ul className="list-disc ml-6 text-gray-700 leading-[28px] md:leading-[35px] text-[14px] md:text-[17px]">
                <li>IP Address</li>
                <li>Browser Type</li>
                <li>Pages Visited</li>
                <li>Session Duration</li>
                <li>Device Information</li>
              </ul>
            </div>

          </div>
        </section>

        {/* SECTION 3 */}
        <section className="mb-8 md:mb-12">
          <h2 className="text-xl md:text-3xl font-bold text-[#1A2D37] mb-3 md:mb-5">
            3. How We Use Your Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                Service Management
              </h3>
              <p className="text-gray-700 leading-[28px] md:leading-[32px] text-[14px] md:text-[17px]">
                We use your information to provide services, manage accounts,
                and process enrollments.
              </p>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                Communication
              </h3>
              <p className="text-gray-700 leading-[28px] md:leading-[32px] text-[14px] md:text-[17px]">
                We may contact you for updates, support, and notifications.
              </p>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                Analytics
              </h3>
              <p className="text-gray-700 leading-[28px] md:leading-[32px] text-[14px] md:text-[17px]">
                We analyze usage to improve website performance and user experience.
              </p>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                Security
              </h3>
              <p className="text-gray-700 leading-[28px] md:leading-[32px] text-[14px] md:text-[17px]">
                We protect systems from fraud and unauthorized access.
              </p>
            </div>

          </div>
        </section>

        {/* SECTION 4 */}
        <section className="mb-8 md:mb-12">
          <h2 className="text-xl md:text-3xl font-bold text-[#1A2D37] mb-3 md:mb-5">
            4. Disclosure of Information
          </h2>

          <p className="text-gray-700 leading-[30px] md:leading-[35px] text-[15px] md:text-[17px]">
            We do not sell personal data. We may share it with service providers,
            legal authorities, or during business transfers when required.
          </p>

          <ul className="list-disc ml-6 mt-4 md:mt-5 text-gray-700 leading-[28px] md:leading-[35px] text-[14px] md:text-[17px]">
            <li>Third-party service providers</li>
            <li>Cloud hosting partners</li>
            <li>Payment gateways</li>
            <li>Legal authorities</li>
            <li>Business mergers or acquisitions</li>
          </ul>
        </section>

        {/* SECTION 5 */}
        <section className="mb-8 md:mb-12">
          <h2 className="text-xl md:text-3xl font-bold text-[#1A2D37] mb-3 md:mb-5">
            5. Data Security
          </h2>

          <p className="text-gray-700 leading-[30px] md:leading-[35px] text-[15px] md:text-[17px]">
            We use industry-standard security measures to protect your data.
            However, no system is 100% secure.
          </p>
        </section>

        {/* SECTION 6 */}
        <section className="mb-8 md:mb-12">
          <h2 className="text-xl md:text-3xl font-bold text-[#1A2D37] mb-3 md:mb-5">
            6. Your Rights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 text-gray-700 text-[14px] md:text-[17px]">
            <p>✔ Access & Update Information</p>
            <p>✔ Request Data Deletion</p>
            <p>✔ Restrict Processing</p>
            <p>✔ Withdraw Consent</p>
          </div>
        </section>

        {/* SECTION 7 */}
        <section className="mb-8 md:mb-12">
          <h2 className="text-xl md:text-3xl font-bold text-[#1A2D37] mb-3 md:mb-5">
            7. Policy Updates
          </h2>

          <p className="text-gray-700 leading-[30px] md:leading-[35px] text-[15px] md:text-[17px]">
            We may update this Privacy Policy from time to time. Changes will be
            posted on this page.
          </p>
        </section>

        {/* CONTACT */}
        <section>
          <div className="bg-[#2F3E46] text-white p-6 md:p-10 rounded-3xl shadow-2xl">

            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-5">
              Contact Us
            </h2>

            <div className="space-y-2 md:space-y-3 text-gray-200 text-sm md:text-lg">
              <p>tcncontactinfo@gmail.com</p>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}