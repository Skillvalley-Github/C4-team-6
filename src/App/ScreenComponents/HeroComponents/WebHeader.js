import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../../Constants/logo.svg"
import { BsInfoCircleFill } from "react-icons/bs";

const WebHeader = () => {
  return (
    <>
      <div className="navbar bg-color-4">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <img src={logo1} className="h-[3rem] w-[3rem]" />
          </Link>
        </div>
        <div className="flex-none">
          <button
            className="btn btn-square btn-ghost"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            <BsInfoCircleFill className="f-color-2 text-3xl" />
          </button>
          <dialog id="my_modal_1" className="modal backdrop-blur-sm">
            <div className="modal-box bg-color-2">
              <h3 className="font-bold text-lg">Welcome!👋🏻 to Reunify</h3>
              <p className="py-4">
                crossover of generations - get mentorship, expand network and
                build your career
              </p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn bg-color-4 f-color-3">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </>
  );
};

export default WebHeader;
