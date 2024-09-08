import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Cards = ({ stats = [] }) => { // Default to empty array if stats is undefined
  const { isDarkMode } = useTheme();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`shadow-md rounded p-4 text-center ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}
        >
          <h2 className="text-xl font-bold mb-2">{stat.title}</h2>
          <p className={`text-3xl font-bold ${stat.isCurrency ? 'text-green-500' : 'text-blue-500'}`}>
            {stat.isCurrency ? `$${stat.value}` : stat.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
