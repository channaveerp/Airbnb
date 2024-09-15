'use client';
import Image from 'next/image';
import React from 'react';
import avatar from '../public/images/avatar.png';

const Avatar = () => {
  return (
    <Image
      alt='avatar'
      src={avatar}
      width={30}
      height={30}
      className='rounded-full'
    />
  );
};

export default Avatar;
