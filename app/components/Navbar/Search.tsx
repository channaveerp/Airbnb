'use clinet';
import React from 'react';
import { BiSearch } from 'react-icons/bi';

const Search = () => {
  return (
    <div className='border-[1px] w-full md:w-auto rounded-full shadow-sm hover:shadow-md transition cursor-pointer py-2 px-2'>
      <div className='flex flex-row justify-between items-center'>
        <div className='text-sm font-semibold px-6'>search</div>
        <div className='hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center'>
          any week
        </div>
        <div className='text-sm pl-6 pr-2 text-grey-600  flex items-center gap-3'>
          Add guest
        </div>
        <div className='p-2 bg-rose-500 rounded-full text-white'>
          <BiSearch size={18} />
        </div>
      </div>
    </div>
  );
};

export default Search;
