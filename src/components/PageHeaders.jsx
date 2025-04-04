import React from "react";

const PageHeaders = ({ title = "Title" }) => {
  return (
    <div className="pt-32 pb-12 flex items-center max-w-[1610px] mx-auto px-5">
      <h1 className="text-[24pt] narrow font-bold">{title}</h1>
    </div>
  );
};

export default PageHeaders;
