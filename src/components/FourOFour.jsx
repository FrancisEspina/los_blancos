import React from "react";
import ButtonLink from "./ButtonLink";

const FourOFour = () => {
  return (
    <div className="default-container justify-center flex-col">
      <div className=" text-center">
        <div className="narrow font-bold title">404</div>
        <p className="text-[22pt] text-gray-500">Not Found</p>
      </div>
      <br />
      <ButtonLink title="Return Home" path={"/"} />
    </div>
  );
};

export default FourOFour;
