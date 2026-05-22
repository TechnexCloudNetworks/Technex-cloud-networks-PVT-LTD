import { Link } from "react-router-dom";

export function Notfound() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#111827] to-[#1E293B] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden relative">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-120px] left-[-120px] w-[250px] sm:w-[400px] h-[250px] sm:h-[400px]  blur-3xl rounded-full" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[250px] sm:w-[400px] h-[250px] sm:h-[400px]  blur-3xl rounded-full" />

      {/* MAIN CARD */}
      <div className="relative z-10 w-full max-w-4xl">

        <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-6 sm:p-10 lg:p-14">

          {/* 404 CONTENT */}
          <div className="text-center">

            <h1 className="text-[90px] sm:text-[140px] md:text-[180px] font-black leading-none bg-gradient-to-r from-cyan-400 to-[#24c0c5] bg-clip-text text-transparent">
              404
            </h1>

            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Page Not Found
            </h2>

            <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              The page you are looking for might have been removed,
              renamed, or is temporarily unavailable.
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">

              <Link
                to="/"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-[#24c0c5] hover:bg-cyan-900 text-white font-semibold transition-all duration-300 shadow-lg hover:scale-105"
              >
               Go Home
              </Link>

              <button
                onClick={() => window.history.back()}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-2xl border border-white/20 bg-white/10 hover:bg-white/20 text-white font-semibold transition-all duration-300 hover:scale-105"
              >
                ← Go Back
              </button>

            </div>
          </div>

          {/* FOOTER */}
          <div className="mt-10 pt-6 border-t border-white/10 text-center">
            <p className="text-gray-400 text-xs sm:text-sm">
              Error Code: 404 • Resource Not Found
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}