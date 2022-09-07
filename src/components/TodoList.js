import React from 'react';
import Todo from './Todo';
import { useSelector } from 'react-redux';

const ToDoList = () => {
  const todoItems = useSelector((state) => state.todos);

  return (
    <div className='mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto'>
      {/* <!-- todo --> */}
      {todoItems.map((todo) => (
        <Todo key={todo.id} singleTodo={todo} />
      ))}
    </div>
  );
};

export default ToDoList;
