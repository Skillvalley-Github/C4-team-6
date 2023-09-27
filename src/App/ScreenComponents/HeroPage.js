// ------------------------------------------------------
// Prerequisites
// ------------------------------------------------------
import React from "react";
// ------------------------------------------------------
// Styles
// ------------------------------------------------------
import "../../AppStyles/global.css";
import "../../AppStyles/colors.css";
import "../../AppStyles/HeroPage.css";
// ------------------------------------------------------
// Components
// ------------------------------------------------------
import HeroLogo from "../Constants/HeroLogo.svg";
import WebHeader from "./HeroComponents/WebHeader";
import UserTypeButton from "./HeroComponents/UserTypeButton";

const HeroPage = () => {
  

  return (
    <>
      <div className="grid grid-cols-1 px-6 pt-5">
        <div className="col-span-1">
          <WebHeader />
        </div>
        <div className="col-span-1 flex justify-center align-middle pt-40 md:pt-16">
          <div className="flex flex-col">
            <figure className="flex justify-center align-middle">
              <img src={HeroLogo} className="" />
            </figure>
            <p className="f-color-2 font-1 md:text-xl text-center md:-mt-10">
              crossover of generations - get mentorship, expand network and
              build your career
            </p>
            <div className="flex justify-center align-middle flex-wrap gap-5 md:gap-16 pt-8">
              <UserTypeButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroPage;
