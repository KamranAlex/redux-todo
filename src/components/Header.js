import React from 'react';
import doubleTickIMG from '../assets/images/double-tick.png';
import notesIMG from '../assets/images/notes.png';
import { AiOutlinePlusCircle } from 'react-icons/ai';

const Header = () => {
  return (
    <div>
      <form className='flex items-center bg-gray-100 px-4 py-4 rounded-md'>
        <img src={notesIMG} className='w-6 h-6' alt='Add todo' />
        <input
          type='text'
          placeholder='Type your todo'
          className='w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500'
        />
        <button
          type='submit'
          className='appearance-none w-8 h-8 bg-no-repeat bg-contain'
        >
          <AiOutlinePlusCircle style={{ height: '1.5em', width: '1.5em' }} />
        </button>
      </form>

      <ul className='flex justify-between my-4 text-xs text-gray-500'>
        <li className='flex space-x-1 cursor-pointer'>
          <img className='w-4 h-4' src={doubleTickIMG} alt='Complete' />
          <span className='font-semibold text-md'>Complete All Tasks</span>
        </li>
        <li className='cursor-pointer font-semibold text-md'>
          Clear completed
        </li>
      </ul>
    </div>
  );
};

export default Header;
