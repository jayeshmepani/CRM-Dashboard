import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const TimeSelector = ({ setTimeRange }) => {
  const [selected, setSelected] = useState('1 Week');
  const { isDarkMode } = useTheme();

  const handleTimeChange = (e) => {
    const range = e.target.value;
    setSelected(range);
    setTimeRange(range);
  };

  return (
    <select
      value={selected}
      onChange={handleTimeChange}
      className={`p-2 rounded ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'}`}
    >
      <option value="1 Day">1 Day</option>
      <option value="1 Week">1 Week</option>
      <option value="1 Month">1 Month</option>
      <option value="1 Year">1 Year</option>
    </select>
  );
};

export default TimeSelector;
