import React, { useState } from 'react';
import Adminsidebar from '../../adminNave/Adminsidebar';
import { submitStudent } from '../../../Config/supaFunctions';
import { useMutation, useQueryClient } from 'react-query';
function Scheduleevent() {
  // State variables for form inputs
  const [eventTitle, setEventTitle] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventMeetLink, setEventMeetLink] = useState('');
  const [speakerName, setSpeakerName] = useState('');
  const [speakerImage, setSpeakerImage] = useState('');
  const addStudent = async (studentData) => {
    try {
      const data = await submitStudent(studentData);
      return data;
    } catch (error) {
      throw error;
    }
  };
  
  const queryClient = useQueryClient();

  const mutation = useMutation(addStudent, {
    onSuccess: () => {
      // Handle success, e.g., show a success message
      console.log('Success');
    },
    onError: (error) => {
      // Handle error, e.g., show an error message
      console.error('Error:', error.message);
    },
  });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the studentData object from state
    const studentData = {
      name: speakerName,
      image: speakerImage, // Assuming 'speakerImage' is the file input state
    };

    // Trigger the mutation
    mutation.mutate(studentData);
  };
  

  return (
    <>
      <div className="grid md:flex">
        <div>
          <Adminsidebar />
        </div>
        <div className="flex justify-center w-full">
          <form onSubmit={handleSubmit}>
            <div className="grid justify-center bg-color-2 space-y-6 mt-6 w-[450px] md:w-[600px] lg:w-[800px] py-10 font-2">
              <div>
                <h1 className="text-center text-2xl font-bold">Create Event</h1>
              </div>
              <div className="grid md:flex md:space-x-4 items-center">
                <label className="w-[150px]">Event Title</label>
                <input
                  type="text"
                  placeholder="Enter Event Title"
                  value={eventTitle}
                  onChange={(e) => setEventTitle(e.target.value)}
                />
              </div>
              <div className="grid md:flex md:space-x-4 items-center">
                <label className="w-[150px]">Event Date</label>
                <input
                  type="date"
                  placeholder="Enter Event Date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                />
              </div>
              <div className="grid md:flex md:space-x-4 items-center">
                <label className="w-[150px]">Event banner</label>
                <input className="border border-black p-2 w-[200px] bg-white" type="file" />
              </div>
              <div className="grid md:flex md:space-x-4 items-center">
                <label className="w-[150px]">Event Description</label>
                <textarea
                  className="h-[100px]"
                  placeholder="Event Description"
                  value={eventDescription}
                  onChange={(e) => setEventDescription(e.target.value)}
                />
              </div>
              <div className="grid md:flex md:space-x-4 items-center">
                <label className="w-[150px]">Event meetlink</label>
                <input
                  type="url"
                  placeholder="Enter Event meetlink"
                  value={eventMeetLink}
                  onChange={(e) => setEventMeetLink(e.target.value)}
                />
              </div>
              <div className="grid md:flex md:space-x-4 items-center">
                <label className=" md:w-[150px]">Event speaker Name</label>
                <input
                  type="text"
                  placeholder="Enter speaker name"
                  value={speakerName}
                  onChange={(e) => setSpeakerName(e.target.value)}
                />
              </div>
              <div className="grid md:flex md:space-x-4 items-center">
                <label className="w-[150px]">Event speaker Image</label>
                <input className="border border-black p-2 w-[200px] bg-white" type="file" />
              </div>
              <div className="flex justify-center">
                <button className="px-10 py-2 bg-color-4 rounded-2xl text-white" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Scheduleevent;
