import { Link } from "react-router-dom";
import image from "../assets/careerimage.png";
import Accordion from "../components/JobsAccordion";
import CareerFAQAccordion from "../components/FaqAccordion";

export function Career() {
  return (
    <>
      <div>

        {/* ================= HERO SECTION ================= */}
        <div
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "400px",
            width: "100%",
          }}
        >
          <div className="bg-[#000000a0] hover:bg-[#00000090] h-full w-full">

            {/* TITLE */}
            <div className="flex justify-center items-center py-10 md:py-20">
              <h1 className="text-2xl md:text-4xl font-bold text-white">
                TCN CAREERS
              </h1>
            </div>

            {/* SUB TITLE */}
            <div className="flex justify-start w-full">
              <div className="ml-4 md:ml-20 text-white text-2xl md:text-4xl font-bold">
                <h2>
                  Endless Opportunities <br /> Start Here
                </h2>
              </div>
            </div>

            {/* ARROW */}
            <div className="group flex items-center cursor-pointer mt-3">
              <span className="ml-4 md:ml-20 text-white text-3xl md:text-4xl transition-transform duration-300 group-hover:translate-x-10">
                ➜
              </span>
            </div>

            {/* BUTTON */}
            <div className="flex justify-center items-center w-full mt-6 md:mt-0">
              <Link to="/jobs">
                <button className="bg-[#24c0c5a1] text-white rounded-lg hover:bg-[#1b4242d9] transition-colors font-bold px-6 md:px-10 py-2 md:py-3 text-lg md:text-2xl">
                  Search Jobs
                </button>
              </Link>
            </div>

          </div>
        </div>

        {/* ================= CONTENT SECTION ================= */}
        <div>

          <div
            className="
              items-center
              mx-4 md:mx-30
              mt-10 md:mt-[50px]
            "
          >
            <h1 className="text-2xl md:text-4xl font-bold flex justify-center text-center">
              CAREER OPPORTUNITIES
            </h1>

            <p className="text-sm md:text-lg text-gray-700 py-3 text-justify md:text-left">
              TechNex Cloud Networks Pvt Ltd delivers innovative IT solutions,
              cloud services, and software development that help businesses grow
              in the digital era. We focus on building scalable, secure, and
              high-performance applications using modern technologies like web
              development, cloud computing, and AI. Our mission is to empower
              clients with reliable and future-ready digital solutions that
              drive success and transformation.
            </p>
          </div>

          {/* ACCORDION */}
          <div className="py-6 px-2 md:px-0">
            <Accordion />
          </div>

        </div>
      </div>

      {/* ================= FAQ SECTION ================= */}
      <div className="bg-[#F2F2F2] mt-7">

        <div className="text-2xl md:text-4xl font-bold flex justify-center items-center py-6 md:py-10 px-4 text-center">
          <h1>Frequently Asked Questions</h1>
        </div>

        <div className="px-2 md:px-0 ">
          <CareerFAQAccordion />
        </div>

      </div>
    </>
  );
}