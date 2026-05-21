import image from '../assets/chart.png'
export default function FlipCard() {
  return (
    <div >

      <div className="md:w-[450px] w-[300px] h-[300px] perspective">

        {/* Inner Card */}
        <div className="relative  w-full rounded-lg h-full transition-transform duration-700 transform-style preserve-3d hover:rotate-y-180">

          {/* FRONT SIDE (TEXT) */}
          <div className="absolute border-y-1 w-full h-full backface-hidden bg-white shadow-xl rounded-2xl flex flex-col justify-center items-center p-5 text-center">
            <h2 className="text-xl font-bold mb-3">Dashborad of Digital marketing</h2>
            <p className="text-gray-600 font-semibold text-sm">
              Grow your business with SEO, social media marketing, and ads.
            </p>
           <div className="md:hidden flex justify-center mt-4">
             <div className="bg-gradient-to-r from-[#2F3E46] to-[#52796F] text-white px-5 py-3 rounded-full shadow-lg animate-pulse flex items-center gap-2 text-sm font-semibold tracking-wide">
             <span>Tap the Card to View Dashboard</span>
             </div>
           </div>
          </div>

          {/* BACK SIDE (IMAGE) */}
          <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-2xl overflow-hidden">
            <img
             src={image}
              className="w-full h-full object-cover"
              alt="Marketing"
            />
          </div>

        </div>
      </div>

      {/* Custom styles */}
      <style>
        {`
          .perspective {
            perspective: 1000px;
          }

          .transform-style {
            transform-style: preserve-3d;
          }

          .backface-hidden {
            backface-visibility: hidden;
          }

          .rotate-y-180 {
            transform: rotateY(180deg);
          }

          .hover\\:rotate-y-180:hover {
            transform: rotateY(180deg);
          }
        `}
      </style>
    </div>
  );
}