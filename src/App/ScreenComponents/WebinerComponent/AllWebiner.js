import React from "react";
import FilterEvents from "./Components/FilterEvents";
import EventList from "./Components/EventList";
import { EventData } from "./Components/EventData";
import '../../../AppStyles/webinars.css'

const AllWebiner = () => {
  return (
    <>
      <div className="grid grid-cols-1 px-6 pb-8 pt-24">
        <div className="col-span-1">
          <h1 className="text-4xl md:text-6xl font-6 f-color-1">
            Mentorship <span className="f-color-3">Program</span>
          </h1>
          <p className="text-sm md:text-lg font-1 f-color-1">
            All the webinars are scheduled as per students request for
            mentorship
          </p>
        </div>
        <div className="col-span-1">
          <FilterEvents />
        </div>
        <div className="col-span-1 space-y-8 ">
          {EventData.map((data) => {
            return (
              <EventList
                key={data.eventId}
                eventTitle={data.eventTitle}
                eventDate={data.eventDate}
                eventBanner={data.eventBanner}
                shortDescription={data.shortDescription}
                meetLink={data.meetLink}
                speakerName={data.speakerName}
                speakerImage={data.speakerImage}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AllWebiner;
