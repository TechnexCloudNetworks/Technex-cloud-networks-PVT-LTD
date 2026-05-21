import build from "../assets/ofcimage3.webp";
import image2 from "../assets/about1.png";
import image3 from "../assets/about2.png";
import about from '../assets/about.png'
export function About() {
  return (
    <>
      <div>

        {/* HERO SECTION */}
        <div
          style={{
            backgroundImage: `url(${build})`,
            width: "100%",
            height: "400px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="flex items-center justify-center"
        >
          <div className="bg-[#2f3e4695] h-full flex justify-center items-center w-full px-4">

            <div>

              <h1 className="text-3xl md:text-5xl text-white font-bold text-center">
                About Us
              </h1>

              <div className="flex justify-center items-center">
                <div className="w-full md:w-2/3 text-center mt-4 md:mt-5 text-white text-sm md:text-[20px] font-semibold px-2 md:px-0">
                  <p>
                    At TechNex Cloud Networks, we empower individuals with industry-ready skills in cloud computing, cybersecurity, AI, and modern software technologies through practical, hands-on learning that bridges the gap between education and real-world industry needs.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* VISION & MISSION */}
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 px-4 md:px-6 py-6 md:py-10">

          {/* Vision */}
          <div className="w-full md:w-[600px] bg-white shadow-lg rounded-3xl p-5 md:p-8 hover:bg-[#2F3B43] group transition-all duration-500 cursor-pointer border-y-1">
            <h1 className="text-2xl md:text-3xl font-bold text-black group-hover:text-white text-center">
              Our Vision
            </h1>
            <p className="text-sm md:text-[20px] text-gray-700 group-hover:text-white text-center mt-3 md:mt-5">
              To become a globally recognized technology training institute
              that empowers students with practical skills, innovation mindset,
              and industry-relevant knowledge for future-ready careers.
            </p>
          </div>

          {/* Mission */}
          <div className="w-full md:w-[600px] bg-white shadow-lg rounded-3xl p-5 md:p-8 hover:bg-[#2F3B43] group transition-all duration-500 cursor-pointer border-y-1">
            <h1 className="text-2xl md:text-3xl font-bold text-black group-hover:text-white text-center">
              Our Mission
            </h1>
            <p className="text-sm md:text-[20px] text-gray-700 group-hover:text-white text-center mt-3 md:mt-5">
              To provide high-quality technical education through practical
              training, live projects, mentorship, and career guidance that
              enables students to become skilled professionals in the IT
              industry.
            </p>
          </div>
        </div>

        {/* WHY CHOOSE SECTION */}
        <div>

          <h1 className="text-3xl md:text-5xl text-black font-bold flex justify-center items-center py-4 md:py-5 text-center">
            Why Choose TechNex ?
          </h1>

          <div className="flex flex-col gap-6 md:gap-10 px-4 md:px-10 py-6 md:py-10">

            {/* CARD 1 */}
            <div className="flex flex-col md:flex-row bg-white shadow-xl rounded-3xl overflow-hidden md:border-y-3 md:border-gray-400 border-y-2">

              <div className="md:w-1/2 h-[220px] md:h-[350px]">
                <img
                  src={about}
                  className="w-full h-full object-cover"
                  alt="Innovation"
                />
              </div>

              <div className="md:w-1/2 flex items-center p-5 md:p-8">
                <div>
                  <h1 className="text-xl md:text-3xl font-bold mb-3 md:mb-4">
                    Innovation, Security & Performance
                  </h1>
                  <p className="text-sm md:text-[18px] text-gray-700 leading-relaxed">
                    We deliver future-ready technology solutions combining
                    innovation, strong security, and high performance.
                    Our expertise includes cloud computing, enterprise
                    applications, and scalable IT infrastructure designed for
                    modern business needs.We ensure reliable systems that improve productivity,
                    efficiency, and long-term digital transformation success
                    for organizations.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="flex flex-col md:flex-row bg-white shadow-xl rounded-3xl overflow-hidden md:border-y-3 md:border-gray-400 border-y-2">

              <div className="md:w-1/2 flex items-center p-5 md:p-8">
                <div>
                  <h1 className="text-xl md:text-3xl font-bold mb-3 md:mb-4">
                    Career Support & Guidance
                  </h1>
                  <p className="text-sm md:text-[18px] text-gray-700 leading-relaxed">
                    We provide complete career support including training,
                    mentorship, resume building, and interview preparation to
                    help students achieve their dream jobs in the IT industry.
                    Our goal is to ensure every learner becomes industry-ready
                    with strong technical and communication skills.
                  </p>
                </div>
              </div>

              <div className="md:w-1/2 h-[220px] md:h-[350px]">
                <img
                  src={image2}
                  className="w-full h-full object-cover"
                  alt="Career Support"
                />
              </div>
            </div>

            {/* CARD 3 */}
            <div className="flex flex-col md:flex-row bg-white shadow-xl rounded-3xl overflow-hidden md:border-y-3 md:border-gray-400 border-y-2">

              <div className="md:w-1/2 h-[220px] md:h-[350px]">
                <img
                  src={image3}
                  className="w-full h-full object-cover"
                  alt="Hands On"
                />
              </div>

              <div className="md:w-1/2 flex items-center p-5 md:p-8">
                <div>
                  <h1 className="text-xl md:text-3xl font-bold mb-3 md:mb-4">
                    Hands-On Experience
                  </h1>
                  <p className="text-sm md:text-[18px] text-gray-700 leading-relaxed">
                    We focus on real-world project development, ensuring
                    students gain practical experience in cloud platforms,
                    software development, and IT solutions.This approach helps build strong problem-solving skills,
                    technical confidence, and industry-level expertise through
                    live project exposure.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
}