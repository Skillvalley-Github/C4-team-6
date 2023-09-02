import React from "react";
import { PiCirclesFourFill } from "react-icons/pi";
import "../../../../AppStyles/global.css";
import "../../../../AppStyles/alumnus.css";
import { useNavigate } from "react-router-dom";

const SeniorBadge = (props) => {
    const navigate = useNavigate();
    function redirect() {
        navigate('/view-alumni-individual')
    }
  return (
    <div className="w-full md:w-1/2">
      <div className="grid grid-cols-3 py-4">
        <div className="col-span-2 details">
          <figure className="alumni-img">
            <img src={props.image} alt="alumni" />
          </figure>
          <div className="ml-5">
            <span className='font-8 f-color-2 text-lg'>{props.name}</span>
            <p className='font-1 f-color-1 text-xs'>Passout @{props.passoutYear}</p>
          </div>
        </div>
        <button className="col-span-1 view-more" onClick={redirect}>
          <PiCirclesFourFill className='i-hover-color text-xl md:text-4xl mr-2 md:mr-8' />
          <span className='t-hover-color font-2 md:mr-8'>more</span>
        </button>
      </div>
    </div>
  );
};

export default SeniorBadge;
