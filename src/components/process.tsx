// ProcessSection.tsx
import React from "react";

const steps = [
  {
    number: "1",
    title: "Discover",
    description:
      "We understand your business requirements, project goals, and hiring needs.",
  },
  {
    number: "2",
    title: "Analyze",
    description:
      "We evaluate skill gaps, project scope, and resource requirements to plan the right approach.",
  },
  {
    number: "3",
    title: "Recruit & Onboard",
    description:
      "We source the right candidates, conduct screening, and ensure smooth onboarding into your organization.",
  },
  {
    number: "4",
    title: "Placement & Replacement",
    description:
      "We source the right candidates, conduct screening, and ensure smooth onboarding into your organization.",
  },
  {
    number: "5",
    title: "Payroll & Support",
    description:
      "We manage payroll, compliance, and provide ongoing support to both clients and employees.",
  },
];

export function Process()  {
  return (
    <div className="w-full ">
      <div className="mx-auto max-w-7xl px-6">

        {/* Steps */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-5 md:gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center"
            >
              {/* Arrow */}
              {index !== steps.length - 1 && (
                <span className="absolute right-[-18px] top-7 hidden text-2xl font-light text-black md:block">
                  →
                </span>
              )}

              {/* Number */}
              <span className="text-[34px] font-extrabold leading-none text-[#374151]">
                {step.number}
              </span>

              {/* Title */}
              <h3 className="mt-3 text-[18px] font-extrabold text-[#111827]">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-3 max-w-[210px] text-[12px] font-medium leading-[1.45] text-[#374151]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

