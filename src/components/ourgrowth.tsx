// GrowthProcess.tsx

import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Discovery & Audit",
    description:
      "Deep dive into your current digital presence, competitors, and market opportunity to build a baseline.",
  },
  {
    id: "02",
    title: "Strategy Blueprint",
    description:
      "Custom 90-day growth roadmap with clear KPIs, channel mix, budget allocation, and messaging framework.",
  },
  {
    id: "03",
    title: "Execution & Optimisation",
    description:
      "Rapid deployment followed by weekly testing, iteration, and performance tuning across all active channels.",
  },
  {
    id: "04",
    title: "Reporting & Scaling",
    description:
      "Monthly strategic reviews with live dashboards, insights, and plans to scale what's working.",
  }
];

const stats = [
  {
    label: "Avg. Traffic Growth",
    value: "+287%",
  },
  {
    label: "Avg. Lead Volume Increase",
    value: "+194%",
  },
  {
    label: "Avg. Cost Per Lead Reduction",
    value: "-43%",
  },
  
];

const performance = [
  {
    name: "SEO",
    value: 92,
  },
  {
    name: "Paid Media",
    value: 88,
  },
  {
    name: "Social",
    value: 79,
  },
  {
    name: "Email",
    value: 74,
  },
];

export  function Growthprocess() {
  return (
    <section className="w-full bg-[#f2f2f2] text-[#2F3E46] py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* LEFT CONTENT */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-[52px] sm:text-[72px] leading-[0.95] font-black tracking-tight"
          >
            Our Growth
            <br />
            Process
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-10 max-w-[650px] text-lg leading-9"
          >
            A structured, data-first methodology that delivers consistent
            results from day one.
          </motion.p>

          {/* PROCESS STEPS */}
          <div className="mt-10 ">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className=" pb-5 hover:border-b-1 p-5"
              >
                <div className="flex gap-8">
                  <span className="text-[#00B7FF] text-sm font-semibold tracking-widest mt-1">
                    {step.id}
                  </span>

                  <div>
                    <h3 className="text-3xl font-bold tracking-tight">
                      {step.title}
                    </h3>

                    <p className="mt-5  text-lg leading-9 max-w-[650px]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#2F3E46] border border-[#123B78] rounded-[40px] p-8 sm:p-12 shadow-[0_0_40px_rgba(0,0,0,0.2)]"
        >
          <h4 className="uppercase tracking-[3px] text-white text-lg font-semibold">
            Average Client Results
          </h4>

          {/* STAT BOXES */}
          <div className="mt-10 space-y-6">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                viewport={{ once: true }}
                className="bg-[#2f3e46]  border-1 text-white  hover:border-[#24c0c5] border-white rounded-3xl px-8 py-7 flex items-center justify-between"
              >
                <span className="  text-lg">{item.label}</span>

                <span className="text-[#00CFFF] text-4xl font-bold tracking-tight">
                  {item.value}
                </span>
              </motion.div>
            ))}
          </div>

          {/* PROGRESS BARS */}
          <div className="mt-14 space-y-8">
            {performance.map((item, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white text-lg">
                    {item.name}
                  </span>

                  <span className="text-white font-semibold">
                    {item.value}%
                  </span>
                </div>

                <div className="w-full h-3 rounded-full bg-[#27497D] overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.value}%` }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="h-full rounded-full bg-gradient-to-r from-[#2f3e464b] to-[#24c0c5]"
                  />
                </div>
              </div>
            ))}
          </div>

          <p className="mt-12 text-white text-sm">
            Based on aggregated client data · 2024–2026
          </p>
        </motion.div>
      </div>
    </section>
  );
}