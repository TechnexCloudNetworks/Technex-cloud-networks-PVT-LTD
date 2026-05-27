
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
   CartesianGrid,
} from "recharts";
import { CountUp } from "./countup";
const data = [
  { value: 40 },
  { value: 28 },
  { value: 55 },
  { value: 22 },
  { value: 38 },
  { value: 30 },
  { value: 18 },
  { value: 20 },
  { value: 35 },
  { value: 55 },
  { value: 40 },
  { value: 60 },
  { value: 85 },
  { value: 92 },
  { value: 96 },
];
const data3 = [
  { value: 3 },
  { value: 8 },
  { value: 5 },
  { value: 12 },
  { value: 9 },
  { value: 18 },
  { value: 30 },
  { value: 22 },
  { value: 10 },
  { value: 20},
  { value: 10 },
  { value: 15},
  { value: 20 },
  { value: 35 },
  { value: 25 },
  { value: 30 },
  { value: 25 },
];
export function Homecard(){
    return(
        <>
       
          <div className="md:flex justify-center items-center md:mx-0 mx-4 gap-10 py-10  bg-white  overflow-hidden">
  <div className="wave-up  w-75 h-75 rounded-xl bg-[#062B52] relative overflow-hidden shadow-2xl">
    <div className="p-4 text-white z-10 relative">
      <h3 className="text-lg font-semibold leading-tight">
        Software <br /> Development
      </h3>

      <div className="mt-10 text-center">
        <h1 className="text-5xl font-bold "><CountUp end={5}/>+</h1>
        <p className="text-xs mt-1 text-gray-300">
          Projects Delivered
        </p>
      </div>
    </div>

    <div className="absolute bottom-0 left-0 w-full h-70  bg-cover opacity-60" ><div className="w-[320px] h-[320px] bg-[#05294A] rounded-3xl overflow-hidden relative">
      
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          
          <defs>
            {/* Neon Green Fill */}
            <linearGradient id="greenFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#39FF14" stopOpacity={0.9} />
              <stop offset="100%" stopColor="#39FF14" stopOpacity={0.05} />
            </linearGradient>

            {/* Glow */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="6" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <Area
            type="linear"
            dataKey="value"
            stroke="#39FF14"
            strokeWidth={8}
            fill="url(#greenFill)"
            filter="url(#glow)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div></div>
  </div>


  <div className="wave-down w-75 h-75 mb-15 my-2 rounded-xl bg-[#062B52] relative overflow-hidden shadow-2xl">
    <div className="p-4 text-white z-10 relative">
      <h3 className="text-lg font-semibold leading-tight">
        IT Consultancy <br /> Services
      </h3>

      <div className="mt-10 text-center">
        <h1 className="text-5xl font-bold"><CountUp end={10} />+</h1>
        <p className="text-xs mt-1 text-gray-300">
          Client Collaboration
        </p>
      </div>
    </div>

    <div className="absolute bottom-0 left-0 w-full h-80  bg-cover opacity-60" ><div className="w-[320px] h-[320px] rounded-[26px] overflow-hidden relative bg-[#032347]">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#083867] via-[#032347] to-[#02162d]" />

      {/* Glow Background */}
      <div className="absolute inset-0 bg-blue-400/10 blur-3xl" />

      {/* Chart */}
      <div className="absolute inset-0">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data1}
            margin={{
              top: 30,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>

              {/* Blue Fill Gradient */}
              <linearGradient
                id="blueFill"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#7ad7ff"
                  stopOpacity={0.9}
                />

                <stop
                  offset="100%"
                  stopColor="#032347"
                  stopOpacity={1}
                />
              </linearGradient>

              {/* Line Glow */}
              <filter id="lineGlow">
                <feGaussianBlur
                  stdDeviation="4"
                  result="blur"
                />

                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

            </defs>

            {/* Background Thin Line */}
            <Area
              type="linear"
              dataKey="value"
              stroke="rgba(255,255,255,0.18)"
              strokeWidth={2}
              fill="transparent"
              dot={false}
              activeDot={false}
            />

            {/* Main Area Chart */}
            <Area
              type="linear"
              dataKey="value"
              stroke="#8be9ff"
              strokeWidth={2.5}
              fill="url(#blueFill)"
              filter="url(#lineGlow)"
              dot={false}
              activeDot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Glow Dot */}
      <div className="absolute right-4 top-[92px] w-3 h-3 rounded-full bg-white shadow-[0_0_18px_6px_rgba(255,255,255,0.9)]" />
    </div></div>
  </div>

  <div className="wave-up w-75 h-75 rounded-xl mb-2 bg-[#062B52] relative overflow-hidden shadow-2xl">
    <div className="p-4 text-white z-10 relative">
      <h3 className="text-lg font-semibold leading-tight">
        Digital <br /> Marketing
      </h3>

      <div className="mt-10 text-center">
        <h1 className="text-5xl font-bold"><CountUp end={10}/>+</h1>
        <p className="text-xs mt-1 text-gray-300">
          Happy Clients
        </p>
      </div>
    </div>

  <div className="absolute bottom-0 left-0 w-full h-75  bg-cover opacity-60" >   <div className="w-[320px] h-[320px] bg-[#05294A] rounded-[24px] overflow-hidden relative">
      
      {/* Vertical Light Lines */}
      <div className="absolute inset-0 flex justify-between px-5 opacity-30 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="w-[1px] h-full bg-orange-400/30"
          />
        ))}
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data3}
          margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
        >
          <defs>
            
            {/* GOLD FILL */}
            <linearGradient id="goldFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFB800" stopOpacity={0.55} />
              <stop offset="100%" stopColor="#FFB800" stopOpacity={0} />
            </linearGradient>

            {/* MAIN GLOW */}
            <filter id="strongGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="blur1" />
              <feGaussianBlur stdDeviation="12" result="blur2" />

              <feMerge>
                <feMergeNode in="blur2" />
                <feMergeNode in="blur1" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

          </defs>

          <XAxis hide />
          <YAxis hide />

          {/* GLOW AREA */}
          <Area
            type="natural"
            dataKey="value"
            stroke="#FFB800"
            strokeWidth={4}
            fill="url(#goldFill)"
            filter="url(#strongGlow)"
            dot={{
              r: 4,
              stroke: "#FFD54F",
              strokeWidth: 2,
              fill: "#fff4c2",
            }}
            activeDot={{
              r: 6,
              fill: "#ffffff",
              stroke: "#FFB800",
              strokeWidth: 3,
            }}
          />
        </AreaChart>
      </ResponsiveContainer>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-yellow-500/20 to-transparent" />
    </div></div>
  </div>
  <div className="wave-down w-75 h-75 rounded-xl bg-[#062B52] relative overflow-hidden shadow-2xl">
    <div className="p-4 text-white z-10 relative">
      <h3 className="text-lg font-semibold leading-tight">
        EdTech
      </h3>

      <div className="mt-16 text-center">
        <h1 className="text-5xl font-bold"><CountUp end={600}/>+</h1>
        <p className="text-xs mt-1 text-gray-300">
          Trained & Placed
        </p>
      </div>
    </div>

    <div className="absolute bottom-0 left-0 w-full h-90  bg-cover opacity-60 rounded-md" > <div
      style={{
        width: "100%",
        height: "400px",
        background: "#05294A",
        borderRadius: "8px",
        overflow: "hidden",
        padding: "10px",
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data4}
          margin={{ top: 20, right: 10, left: 10, bottom: 0 }}
        >
          <defs>
            {/* MAIN GLOW */}
            <filter id="neonGlow" height="300%" width="300%" x="-100%" y="-100%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* STRONGER OUTER GLOW */}
            <filter id="outerGlow" height="300%" width="300%" x="-100%" y="-100%">
              <feGaussianBlur stdDeviation="15" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* AREA FILL */}
            <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#39FF14" stopOpacity={0.55} />
              <stop offset="70%" stopColor="#39FF14" stopOpacity={0.12} />
              <stop offset="100%" stopColor="#39FF14" stopOpacity={0} />
            </linearGradient>
          </defs>

          {/* Vertical glowing lines */}
          <CartesianGrid
            stroke="#39FF14"
            strokeOpacity={0.12}
            vertical={true}
            horizontal={false}
          />

          <XAxis hide />
          <YAxis hide />

          {/* MAIN AREA */}
          <Area
            type="linear"
            dataKey="y"
            stroke="#39FF14"
            strokeWidth={4}
            fill="url(#areaFill)"
            dot={false}
            filter="url(#neonGlow)"
            isAnimationActive={false}
          />

          {/* OUTER GLOW LAYER */}
          <Area
            type="linear"
            dataKey="y"
            stroke="#39FF14"
            strokeWidth={12}
            fill="transparent"
            opacity={0.18}
            dot={false}
            filter="url(#outerGlow)"
            isAnimationActive={false}
          />

          {/* THIN SHARP TOP LINE */}
          <Area
            type="linear"
            dataKey="y"
            stroke="#7CFF5B"
            strokeWidth={1.5}
            fill="transparent"
            dot={false}
            isAnimationActive={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div></div>
  </div>
</div>
       
        </>
    )
}

const data1 = [
  { value: 10 },
  { value: 18 },
  { value: 8 },
  { value: 28 },
  { value: 14 },
  { value: 40 },
  { value: 22 },
  { value: 48 },
  { value: 30 },
  { value: 42 },
  { value: 20 },
  { value: 55 },
  { value: 38 },
  { value: 68 },
  { value: 45 },
  { value: 60 },
  { value: 35 },
  { value: 52 },
  { value: 28 },
  { value: 46 },
  { value: 22 },
  { value: 58 },
  { value: 40 },
  { value: 70 },
  { value: 55 },
  { value: 82 },
];



const data4 = [
  { x: 0, y: 8 },
  { x: 1, y: 12 },
  { x: 2, y: 18 },
  { x: 3, y: 28 },
  { x: 4, y: 14 },
  { x: 5, y: 22 },
  { x: 6, y: 16 },
  { x: 7, y: 26 },
  { x: 8, y: 20 },
  { x: 9, y: 42 },
  { x: 10, y: 58 },
  { x: 11, y: 34 },
  { x: 12, y: 18 },
  { x: 13, y: 32 },
  { x: 14, y: 50 },
  { x: 15, y: 70 },
  { x: 16, y: 92 },
  { x: 14, y: 50 },
    { x: 12, y: 18 }
];


