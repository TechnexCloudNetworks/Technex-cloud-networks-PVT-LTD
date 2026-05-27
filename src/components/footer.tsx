import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import facebook from "../assets/facebooklogo.svg";
import linkedin from "../assets/linkedinlogo.svg";
import instagram from "../assets/instagramlogo.svg";

export function Footer() {
  return (
    <footer className="w-full bg-[#2F3E46] text-white relative overflow-hidden">

      {/* subtle glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#24c0c520,transparent_60%)]" />

      <div className="relative max-w-[1600px] mx-auto px-6 md:px-20 py-16">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* LOGO + ABOUT */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img
                src={logo}
                className="w-[60px] h-[60px] rounded-full object-cover hover:scale-105 transition"
                alt="logo"
              />

              <h2 className="text-[30px] font-bold tracking-wide">
                TechNex
              </h2>
            </div>

            <p className="text-[14px] text-gray-300 leading-7 max-w-[320px]">
              Shaping the next generation of tech leaders with practical learning and innovation-driven programs.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-4 mt-6">

              {[
                { icon: linkedin, link: "https://www.linkedin.com/company/technexcloudnetworks/" },
                { icon: instagram, link: "https://www.instagram.com/technex_cloud_networks?igsh=MTNuZXFtejIyZ2p0OQ==" },
                { icon: facebook, link: "https://www.facebook.com/share/1Bk74pA2BP/" },
              ].map((item, i) => (
                <a key={i} href={item.link} target="_blank" rel="noreferrer">
                  <div className="w-[38px] h-[38px] flex items-center justify-center rounded-full bg-white/5 border border-white/10
                    hover:bg-[#24c0c5] hover:scale-110 hover:shadow-[0_0_12px_#24c0c5] transition">
                    <img src={item.icon} className="w-[18px] h-[18px]" alt="social" />
                  </div>
                </a>
              ))}

            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-[18px] font-semibold mb-6 text-[#24c0c5]">
              Quick Links
            </h3>

            <ul className="space-y-4 text-[14px] text-gray-300">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Career", path: "/career" },
              ].map((item, i) => (
                <li key={i} className="hover:text-white transition">
                  <Link
                    to={item.path}
                    onClick={() => window.scrollTo(0, 0)}
                    className="inline-block hover:translate-x-1 transition hover:underline"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* PROGRAMS */}
          <div>
            <h3 className="text-[18px] font-semibold mb-6 text-[#24c0c5]">
              Programs
            </h3>

            <ul className="space-y-4 text-[14px] text-gray-300">
              {[{ name: "Internship", path: "/edutech", point:1800 },
                { name: "Placemnet Guidance", path: "/edutech",point:1800  },
                { name: "All Courses", path: "/edutech",point:400  }].map((item, i) => (
                <li
                  key={i}
                  className="hover:text-white hover:translate-x-1 transition cursor-pointer hover:underline"
                >
                 <Link
                    to={item.path}
                    onClick={() => window.scrollTo({top: item.point,behavior:'smooth'})}
                    className="inline-block hover:translate-x-1 transition hover:underline"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h3 className="text-[18px] font-semibold mb-6 text-[#24c0c5]">
              Legal & Support
            </h3>

            <ul className="space-y-4 text-[14px] text-gray-300">

              <li className="hover:text-white transition">
                <Link
                  to="/privacy"
                  onClick={() => window.scrollTo(0, 0)}
                  className="inline-block hover:translate-x-1 transition hover:underline"
                >
                  Privacy Policy
                </Link>
              </li>

              <li className="hover:text-white transition">
                <Link
                  to="/termsandconditions"
                  onClick={() => window.scrollTo(0, 0)}
                  className="inline-block hover:translate-x-1 transition hover:underline"
                >
                  Terms & Conditions
                </Link>
              </li>

              <li className="hover:text-white transition">
                <Link
                  to="/internshipterms"
                  onClick={() => window.scrollTo(0, 0)}
                  className="inline-block hover:translate-x-1 transition hover:underline"
                >
                  Internship Terms
                </Link>
              </li>

            </ul>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center">
          <p className="text-[13px] text-gray-400">
            © 2026 TechNex Cloud Networks. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}