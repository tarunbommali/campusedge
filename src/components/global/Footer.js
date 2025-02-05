import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../store/themeSlice';

const Footer = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.theme) || 'light';

  useEffect(() => {
    document.documentElement.classList.toggle('dark', currentTheme === 'dark');
  }, [currentTheme]);
 
  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className='flex flex-col md:flex-row justify-between items-center text-center py-4 border-t bg-white dark:bg-gray-800 dark:text-white px-4'>
      <span>Designed & Developed by Department of IT, JNTU-GV 2025.</span>
      <button 
        onClick={handleToggleTheme} 
        className='px-4 py-2 my-2 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition'
      >
        {currentTheme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
  );
};

export default Footer;
