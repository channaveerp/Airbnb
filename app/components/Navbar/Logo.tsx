'use client';
import Image from 'next/image';
import React from 'react';
import AirbnbLogo from '../../public/images/AirbnbLogo.png';

const Logo = () => {
  return (
    <Image
      alt='logo'
      width={100}
      height={100}
      src={AirbnbLogo}
      className='cursor-pointer'
    />
  );
};

export default Logo;
