import React, { useState } from 'react';
import Dashcard from './Dashcard';
import { useQuery } from 'react-query';
import { getStudents, getStudentsbyPage } from '../../../../config/supaFunctions';
import Pagination from '../../../../ScreenComponents/WebinerComponent/Components/Pagination';

const Maincard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items to display per page

  const { data: allStudents, isLoading: allStudentsLoading, isError: allStudentsError } = useQuery(
    ['students'],
    getStudents
  );

  // Calculate totalItems based on the length of allStudents or default to 0
  const totalItems = allStudents?.length || 0;

  // Calculate startCount based on the current page and itemsPerPage
  const startCount = (currentPage - 1) * itemsPerPage;

  // Function to handle page change
  const onPageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Fetch data for the current page
  const {
    data: students,
    isLoading: studentsLoading,
    isError: studentsError,
  } = useQuery(['students', startCount, itemsPerPage], () => getStudentsbyPage(startCount, itemsPerPage));
  
  console.log("students :", students);
  console.log("studentsLoading :", studentsLoading);
  console.log("itemsPerPage :", itemsPerPage);
  console.log("startCount :", startCount);
  console.log("totalItems :", totalItems);

  return (
    <>
      <div className='grid py-16 mx-2 gap-14'>
        {allStudentsLoading ? (
          <p>Loading...</p>
        ) : allStudentsError ? (
          <p>Error...</p>
        ) : (
          <>
            {students && students.length > 0 ? (
              students.map((data) => (
                <Dashcard
                  key={data.key}
                  title={data.title}
                  name={data.name}
                  image={data.image}
                />
              ))
            ) : (
              <p>No students to display.</p>
            )}
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

export default Maincard;
