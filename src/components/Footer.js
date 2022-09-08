import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { colorChanged, statusChanged } from '../redux/filters/actions';

const Footer = () => {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const { status, colors } = filters;
  // console.log(colors);
  const currentColor = (newColor) => {
    // return colors.find((color) => color === newColor);
    return colors.includes(newColor);
  };

  const incompleteTodo = todos.filter((todo) => todo.completed === false);

  const handleStatusChange = (state) => {
    dispatch(statusChanged(state));
  };
  const handleColorChange = (color) => {
    if (colors.includes(color)) {
      dispatch(colorChanged(color, 'removed'));
    } else {
      dispatch(colorChanged(color, 'added'));
    }
  };

  return (
    <div className='mt-4 flex justify-between text-md text-gray-500'>
      <p>
        {incompleteTodo.length === 1
          ? `${incompleteTodo.length} Task Left`
          : incompleteTodo.length < 1
          ? 'No Task'
          : `${incompleteTodo.length} Tasks Left`}
      </p>
      <ul className='flex space-x-1 items-center text-md'>
        <li
          className={`cursor-pointer ${status === 'All' && 'font-bold'}`}
          onClick={() => handleStatusChange('All')}
        >
          All
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${status === 'Incomplete' && 'font-bold'}`}
          onClick={() => handleStatusChange('Incomplete')}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${status === 'Complete' && 'font-bold'}`}
          onClick={() => handleStatusChange('Complete')}
        >
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          className={`h-4 w-4 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
            currentColor('green') && 'bg-green-500'
          }`}
          onClick={() => handleColorChange('green')}
        ></li>
        <li
          className={`h-4 w-4 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
            currentColor('yellow') && 'bg-yellow-500'
          }`}
          onClick={() => handleColorChange('yellow')}
        ></li>
        <li
          className={`h-4 w-4 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
            currentColor('red') && 'bg-red-500'
          }`}
          onClick={() => handleColorChange('red')}
        ></li>
      </ul>
    </div>
  );
};

export default Footer;
