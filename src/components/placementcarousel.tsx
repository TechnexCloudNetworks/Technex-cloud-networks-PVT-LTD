import { useEffect, useState } from "react";

type Placement = {
  name: string;
  role: string;
  company: string;
  image: string;
  salary:string
};

import p1 from "../assets/Shivani.png";
import p2 from "../assets/bongonivinay.png";
import p3 from "../assets/niharika.png";
import p4 from "../assets/manideep.png";
import p5 from '../assets/Nithya.jpeg'
import p6 from '../assets/Sreelekha.png'
import p7 from '../assets/Y_Deepanwitha.png'
import p8 from '../assets/bhaskar.png'
const placements: Placement[] = [
   {
    name: "Bongoni Vinay",
    role: "Software Developer",
    company: "TECK BRICKS India PVT LTD",
    image: p2,
     salary:'6LPA'
  },
  {
    name: "K.Shivani",
    role: "Software Engineer",
    company: "TCS",
    image: p1,
     salary:'8LPA'
  },
  {
    name: "Chetharaju Niharika",
    role: "AI/ML Specialist",
    company: "Draftech",
    image: p3,
     salary:'7.5LPA'
  },
  {
    name: "E.Manideep",
    role: "Frontend Developer",
    company: "Edvenswa Tech Private Limited",
    image: p4,
    salary:'4LPA'
  },
  {
    name: "Sree Lekha",
    role: "Quality Testing",
    company: "DSR EV Mobility Pvt ltd",
    image: p5,
    salary:'4LPA'
  },
  {
    name: "Nithya",
    role: "Research and Development",
    company: "DSR EV Mobility Pvt ltd",
    image: p6,
    salary:'4LPA'
  },
   {
    name: "Y. Deepanwitha",
    role: "Business Development Executive",
    company: "Gemsheild Pvt ltd",
    image: p7,
    salary:'3.5LPA'
  },
 {
    name: "B.Bhaskar",
    role: "Data Analyst",
    company: "Amazon Web Services",
    image: p8,
    salary:'4.5LPA'
  }

  
];

export function PlacementCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) =>
        prev === placements.length - 1 ? 0 : prev + 1
      );
    }, 3000); // change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const current = placements[index];

  return (
    <div className="w-full py-12 flex justify-center">

      <div className="relative w-[320px]">

        {/* CARD */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-700">

          <img
            src={current.image}
            alt={current.name}
            className="h-90 w-full object-cover transition-all duration-700"
          />

          <div className="p-4 text-center">
            <h3 className="text-lg font-bold text-[#2F3E46]">
              {current.name}
            </h3>
            <p className="text-gray-600">{current.role}</p>
            <p className="text-sm text-gray-500">{current.company}</p>
            <p className="text-[18px]">{current.salary}</p>
          </div>

        </div>

      </div>
    </div>
  );
}