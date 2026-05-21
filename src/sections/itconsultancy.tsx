import image from "../assets/itconsultancy.png";
import image1 from "../assets/itimage1.png";
import { Itcard } from "../components/itcards";
import { Process } from "../components/process";

export function Itconsultanvcy() {
  return (
    <>
      {/* ================= HERO ================= */}
      <div
        style={{
          backgroundImage: `url(${image})`,
          width: "100%",
          height: "400px",
        }}
      >
        <div className="w-full flex items-center h-full bg-gradient-to-r from-[#2f3e46d2] via-[#2f3e4620] to-transparent text-white px-6 md:px-20">

          <div>
            <div className="text-3xl md:text-6xl text-white font-bold py-2">
              <h1>IT Consultancy</h1>
            </div>

            <div className="text-lg md:text-2xl font-semibold">
              <h2>
                Transforming your business with smart <br className="hidden md:block" />
                technology solutions
              </h2>
            </div>

            <div className="text-sm md:text-[15px] py-2">
              <p>
                We help Organization improve performance, reduces costs, and <br className="hidden md:block" />
                achieve growth through innovative it strategies and expert <br className="hidden md:block" />
                consulting.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ================= WHO WE ARE ================= */}
      <div
        className="flex flex-col md:flex-row bg-[#DEDEDE]"
        style={{ width: "100%" }}
      >
        {/* IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center items-center py-6 md:py-0">
          <img
            src={image1}
            className="w-[90%] md:w-[85%] h-auto md:h-[85%] rounded-2xl"
          />
        </div>

        {/* TEXT */}
        <div className="w-full md:w-1/2 flex justify-center items-center px-6 md:px-0 py-6 md:py-0">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold py-3 text-[#2F3E46] text-center md:text-left">
              Who We Are
            </h1>

            <p className="text-lg md:text-2xl md:pr-15 text-center md:text-left">
              Technex Cloud Networks is a trusted IT consulting partner with
              years of experience in delivering high-quality solutions. Our team
              works closely with clients to understand their challenges and
              provide customized strategies that drive real business results.
            </p>
          </div>
        </div>
      </div>

      {/* ================= PROCESS ================= */}
      <div className="my-6 md:my-4">
        <div className="flex justify-center text-2xl md:text-4xl font-bold py-4 text-[#2F3E46]">
          <h1>OUR PROCESS</h1>
        </div>

        <div>
          <Process />
        </div>
      </div>

      {/* ================= CARDS ================= */}
      <div>
        <Itcard />
      </div>
    </>
  );
}