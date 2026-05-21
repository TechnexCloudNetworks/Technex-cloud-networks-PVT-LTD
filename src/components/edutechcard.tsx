import { Link } from "react-router-dom";

type EdutechCardProps = {
  course: string;
  description: string;
  image: string;
};

export function EdutechCard({ course, description, image }: EdutechCardProps) {
  return (
    <div className="md:w-[400px] w-[300px] h-[400px] overflow-hidden bg-white hover:border-1 hover:shadow-2xl hover:border-gray-400">
      
      {/* Image */}
      <div className="relative h-[190px] w-full">
        <img
          src={image}
          alt={course}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="px-6 py-5 text-center">
        <h2 className="md:text-[25px] text-[23px] font-extrabold leading-none tracking-[-0.5px] text-[#1a1a1a]">
          {course}
        </h2>

        <p className="mt-4 text-[15px] leading-[1.55] text-[#4f4f4f]">
          {description}
        </p>
        <Link to="/courseform" >
         <button className="mt-6 inline-flex items-center gap-2 text-[18px] font-semibold text-[#111111] transition-opacity hover:opacity-80">
          Learn More
          <span className="text-[22px] leading-none">→</span>
        </button></Link>
       
      </div>
    </div>
  );
}