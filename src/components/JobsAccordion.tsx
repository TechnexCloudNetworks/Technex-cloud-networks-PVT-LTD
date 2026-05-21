import { useState } from "react";

type JobContent = {
  description: string;
  skills: string[];
  experience: string;
  location: string;
  type: string;
  tools: string[];
};

type AccordionItem = {
  role: string;
  content: JobContent;
};

const items: AccordionItem[] = [
  {
    role: "Business Development Executive (BDE)",
    content: {
      description:
        "Responsible for generating leads, client acquisition, and promoting IT services like cloud and software solutions.",
      skills: ["Communication", "LinkedIn", "CRM Tools", "Negotiation"],
      experience: "1-2 Years",
      location: "Hyderabad / Remote",
      type: "Full Time",
      tools: ["LinkedIn", "HubSpot", "Excel"],
    },
  },
  {
    role: "Client Acquisition Executive (CAE)",
    content: {
      description:
        "Responsible for identifying potential clients, pitching IT services, and converting leads into business opportunities for company growth.",
      skills: ["Sales Strategy", "Client Handling", "Negotiation", "CRM Tools"],
      experience: "0-1 Years",
      location: "Hyderabad / Remote",
      type: "Full Time",
      tools: ["LinkedIn", "HubSpot", "Excel", "Email Outreach"],
    },
  },
  {
    role: "React / Angular Developer",
    content: {
      description:
        "Builds modern web applications, dashboards, and enterprise UI systems.",
      skills: ["React", "Angular", "TypeScript", "Tailwind"],
      experience: "0-1 Years",
      location: "Hyderabad",
      type: "Full Time",
      tools: ["VS Code", "Git", "Postman"],
    },
  },
  {
    role: "Digital Marketing Executive",
    content: {
      description:
        "Handles SEO, social media, Google Ads, and lead generation campaigns.",
      skills: ["SEO", "SMM", "Google Ads", "Analytics"],
      experience: "0-2 Years",
      location: "Remote",
      type: "Full Time",
      tools: ["Google Analytics", "Canva"],
    },
  },
  {
    role: "HR Executive",
    content: {
      description:
        "Manages recruitment, onboarding, employee engagement, and HR operations for smooth organizational workflow.",
      skills: ["Recruitment", "Communication", "HR Management", "Interview Handling"],
      experience: "Fresher",
      location: "Hyderabad",
      type: "Full Time",
      tools: ["Naukri", "LinkedIn Jobs", "MS Excel"],
    },
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
              <span className="font-semibold">{item.role}</span>
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
              <p className="text-black mb-3 font-bold">
                {item.content.description}
              </p>

              <div className="text-sm text-black space-y-1">
                <p><span className="text-black font-bold">Skills:</span> {item.content.skills.join(", ")}</p>
                <p><span className="text-black font-bold">Experience:</span> {item.content.experience}</p>
                <p><span className="text-black font-bold">Location:</span> {item.content.location}</p>
                <p><span className="text-black font-bold">Type:</span> {item.content.type}</p>
                <p><span className="text-black font-bold">Tools:</span> {item.content.tools.join(", ")}</p>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}