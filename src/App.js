import Footer from './components/Footer';
import Header from './components/Header';
import ToDoList from './components/TodoList';

function App() {
  return (
    <div className='font-tweb grid place-items-center bg-blue-100 h-screen px-6'>
      {/* <!-- navbar --> */}
      <div className='fixed top-0 left-0 text-center w-full header bg-violet-600 py-4 text-white font-bold text-lg shadow-lg'>
        Simple Todo Application with Redux
      </div>

      <div className='w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white'>
        {/* <!-- header --> */}
        <Header />

        <hr className='mt-4' />

        {/* <!-- todo list --> */}
        <ToDoList />

        <hr className='mt-4' />

        {/* <!-- footer --> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
