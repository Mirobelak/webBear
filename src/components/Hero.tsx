import React from 'react';
import FigmaLogo from '../../public/figma.svg';
import MoneybackBadge from '../../public/money_back.svg';
import Image from 'next/image';
import Stars from '../../public/stars.svg';
import Button from './ui/Button';

const Hero = () => {
  return (
    <section className='  flex justify-center items-center  flex-col pt-[50px]'>
      <h1 className=' text-white text-center text-[64px] max-w-[944px] font-bold leading-[72px]  max-md:text-5xl max-md:leading-[53px]'>
        Weby, ktoré{' '}
        <span className='bg-clip-text text-transparent bg-gradient-to-r from-custom-blue to-custom-green'>
          zatienia
        </span>{' '}
        Vašu konkurenciu
      </h1>
      <p className='text-white text-center md:text-xl leading-8 self-center max-w-[520px] mt-7 '>
        Získajte svoj vysnívaný web s vlastným dizajnom aj Vy a premeňte Vašich
        návštevníkov na zákazníkov
      </p>
      <div className='flex items-center gap-8 my-10'>
        <div className='flex items-center  h-[50px]'>
          <Image src={FigmaLogo} alt='Figma Logo' width={30} height={30} />
          <div className='text-white text-opacity-70 text-center text-sm self-center ml-2'>
            Navrhujeme vo Figme
          </div>
        </div>
        <div className='flex items-center  h-[50px]'>
          <Image
            src={MoneybackBadge}
            alt='Moneyback Badge'
            width={30}
            height={30}
          />
          <div className='text-white text-opacity-70 text-center text-sm self-center ml-2'>
            Garancia spokojnosti
          </div>
        </div>
      </div>
      <div className=' flex flex-col md:flex-row  justify-between  gap-5 mt-6  items-center '>
        <div className='flex flex-col items-center'>
          <Image
            src={Stars}
            alt='stars-icon'
            width={105}
            height={24}
            layout='intrinsic'
            className='justify-center items-center overflow-hidden max-w-full'
          />
          <div className='justify-center text-white text-opacity-70 text-center text-sm self-stretch whitespace-nowrap mt-3.5'>
            “Dvojnásobná konverzia”
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <Image
            src={Stars}
            alt='stars-icon'
            width={105}
            height={24}
            layout='intrinsic'
            className='justify-center items-center overflow-hidden max-w-full'
          />
          <div className='justify-center text-white text-opacity-70 text-center text-sm self-stretch whitespace-nowrap mt-3.5'>
            “Rozšírený dosah na trhu”
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <Image
            src={Stars}
            alt='stars-icon'
            width={105}
            height={24}
            layout='intrinsic'
            className='justify-center items-center overflow-hidden max-w-full'
          />
          <div className='justify-center text-white text-opacity-70 text-center text-sm self-stretch whitespace-nowrap mt-3.5'>
            “Nárast počtu zobrazení”
          </div>
        </div>
      </div>

      <div className='mt-8'>
        <Button text='Začať projekt' size='large' navbar={false} />
      </div>
      <span className='text-white text-opacity-70 text-center text-xs self-center mt-6 max-md:max-w-full'>
        Odpovieme vám do 45 minút. Prejdite si dotazník.
      </span>
    </section>
  );
};

export default Hero;
