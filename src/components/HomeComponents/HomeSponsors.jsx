import React from "react";
import {
  globalSponsors,
  mainSponsors,
  regionalSponsors,
  toptierSponsors,
} from "../../assets/images/sponsors/sponsorCollector";
import ButtonLink from "../ButtonLink";
const HomeSponsors = () => {
  return (
    <div className="p-15  text-center">
      <div>
        <div className="font-[900] text-4xl narrow">Sponsors</div>
        <br />
        <div className="place-items-center">
          <div className="flex gap-5 items-center" id="main_sponsors">
            {mainSponsors.map((sponsor) => (
              <LogoContainer sponsor={sponsor} />
            ))}
          </div>
          <br />
          <div className="flex gap-5 items-center" id="main_sponsors">
            {toptierSponsors.map((sponsor) => (
              <LogoContainer sponsor={sponsor} />
            ))}
          </div>
          <br />
          <div
            className=" max-w-[1500px] flex flex-wrap justify-center gap-5 items-center"
            id="main_sponsors"
          >
            {globalSponsors.slice(0, 15).map((sponsor) => (
              <>
                <LogoContainer sponsor={sponsor} />
              </>
            ))}
          </div>
          <br />
          <div
            className=" max-w-[1500px] flex flex-wrap justify-center gap-5 items-center"
            id="main_sponsors"
          >
            {regionalSponsors.slice(8, 11).map((sponsor) => (
              <>
                <LogoContainer sponsor={sponsor} />
              </>
            ))}
          </div>
        </div>
      </div>
      <div className="place-items-center mt-10">
        <ButtonLink title="View All Sponsors" path={"/sponsors"}></ButtonLink>
      </div>
    </div>
  );
};
export const LogoContainer = ({ sponsor }) => {
  return (
    <>
      <div className=" not-hover:grayscale w-30 hover:shadow-xl duration-200 shadow-indigo-600/15 rounded-2xl p-5 ">
        <img src={sponsor} className="h-full w-full object-contain" alt="" />
      </div>
    </>
  );
};

export default HomeSponsors;
