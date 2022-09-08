import React from 'react';
import Todo from './Todo';
import { useSelector } from 'react-redux';

const ToDoList = () => {
  const allTodos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);
  const { status, colors } = filters;
  const filteredByStatus = allTodos.filter((todo) =>
    status === 'All'
      ? todo
      : status === 'Complete'
      ? todo.completed === true
      : todo.completed === false
  );

  const filteredByColor = filteredByStatus.filter((todo) => {
    if (colors.length > 0) {
      return colors.includes(todo?.color);
    }
    return true;
  });
  console.log(filteredByColor);

  return (
    <div className='mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto'>
      {/* <!-- todo --> */}
      {filteredByColor.map((todo) => (
        <Todo key={todo.id} singleTodo={todo} />
      ))}
    </div>
  );
};

export default ToDoList;
