import React, { useState } from 'react';
import Alimnicard from './Alimnicard';
import Pagination from '../../../../ScreenComponents/WebinerComponent/Components/Pagination';
import { useQuery } from 'react-query';
import { getAlumniByPage } from '../../../../Config/supaFunctions';
import { alumnilistdata } from './data';

const itemsPerPage = 5; // Number of items to display per page

const MainalumniCard = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index of the first and last items to display on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Fetch data using React Query
  const { data: alumni, isLoading: alumniLoading, isError: alumniError } = useQuery(
    ['alumniByPage', startIndex, endIndex],
    () => getAlumniByPage(startIndex, endIndex)
  );

  // Function to handle page change
  const onPageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <div className='grid py-16 mx-2 gap-14'>
        {alumni?.map((data) => (
          <Alimnicard
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
        totalItems={alumnilistdata.length}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </>
  );
};

export default MainalumniCard;
