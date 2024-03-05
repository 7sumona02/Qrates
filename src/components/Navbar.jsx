import React, { useState } from 'react';
import qlogo from '../assets/images/qlogo.svg';
import { FaSearch, FaShoppingCart, FaAngleDown } from 'react-icons/fa';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className='flex justify-between items-center'>
      <div className='flex items-center gap-4 px-8 py-8'>
        <img src={qlogo} alt="logo" className='w-12 h-12' />
        <div className='relative'>
          <button onClick={toggleDropdown} className='flex items-center text-xl font-semibold'>
            DISCOVER MUSIC
            <FaAngleDown className='ml-1' />
          </button>
          {showDropdown && (
            <div className='absolute top-full left-0 bg-black mt-4'>
              <a href="#" className='block px-4 py-2 text-white text-2xl pb-4 mt-4'>Featured</a>
              <a href="#" className='block px-4 py-2 text-white text-2xl pb-4'>Genres</a>
              <a href="#" className='block px-4 py-2 text-white text-2xl pb-4'>New Releases</a>
            </div>
          )}
        </div>
        <div className='flex gap-4 text-xl font-semibold'>
          <a href="#">FOR ARTISTS</a>
          <a href="#">FOR FANS</a>
        </div>
        <div className='flex gap-4 text-2xl ml-2'>
          <FaSearch />
          <FaShoppingCart />
        </div>
      </div>
      <div className='px-8 py-8 flex gap-4'>
        <button className='text-xl font-semibold'>LOG IN</button>
        <button className='text-xl font-semibold bg-gray-400 text-white px-6 py-3 rounded-full'>MAKE YOUR OWN</button>
      </div>
    </div>
  );
};

export default Navbar;
