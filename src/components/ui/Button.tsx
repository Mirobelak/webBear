import Image from 'next/image';
import React from 'react';
import arrow from '../../../public/arrow.svg';

type Props = {
  text: string;
  size: 'small' | 'medium' | 'large';
  navbar: boolean;
};

function Button({ text, size = 'small', navbar }: Props) {
  return (
    <button
      className={`${navbar ?  "hidden md:flex" : "flex"} ${size === "large" && "w-[220px] h-[70px]"} items-center justify-center gap-2 md:gap-3 bg-gradient-to-r from-custom-blue to-custom-green text-gray-900 font-semibold px-4 md:px-5 py-2 md:py-2.5 rounded-xl hover:scale-90 ease-in-out transition-all duration-200`}
    >
      {text}
      <i>
        <Image src={arrow} alt='arrow' width={20} height={20} />
      </i>
    </button>
  );
}

export default Button;
