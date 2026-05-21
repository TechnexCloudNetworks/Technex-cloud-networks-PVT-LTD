import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "How can I apply for a job at TechNex?",
    answer:
      "You can apply through the careers section or send your resume to the official HR email mentioned on our website.",
  },
  {
    question: "Do you accept freshers?",
    answer:
      "Yes, we welcome freshers for roles like BDE, HR, Digital Marketing, and Software Development.",
  },
  {
    question: "Is remote work available?",
    answer:
      "Some roles offer remote or hybrid work options depending on project and team requirements.",
  },
  {
    question: "What is the selection process?",
    answer:
      "The selection process includes resume screening, technical/HR interview, and final discussion.",
  },
  {
    question: "What skills are required for BDE role?",
    answer:
      "Good communication skills, basic business understanding, and willingness to learn are essential.",
  },
  {
    question: "Do you provide training for freshers?",
    answer:
      "Yes, we provide onboarding and training programs for selected freshers to improve technical and soft skills.",
  },
];

export default function CareerFAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full flex justify-center py-10 ">
      <div className="w-full max-w-5xl ">

        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
            >
              {/* QUESTION */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50 transition"
              >
                <span className="font-medium text-gray-800">
                  {faq.question}
                </span>

                <span
                  className={`text-gray-500 text-sm transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {/* ANSWER */}
              <div
                className={`px-4 bg-gray-50 text-gray-600 text-sm transition-all duration-300 overflow-hidden ${
                  isOpen ? "max-h-40 py-3" : "max-h-0 py-0"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
}