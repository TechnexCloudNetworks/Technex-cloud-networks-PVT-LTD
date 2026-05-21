import { useState } from "react";

type AccordionItem = {
  question: string;
  answer: string;
};

const items: AccordionItem[] = [
  {
    question: "What is software development?",
    answer:
      "Software development is the process of creating applications, websites, and systems using programming languages and tools.",
  },
  {
    question: "Which technologies are used in software development?",
    answer:
      "Technologies like React, Angular, Node.js,.NET, and cloud platforms are commonly used in modern development.",
  },
  {
    question: "What is frontend and backend development?",
    answer:
      "Frontend handles the user interface, while backend manages server, database, and application logic.",
  },
  {
    question: "Why is software testing important?",
    answer:
      "Testing ensures the software is bug-free, secure, and works correctly before release.",
  },
  {
    question: "What is the future of software development?",
    answer:
      "The future includes AI integration, automation, cloud computing, and faster scalable applications.",
  },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-2/3 text-white bg-[#0f172a]">

        {items.map((item, index) => (
          <div key={index} className="border-b border-[#1f2a30]">

            {/* HEADER */}
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center p-4 bg-[#2F3E46] hover:bg-[#1f2a30] transition"
            >
              <span className="font-semibold">{item.question}</span>
              <span className="text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {/* BODY */}
            <div
              className={`px-4 bg-[#ededed] overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-[500px] py-4" : "max-h-0"
              }`}
            >
              <p className="text-black font-bold">
                {item.answer}
              </p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}