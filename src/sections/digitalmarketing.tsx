import head from "../assets/digital.jpg";
import image from "../assets/digitalimage2.jpg";
import { CountUp } from "../components/countup";
import MarketingCarousel from "../components/digitalcards";
import FlipCard from "../components/flipcard";

export function Digitalmarketing() {
  return (
    <>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `url(${head})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full h-[300px] sm:h-[350px] md:h-[400px]"
      >
        <div className="flex justify-center items-center h-full bg-black/50 px-4">
          <div className="text-center max-w-4xl">
            <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl">
              Digital Marketing
            </h1>

            <p className="text-white mt-4 text-sm sm:text-base md:text-lg leading-relaxed">
              Digital marketing connects businesses with customers through
              online channels like social media, search engines, and websites.
              It drives brand growth by improving reach, engagement, and
              conversions in a measurable way.
            </p>
          </div>
        </div>
      </div>

      {/* Services Strip */}
      <div className="bg-[#2F3E46] text-white py-4 px-3">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-12 text-center font-semibold text-[10px] md:text-sm sm:text-base">
          <div>Graphic Designing</div>
          <div>Search Engine Optimization</div>
          <div>Meta Ads</div>
          <div>Content Creation</div>
        </div>
      </div>

      {/* Heading */}
      <div className="py-8 px-4 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2F3E46] leading-snug">
          Innovating Your Digital World With Us
        </h1>
      </div>

      {/* Journey Banner */}
      <div className="px-4">
        <div
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="w-full h-[250px] sm:h-[320px] md:h-[400px] rounded-2xl flex items-center overflow-hidden"
        >
          <div className="px-5 sm:px-10">
            <h1 className="text-white font-bold text-2xl sm:text-4xl md:text-5xl leading-tight drop-shadow-lg">
              Our Journey,
              <br />
              Vision and Values
            </h1>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="pt-10 overflow-hidden">
        <div className="text-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2F3E46]">
            Our Services
          </h1>
          <span className="text-gray-500">Where ideas turn into impactful digital experiences</span>
        </div>

        <div className="mt-6 overflow-hidden">
          <MarketingCarousel />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full px-4 py-10 overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-8 items-center overflow-hidden">

          {/* Flip Card */}
          <div className="w-full lg:w-[35%] flex justify-center items-center overflow-hidden">
            <div className="w-full max-w-[320px] pl-3 md:pl-0 sm:max-w-[300px] md:max-w-[420px]">
              <FlipCard />
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-[65%] flex flex-col gap-6">

            {/* Count Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-[#2F3E46] rounded-2xl p-6 shadow-md">
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                  <CountUp end={16} />+
                </h1>

                <p className="text-lg md:text-xl font-semibold mt-2 text-white">
                  Team Members
                </p>
              </div>

              <div className="bg-[#2F3E46] rounded-2xl p-6 shadow-md">
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                  <CountUp end={10} />+
                </h1>

                <p className="text-lg md:text-xl font-semibold mt-2 text-white">
                  Customer Success
                </p>
              </div>
            </div>

            {/* Text Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <div className="bg-white shadow-md rounded-2xl p-5 hover:shadow-xl transition duration-300">
                <h2 className="text-lg font-bold text-[#2F3E46] mb-3">
                  Performance Analytics
                </h2>

                <p className="text-sm sm:text-base leading-relaxed text-gray-700">
                  Real-time tracking of campaigns, website traffic insights,
                  conversion tracking, funnel visualization, and custom KPIs
                  based on business goals.
                </p>
              </div>

              <div className="bg-white shadow-md rounded-2xl p-5 hover:shadow-xl transition duration-300">
                <h2 className="text-lg font-bold text-[#2F3E46] mb-3">
                  Social Media Insights
                </h2>

                <p className="text-sm sm:text-base leading-relaxed text-gray-700">
                  Track engagement metrics, audience growth, demographics,
                  platform performance, and content success across social media
                  channels.
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
}