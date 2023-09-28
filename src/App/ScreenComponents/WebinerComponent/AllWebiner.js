import React, { useState, useEffect } from "react";
import FilterEvents from "./Components/FilterEvents";
import EventList from "./Components/EventList";
import { EventData } from "./Components/EventData";
import "../../../AppStyles/webinars.css";
import { useQuery } from "react-query";
import {
  getWebinar,
  getWebinarByPage,
  getWebinarlength,
} from "../../config/supaFunctions";
import Pagination from "./Components/Pagination";

const AllWebiner = () => {
  const {
    data: webinarsLength,
    isLoading,
    isError,
  } = useQuery(["webinarsLength"], getWebinarlength);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items to display per page
  const totalItems = webinarsLength || 0; // Total number of items

  // Calculate startCount based on the current page and itemsPerPage
  const startCount = (currentPage - 1) * itemsPerPage;

  // Function to fetch data for the current page
  const {
    data: webinars,
    isLoading: webinarsLoading,
    isError: webinarsError,
  } = useQuery(
    ["webinars", startCount, itemsPerPage],
    () => getWebinarByPage(startCount, itemsPerPage), // Modify your query function to accept startCount and itemsPerPage
    {
      enabled: totalItems > 0, // Only fetch data if totalItems is available
    }
  );
  // console.log(webinars)
  // Handle page change
  const onPageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <div className="grid grid-cols-1 px-6 pb-8 pt-24">
        <div className="col-span-1">
          <h1 className="text-4xl md:text-6xl font-6 f-color-1">
            Mentorship <span className="f-color-3">Program</span>
          </h1>
          <p className="text-sm md:text-lg font-1 f-color-1">
            All the webinars are scheduled as per students' request for
            mentorship
          </p>
        </div>
        <div className="col-span-1">
          <FilterEvents />
        </div>
        <div className="col-span-1 space-y-8">
          {webinars.map((data) => {
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
      <div className="mt-12">
        {webinarsLoading ? (
          <p>Loading...</p>
        ) : webinarsError ? (
          <p>Error fetching data</p>
        ) : (
          <>
            <EventList webinars={webinars} />{" "}
            {/* Pass the fetched webinars to your EventList component */}
            <Pagination
              itemsPerPage={itemsPerPage}
              totalItems={totalItems}
              onPageChange={onPageChange}
            />
          </>
        )}
      </div>
    </>
  );
};

export default AllWebiner;
