import Expertise from '@/components/Expertise';
import Header from '@/components/Header';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div className='bg-[#151515] flex flex-col justify-center'>
      <Header />
      <div className='justify-center items-stretch bg-neutral-900 flex w-full flex-col pb-12 px-6 max-md:max-w-full max-md:px-5'>
        <Hero />
        <Expertise />
      </div>
    </div>
  );
}
