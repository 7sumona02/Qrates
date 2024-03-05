import React from 'react';
import hero from '../assets/images/hero.jpg';
import hero2 from '../assets/images/hero2.jpg';

const Hero = () => {
  return (
    <div className="bg-black pb-[670px]">
      <div className='text-white px-20 pb-10'>
        <button className='text-white font-medium mt-24 border-2 border-white px-3 py-2'>FOR ARTISTS</button>
        <h1 className='font-bold text-6xl mt-10 leading-[70px]'>Music in your <br />hands. <br /> Without the <br /> barriers.</h1>
        <p className='text-xl font-medium mt-10'>Full-service production, a <br />global retail network, customer <br /> support - and you keep up to <br /> 85% of profits. </p>
      </div>
      <div className='ml-32'>
        <img src={hero2} alt="Hero Image" className="mt-[160px] ml-[200px] w-[600px] h-auto transform -rotate-6" />
        <img src={hero} alt="Hero Image" className="ml-[500px] -mt-[1300px] w-[600px] h-auto transform rotate-6" />
      </div>
    </div>
  );
};

export default Hero;
