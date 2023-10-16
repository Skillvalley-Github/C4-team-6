import React from "react";
import RFMWCard from "./RFMWCard";
import RFMWData from "./RFMWData";

const RFMWCluster = ({ RFMWDataProps }) => {
  return (
    <>
      <div className="flex flex-wrap">
        {RFMWDataProps.map((data) => {
          return <RFMWCard
            key={data.rfmwid}
            {...data}
           />;
        })}
      </div>
    </>
  );
};

export default RFMWCluster;
