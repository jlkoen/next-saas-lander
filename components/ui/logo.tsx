'use client';

import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link href='/' className='block' aria-label='Logo'>
      <Image alt='Logo' src='/icon.svg' width={30} height={40} />
    </Link>
  );
};

export default Logo;
