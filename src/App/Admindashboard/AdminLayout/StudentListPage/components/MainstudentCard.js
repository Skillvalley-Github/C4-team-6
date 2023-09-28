import React, { useState } from 'react';
import StudentListcard from './StudentListcard';
import Pagination from '../../../../ScreenComponents/WebinerComponent/Components/Pagination';
import { useQuery } from 'react-query';
import { getStudentsbyPage } from '../../../../config/supaFunctions';
import { studentlistdata } from './data';

const itemsPerPage = 5; // Number of items to display per page

const MainstudentCard = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index of the first and last items to display on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Fetch data using React Query
  const { data: students, isLoading: stuLoading, isError: stuErr } = useQuery(
    ['studentsByPage', currentPage],
    () => getStudentsbyPage(startIndex, endIndex)
  );

  // Function to handle page change
  const onPageChange = (newPage) => {
    setCurrentPage(newPage);
  };
console.log("students :", students);
console.log("stuLoading :", stuLoading);
console.log("stuErr :", stuErr);
console.log("itemsPerPage :", itemsPerPage);
console.log("startIndex :", startIndex);
console.log("endIndex :", endIndex);

  return (
    <>
      <div className='grid py-16 mx-2 gap-14'>
        {students?.map((data) => (
          <StudentListcard
            key={data.key}
            title={data.title}
            name={data.name}
            image={data.image}
          />
        ))}
      </div>
      {/* Pagination component */}
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={studentlistdata.length}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </>
  );
};

export default MainstudentCard;
