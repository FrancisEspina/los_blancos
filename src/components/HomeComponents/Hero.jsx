import React from "react";

const Hero = () => {
  return (
    <div className="default-container justify-between">
      <div className="grid xl:grid-cols-2 grid-cols-1 items-center gap-12">
        <div>
          <p>Kings Of Europe</p>
          <div className="title font-[600] max-w-200">
            Hala Madrid y nada más
          </div>
        </div>

        <p className="text-xl ms-2 mt-1 narrow text-end ">Real Madrid CF</p>
      </div>
    </div>
  );
};

export default Hero;
