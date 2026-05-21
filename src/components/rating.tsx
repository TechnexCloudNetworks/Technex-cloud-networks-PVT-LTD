import { CountUp } from "./countup";

export function Rating(){
    return(
        <>
        <div className="pl-10 md:pl-0">
           <div className="flex items-center py-5 md:py-10 md:pt-30 ">
               <div className="border-b-2 border-gray-400 pb-5 mr-7" style={{width:'300px'}}>
                     <div className="font-bold">
                        <span className="text-5xl md:text-7xl"><CountUp end={8}/></span><span className="text-2xl">LPA</span>
                     </div>
                     <div>
                        <p className="font-bold text-[10px] md:text-[20px]">Highest Package </p>
                        
                     </div>
                </div> 
                  <div className="border-b-2 border-gray-400 pb-5 mr-7" style={{width:'300px'}}>
                     <div className="font-bold">
                        <span className="text-5xl md:text-7xl"><CountUp end={4.5}/></span><span className="text-2xl">LPA</span>
                     </div>
                     <div>
                        <p className="font-bold text-[10px] md:text-[20px]">Average Package</p>
                        
                     </div>
                </div>  
           </div>
           <div className="flex py-10 md:pt-20">
                 <div className="border-b-2 border-gray-400 pb-5 mr-7" style={{width:'300px'}}>
                     <div className="font-bold">
                        <span className="text-5xl md:text-7xl"><CountUp end={97}/></span><span className=" text-2xl md:text-6xl">%</span>
                     </div>
                     <div>
                        <p className="font-bold text-[10px] md:text-[20px]">Employment Rate </p>
                        
                     </div>
                </div>  
                 <div className="border-b-2 border-gray-400 pb-5 mr-7" style={{width:'300px'}}>
                     <div className="font-bold">
                        <span className="text-5xl md:text-7xl"><CountUp end={10}/></span><span className="text-2xl md:text-6xl">+</span>
                     </div>
                     <div>
                        <p className="font-bold text-[10px] md:text-[20px]">Recruiters</p>
                        
                     </div>
                </div> 
                <div className="border-b-2 border-gray-400 pb-5 mr-7" style={{width:'300px'}}>
                     <div className="font-bold">
                        <span className=" text-5xl md:text-7xl"><CountUp end={15}/></span><span className="text-2xl md:text-6xl">+</span>
                     </div>
                     <div>
                        <p className="font-bold text-[10px] md:text-[20px]">Industry Partners </p>
                        
                     </div>
                </div>  
           </div>
        </div>
        </>
    )
}