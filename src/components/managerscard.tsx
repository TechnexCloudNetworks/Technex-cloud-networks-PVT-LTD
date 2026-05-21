import React from "react";
import famid from '../assets/famid.webp'
import sirichandana from '../assets/sirichandana.png'
import venkatsai from '../assets/venkatsai.png'
import vinay from '../assets/vinayCEO.jpeg'
type Manager = {
  name: string;
  main:string;
  role: string;
  image: string;
};

const managers: Manager[] = [
  {
    name: "Vinay Burra",
    main:"Founder",
    role: "Chief Executive Officer(CEO)",
    image: vinay,
  },
  {
    name: "Venkat Sai",
    main:'',
    role: "General Manager",
    image: venkatsai,
  },
  {
    name: "Sirichandana Ponnam",
    main:'',
    role: "Human Resource Manager",
    image: sirichandana,
  },
  {
    name: "Famid T",
    main:'',
    role: "Business Development Manager",
    image: famid,
  },
];

export function Mangercard() {
  return (
    <section className="py-12 px-6  bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Before the Name, There Was a Vision
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8  pl-9">
        {managers.map((manager, index) => (
          <div
            key={index}
            className="bg-white w-[300px]  rounded-2xl shadow-md overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <img
              src={manager.image}
              alt={manager.name}
              className="w-full h-[300px]"
            />

            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {manager.name}
              </h3>
              <p className="text-sm text-gray-500 mt-1"> {manager.main ? (<>{manager.main} &<br /></>) : null}{manager.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

