import { Link } from "react-router-dom";
import softwaredevelopment from "../assets/software.png";
import digitalmarketing from '../assets/digitalmarketing.png'
import itconsultancy from '../assets/itconsultancy1.jpg'
import edutech from '../assets/edutech.jpg'
export function Services() {
  return (
    <>
      {/* HERO */}
      <div
        className="bg-gradient-to-b from-[#2F3E46] via-[#2f3e46c2] to-[#ffffff]"
        style={{ height: "300px", width: "100%" }}
      >
        <div className="text-white text-4xl font-bold p-10 flex justify-center items-center">
          <h1>Our Services</h1>
        </div>
      </div>

      {/* SERVICES LIST */}
      <div style={{ marginTop: "-150px" }}>

        {/* CARD 1 */}
        <Link to="/itconsultancy" onClick={() => window.scrollTo(0, 0)}>
          <div
            className="flex justify-center items-center w-full px-3 md:px-0"
            style={{ height: "320px" }}
          >
            <div
              style={{ height: "300px", width: "70%" }}
              className="
                flex justify-center items-center
                bg-white shadow-gray-400 shadow-md
                hover:shadow-xl rounded-lg transition-shadow
                w-full md:w-[70%]
                flex-col md:flex-row
                overflow-hidden
                border-1 border-gray-200
              "
            >
              {/* TEXT */}
              <div className="w-full md:w-1/2 p-3 md:p-0">
                <div className=" md:text-3xl font-bold mb-2 md:mb-4 flex justify-center items-center text-center ">
                  <h1>IT CONSULTANCY SERVICES</h1>
                </div>

                <div className="text-gray-600 flex justify-center items-center">
                  <p className="text-center text-sm md:text-base">
                    Our IT consultancy services help businesses choose the right
                    technology solutions for better performance and growth.<span className="hidden md:inline "> We provide
                    expert guidance in cloud, software, and infrastructure planning.
                    Our focus is on delivering scalable, secure, and cost-effective IT strategies.</span>
                  </p>
                </div>
              </div>

              {/* IMAGE */}
              <div className="w-full md:w-1/2">
                <img
                  src={itconsultancy}
                  alt="IT Consultancy"
                  className="w-full h-[180px] md:h-[300px] object-cover md:rounded-r-lg"
                />
              </div>
            </div>
          </div>
        </Link>

        {/* CARD 2 */}
        <Link to="/softwaredevelopment" onClick={() => window.scrollTo(0, 0)}>
          <div
            className="flex justify-center items-center w-full px-3 md:px-0"
            style={{ height: "320px" }}
          >
            <div
              style={{ height: "300px", width: "70%" }}
              className="
                flex justify-center items-center
                bg-white shadow-gray-400 shadow-md
                hover:shadow-xl rounded-lg transition-shadow
                w-full md:w-[70%]
                flex-col md:flex-row
                overflow-hidden
                border-1 border-gray-200
              "
            >
              <div className="w-full md:w-1/2 p-3 md:p-0">
                <div className=" md:text-3xl font-bold mb-2 md:mb-4 flex justify-center items-center text-center">
                  <h1>SOFTWARE DEVELOPMENT</h1>
                </div>

                <div className="text-gray-600 flex justify-center items-center">
                  <p className="text-center text-sm md:text-base">
                    Software development services focus on building reliable, scalable,
                    and high-performance applications tailored to business needs.
                   <span className="hidden md:inline"> We develop custom web and enterprise solutions using modern technologies.
                    Our goal is to deliver secure, efficient, and user-friendly software that supports business growth.</span>
                  </p>
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <img
                  src={softwaredevelopment}
                  alt="Software Development"
                  className="w-full h-[180px] md:h-[300px] object-cover md:rounded-r-lg"
                />
              </div>
            </div>
          </div>
        </Link>

        {/* CARD 3 */}
        <Link to="/edutech" onClick={() => window.scrollTo(0, 0)}>
          <div
            className="flex justify-center items-center w-full px-3 md:px-0"
            style={{ height: "320px" }}
          >
            <div
              style={{ height: "300px", width: "70%" }}
              className="
                flex justify-center items-center
                bg-white shadow-gray-400 shadow-md
                hover:shadow-xl rounded-lg transition-shadow
                w-full md:w-[70%]
                flex-col md:flex-row
                overflow-hidden
                border-1 border-gray-200
              "
            >
              <div className="w-full md:w-1/2 p-3 md:p-0">
                <div className=" md:text-3xl font-bold mb-2 mt-4 md:mb-4 flex justify-center items-center text-center">
                  <h1>EDUTECH PROGRAMS</h1>
                </div>

                <div className="text-gray-600 flex justify-center items-center">
                  <p className="text-center text-sm md:text-base">
                    EdTech programs are designed to provide practical, skill-based learning
                    in emerging technologies like software development, cloud computing,
                    AI, and data science.<span className="hidden md:inline"> We focus on hands-on training, real-time projects,
                    and industry-relevant knowledge. Our goal is to bridge the gap between
                    education and industry requirements, helping learners build strong technical careers.</span>
                  </p>
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <img
                  src={edutech}
                  alt="Edutech"
                  className="w-full h-[180px] md:h-[300px] object-cover md:rounded-r-lg"
                />
              </div>
            </div>
          </div>
        </Link>

        {/* CARD 4 */}
        <Link to="/digitalmarketing" onClick={() => window.scrollTo(0, 0)}>
          <div
            className="flex justify-center items-center w-full px-3 md:px-0"
            style={{ height: "320px" }}
          >
            <div
              style={{ height: "300px", width: "70%" }}
              className="
                flex justify-center items-center
                bg-white shadow-gray-400 shadow-md
                hover:shadow-xl rounded-lg transition-shadow
                w-full md:w-[70%]
                flex-col md:flex-row
                overflow-hidden
                border-1 border-gray-200
              "
            >
              <div className="w-full md:w-1/2 p-3 md:p-0">
                <div className=" md:text-3xl font-bold mb-3 md:mb-4 flex justify-center items-center text-center">
                  <h1>DIGITAL MARKETING</h1>
                </div>

                <div className="text-gray-600 flex justify-center items-center">
                  <p className="text-center text-sm md:text-base">
                    Digital marketing services help businesses improve their online presence
                    and reach the right audience effectively.<span className="hidden md:inline"> We provide SEO, social media
                    marketing, and performance-based campaigns. Our focus is on increasing
                    brand visibility, engagement, and measurable business growth.</span>
                  </p>
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <img
                  src={digitalmarketing}
                  alt="Digital Marketing"
                  className="w-full h-[180px] md:h-[300px] object-cover md:rounded-r-lg"
                />
              </div>
            </div>
          </div>
        </Link>

      </div>
    </>
  );
}