import React from 'react'
import cas from '../assets/images/cas.jpg';
import cd from '../assets/images/cd.jpg';

const Info = () => {
  return (
    <div className='py-20 bg-gray-200'>
        <h1 className='text-4xl font-medium flex justify-center'>Choose from two formats with promised quality</h1>
        <div className='text-2xl font-medium flex justify-center'>
        <div className="flex w-screen pt-20">
            <div className="flex-1 border-2 border-black p-4 text-center pt-14 pb-10">
                <h1 className='text-4xl'>Vinyl</h1>
                <p className='pt-8 font-normal w-[600px] ml-32'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum necessitatibus aperiam voluptas optio inventore excepturi, odit, vel soluta nostrum vitae quisquam consequuntur odio dolor modi voluptate harum labore! Eos, corporis.</p>
                <img src={cd} alt="cas" className='w-[600px] pt-20 ml-32' />
            </div>
            <div className="flex-1 border-2 border-black p-4 text-center pt-14 pb-10" style={{ marginLeft: '-2px' }}>
                <h1 className='text-4xl'>Cassette</h1>
                <p className='pt-8 font-normal w-[600px] ml-32'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum necessitatibus aperiam voluptas optio inventore excepturi, odit, vel soluta nostrum vitae quisquam consequuntur odio dolor modi voluptate harum labore! Eos, corporis.</p>
                <img src={cas} alt="cas" className='w-[600px] pt-20 ml-32' />
            </div>
        </div>
        </div>
    </div>
  )
}

export default Info