import React from 'react';
import Icon from 'react-icons-kit';
import {calendar} from 'react-icons-kit/fa/calendar'
const Activities = () => {
  return (
    <div className='mb-10'>
      <p className='text-xl border-2 border-yellow-400 border-b-4 border-white ml-8  mb-4 w-24 text-center text-white'>Activities</p>

      <div className='overflow-y-auto h-40 w-full'>

        <div className='lg:ml-36 ml-10'>

          <div className='flex bg-indigo-900 h-16 text-white rounded-lg text-center w-5/6 drop-shadow-2xl mt-2 p-2'>
           <Icon icon={calendar} size="20"></Icon>
            <p className='text-2xs p-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, voluptatem!</p>
          </div>

          <div className='flex bg-indigo-900 h-16 text-white rounded-lg text-center w-5/6 drop-shadow-2xl mt-2 p-2'>
           <Icon icon={calendar} size="20"></Icon>
            <p className='text-2xs p-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, voluptatem!</p>
          </div>

          <div className='flex bg-indigo-900 h-16 text-white rounded-lg text-center w-5/6 drop-shadow-2xl mt-2 p-2'>
           <Icon icon={calendar} size="20"></Icon>
            <p className='text-2xs p-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, voluptatem!</p>
          </div>

          <div className='flex bg-indigo-900 h-16 text-white rounded-lg text-center w-5/6 drop-shadow-2xl mt-2 p-2'>
           <Icon icon={calendar} size="20"></Icon>
            <p className='text-2xs p-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, voluptatem!</p>
          </div>


          <div className='flex bg-indigo-900 h-16 text-white rounded-lg text-center w-5/6 drop-shadow-2xl mt-2 p-2'>
           <Icon icon={calendar} size="20"></Icon>
            <p className='text-2xs p-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, voluptatem!</p>
          </div>

          <div className='flex bg-indigo-900 h-16 text-white rounded-lg text-center w-5/6 drop-shadow-2xl mt-2 p-2'>
           <Icon icon={calendar} size="20"></Icon>
            <p className='text-2xs p-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, voluptatem!</p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Activities;