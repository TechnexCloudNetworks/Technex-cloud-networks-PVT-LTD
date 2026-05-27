// ServicesGrid.tsx

import image2 from "../assets/itimage2.png";
import image3 from "../assets/itimage3.png";
import image4 from "../assets/itimage4.png";
import image6 from "../assets/itimage6.png";
import image5 from '../assets/aboutimage1.png'
const cards = [
  {
    id: 1,
    image: image2,
    content:
      "We begin by understanding your business objectives, workforce challenges, project requirements, and long-term goals. Our team collaborates with you to identify the right hiring strategy and build a strong foundation for successful partnership.",
  },
  {
    id: 2,
    image: image3,
    content:
      "We carefully evaluate project scope, technical requirements, resource availability, and skill gaps. This analysis helps us create a structured approach that ensures efficient planning, improved productivity, and better project execution.",
  },
  {
    id: 3,
    image: image4,
    content:
      "Our recruitment team sources highly qualified professionals through a detailed screening and evaluation process. We also ensure smooth onboarding, helping new employees integrate seamlessly into your organization and workflow.",
  },
  {
    id: 4,
    image:
     image5 ,
    content:
      "We provide dependable placement services that align with your business goals and project expectations. In case of changing requirements, we offer quick and efficient replacement support to maintain uninterrupted operations.",
  },
  {
    id: 5,
    image: image6,
    content:
      "We handle payroll management, compliance processes, employee coordination, and ongoing workforce support with efficiency and care. Our goal is to ensure smooth day-to-day operations while allowing your business to focus on growth, productivity, and overall performance.",
  },
];

export function Itcard() {
  return (
    <section className=" bg-[#e9e9e9] px-10 py-12">
      <div className="mx-auto mb-3 md:mb-0 grid max-w-7xl grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">

        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`group relative h-[185px] overflow-hidden rounded-[24px] bg-[#f3f3f3] shadow-sm ${
              index === 4 ? "md:col-span-2 md:mx-auto md:w-[55%]" : ""
            }`}
          >

            {/* MAIN WRAPPER */}
            <div className="relative flex h-full w-full overflow-hidden">

              {/* IMAGE SECTION */}
              <div className="h-full w-[55%] md:w-[50%] overflow-hidden ">
                <img
                  src={card.image}
                  alt="card"
                  className="h-full w-full object-cover hover:transform-3d"
                />
              </div>

              {/* BACKGROUND WHITE SPACE */}
              <div className="h-full w-[45%] md:w-[50%] bg-[#f3f3f3]" />

              {/* MOVING CONTENT (FIXED SAFE AREA) */}
              <div
                className="
                  absolute
                  top-1/2
                  left-[50%]
                  z-20
                  w-[50%]
                  -translate-y-1/2
                  px-5
                  transition-all
                  duration-500
                  ease-in-out
                  group-hover:left-[54%]
                  max-w-full
                  overflow-hidden
                "
              >
                <p className="md:text-[15px] text-[10px] font-semibold leading-[1.5] text-gray-600 break-words">
                  {card.content}
                </p>
              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}