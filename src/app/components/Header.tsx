'use client';

import Image from 'next/image';
import React, { FC } from 'react';

const Header: FC = () => {
  return (
    <header className="w-full shadow-sm bg-white">
      <Image
        src="/nequi-header.png"
        alt="Header Nequi"
        width={1920}
        height={200}
        className="w-full h-auto object-cover"
        priority
      />
    </header>
  );
};

export default Header;
