import { useState } from "react";
import image from "../assets/jobsimage.png";
import { Link } from "react-router-dom";

type Job = {
  title: string;
  skills: string;
  experience: string;
  location: string;
};

const jobs: Job[] = [
  {
    title: "UI/UX Designer",
    skills: "Figma, Adobe XD, Sketch, Prototyping",
    experience: "Freshers",
    location: "Hyderabad",
  },
  {
    title: "React Developer",
    skills: "React, Tailwind, TypeScript",
    experience: "1-2 yrs",
    location: "Hyderabad",
  },
  {
    title: "Backend Developer",
    skills: ".NET, SQL, APIs",
    experience: "0-1 yrs",
    location: "Hyderabad",
  },
  {
    title: "Client Acquisition Executive",
    skills: "Communication, Sales, Leads",
    experience: "0-1 yrs",
    location: "Hyderabad",
  },
  {
    title: "HR Executive",
    skills: "Recruitment, Training",
    experience: "0-1 yrs",
    location: "Hyderabad",
  },
  {
    title: "Digital Marketing Executive",
    skills: "SEO, Social Media, Content",
    experience: "0-1 yrs",
    location: "Hyderabad",
  },
];

export default function JobFilterUI() {
  const [search, setSearch] = useState("");

  const filteredJobs = jobs.filter((job) => {
    const value = search.toLowerCase();

    return (
      job.title.toLowerCase().includes(value) ||
      job.skills.toLowerCase().includes(value) ||
      job.location.toLowerCase().includes(value)
    );
  });

  return (
    <div className="min-h-screen bg-[#f3f6f8] overflow-x-hidden">

      {/* ================= HERO ================= */}
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="bg-cover bg-center"
      >
        <div className="bg-[#000000a0] hover:bg-[#00000090] py-16 md:py-25 px-4">

          <div className="max-w-4xl mx-auto text-center">

            <p className="text-[#35c6cf] font-semibold tracking-widest uppercase mb-3 text-sm md:text-base">
              Career Opportunities
            </p>

            <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight">
              Find Your Dream Job
            </h1>

            <p className="text-gray-300 mt-4 text-sm md:text-base max-w-2xl mx-auto">
              Explore exciting opportunities and build your future with our
              growing team at TechNex Cloud Networks Pvt Ltd.
            </p>

            {/* SEARCH */}
            <div className="mt-8 md:mt-10 flex sm:flex-row bg-white rounded-full overflow-hidden shadow-2xl max-w-2xl mx-auto">

              <input
                type="text"
                placeholder="Search jobs, skills, locations..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 px-4 md:px-6 py-3 md:py-4 outline-none text-gray-700 text-sm md:text-base"
              />

              <button className="bg-[#35c6cf] text-white px-6 md:px-8 py-3 md:py-4 font-semibold hover:bg-[#28b2bb] transition duration-300 text-sm md:text-base">
                Search
              </button>

            </div>

          </div>
        </div>
      </div>

      {/* ================= JOB SECTION ================= */}
      <div className="max-w-7xl mx-auto px-4 md:px-5 py-12 md:py-16">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-4">

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1f2a33]">
              Open Positions
            </h2>

            <p className="text-gray-500 mt-2 text-sm md:text-base">
              Showing {filteredJobs.length} available jobs
            </p>
          </div>

          <div className="bg-white px-4 md:px-5 py-2 md:py-3 rounded-lg shadow-sm border">
            <span className="text-xs md:text-sm text-gray-500">
              Updated Daily
            </span>
          </div>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 shadow-md hover:shadow-2xl transition duration-300 overflow-hidden flex flex-col rounded-sm"
              >

                <div className="bg-[#2f3d47] px-4 md:px-5 py-4 md:py-5 text-white flex-1">

                  <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-5 leading-snug">
                    {job.title}
                  </h3>

                  <div className="space-y-3 text-xs md:text-sm">

                    <div>
                      <span className="font-bold text-white">Skill :</span>
                      <span className="mt-1 px-2 text-gray-200">
                        {job.skills}
                      </span>
                    </div>

                    <div>
                      <span className="font-bold text-white">Experience :</span>
                      <span className="mt-1 px-2 text-gray-200">
                        {job.experience}
                      </span>
                    </div>

                    <div>
                      <span className="font-bold text-white">Location :</span>
                      <span className="mt-1 px-2 text-gray-300">
                        {job.location}
                      </span>
                    </div>

                  </div>
                </div>

                <Link to="/applicationform">
                  <button className="w-full bg-[#35c6cf] text-white font-bold py-3 md:py-4 tracking-wide hover:bg-[#28b2bb] transition duration-300 mt-auto text-sm md:text-base">
                    APPLY
                  </button>
                </Link>

              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-600">
                No jobs found
              </h2>

              <p className="text-gray-400 mt-2 text-sm md:text-base">
                Try searching with different keywords
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}