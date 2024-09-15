'use client';
import React, { useCallback, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '../Avatar';
import MenuItem from './MenuItem';

const UserMenu = () => {
  const [isOpen, setIsopen] = useState(false);

  const toggleFucntion = useCallback(() => {
    debugger;
    setIsopen((value) => !value);
  }, []);
  const handlemenuItem = () => {};
  return (
    <div className='relative'>
      <div className='flex flex-row items-center gap-3'>
        {/* home */}
        <div
          onClick={() => {}}
          className='hidden md:block cursor-pointer font-semibold text-sm  rounded-full px-4 py-3 hover:bg-neutral-100 translate'>
          Airbnb your home
        </div>
        {/* user */}
        <div
          onClick={toggleFucntion}
          className='p-2 md-py-1 md:px-2 border-[1px] border-neutral-100 flex flex-row rounded-full gap-3 cursor-pointer hover-shadow-md transition items-center'>
          <AiOutlineMenu />
          <div className='hidden md:block'>
            <Avatar />
          </div>
        </div>
      </div>
      {/* toggle open  */}
      {isOpen && (
        <div className='absolute w-[40vw] rounded-x shadow-md md:w-3/4 bg-white overflow-hidden right-0yop-12 text-sm '>
          <div className='flex flex-col cursor-/pointer'>
            <>
              <MenuItem onClick={() => {}} label='login' />
              <MenuItem onClick={() => {}} label='Signup' />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
