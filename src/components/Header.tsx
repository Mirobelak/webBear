import Image from 'next/image';
import React from 'react';
import logo from '../../public/logo.svg';
import Link from 'next/link';
import Button from './ui/Button';

const Header = () => {
  return (
    <header className='bg-black flex justify-between p-4 md:p-6'>
      <div className='flex items-center'>
        <Link href='/'>
          <Image src={logo} alt='WebBear-logo' width={151} height={35} />
        </Link>
      </div>
      <nav className='hidden md:flex text-white/90 gap-4 md:gap-8 items-center'>
        <Link href='/o-nas' className='hover:underline'>
          O nás
        </Link>
        <Link href='/služby' className='hover:underline'>
          Služby
        </Link>
        <Link href='/kontakt' className='hover:underline'>
          Kontakt
        </Link>
        <Button text='Začať projekt' size='small' navbar={true} />
      </nav>
      <div className='md:hidden flex items-center'>
        <button className='bg-gradient-to-r from-custom-blue to-custom-green text-gray-900 font-semibold px-4 md:px-5 py-2 md:py-2.5 rounded-xl hover:scale-90 ease-in-out transition-all duration-200'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 text-gray-900'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2.5'
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
