import React from "react";
import banner_image from "../../assets/images/banner-2.jpg";
import Button from "../../components/Button";
const Banner = () => {
  return (
    <>
      <div className="default-container">
        <div className="grid xl:grid-cols-2 gap-5">
          <div className="overflow-hidden rounded-3xl">
            <img src={banner_image} alt="" />
          </div>
          <div className=" p-5 flex items-center ">
            <div>
              <div className="narrow text-[32pt] font-[600]">Real Madrid</div>
              <p className="text-lg narrow">More than a Club</p>
              <br />
              <p className="font-light">
                Real Madrid CF, founded in 1902, is one of the most successful
                football clubs in history. Based in Madrid, Spain, the club has
                won a record number of UEFA Champions League and La Liga titles.
                Known as <span className="font-bold">Los Blancos</span>.
              </p>
              <br />
              <Button title="The Club" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
