import React from 'react';
import TimeSelector from './TimeSelector';
import { useTheme } from '../context/ThemeContext';

const Navbar = ({ setTimeRange }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav className={`flex justify-between items-center p-4 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-800 text-white'}`}>
      <h1 className="text-2xl font-bold">CRM Dashboard</h1>
      <div className="flex items-center space-x-4">
        <TimeSelector setTimeRange={setTimeRange} />
        <button
          onClick={toggleTheme}
          className={`px-4 py-2 rounded ${isDarkMode ? 'bg-gray-700' : 'bg-gray-600'} text-white`}
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
