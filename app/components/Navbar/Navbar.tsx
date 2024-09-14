import React from 'react';
import Container from '../Container';
import Logo from './Logo';

export const Navbar = () => {
  return (
    <div className='fixed bg-white w-full z-20 shadow-sm'>
      <div className='py-4 border-b-[1px]'>
        <Container>
          <div className='flex flex-row justify-between items-center gap-3 md:gap-0'>
            <Logo />
          </div>
        </Container>
      </div>
    </div>
  );
};
