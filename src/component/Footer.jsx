import React from "react";
import "../App.css";
import { Play } from "lucide-react";

const Footer = () => {
  return (
    <div
      className="flex items-center px-6 fixed bottom-0 gap-8 w-full text-white bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 h-[7rem]
 "
    >
      <div className="flex items-center gap-3">
        <button className="flex items-center   px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition">
          <Play className="w-7 h-11 " />
        </button>
        <span className="text-xl">Play Journey</span>
      </div>
      <div className=" flex-row w-px h-12 bg-gray-400"></div>

      <div>

        <div className="flex items-start gap-2">
          <div className=" w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl font-medium leading-none tabular-nums my-9 mx-3 ">1</div>
         <p className="text-[14px] leading-relaxed max-w-md">Every journey begins with a spark an idea that dares to challenge what exists and imagine what could be. It is in these moments of quiet vision that the seeds of progress are sown. We move forward not because the path is clear, but because the unknown calls us to explore, to experiment, and to create something greater than ourselves.</p>
  

        </div>
        
      </div>
    </div>
  );
};

export default Footer;
