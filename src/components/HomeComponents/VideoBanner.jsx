import React from "react";
import video from "../../assets/videos/hero_short.mp4";

const VideoBanner = () => {
  return (
    <div className="relative max-h-60 overflow-hidden flex items-center justify-center bg-black">
    <div className="absolute z-10 text-white  font-[600] md:text-[50pt] text-[22pt]   opacity-100 ">
        <div className="md:text-[12pt] text-[9pt]">WE ARE</div>
        <div className="narrow leading-5 md:leading-12">REAL MADRID</div>
      </div>
      <video
        className="w-full h-full object-cover opacity-60"
        autoPlay
        loop
        muted
        playsInline
        src={video}
      ></video>
    </div>
  );
};

export default VideoBanner;
