import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ProgressStats = ({ goals }) => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`shadow-md rounded p-4 my-4 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}
      style={{
        width: '95%',
        margin: '0 auto'
      }}
    >
      <h2 className="text-xl font-bold mb-4">Goal Progress</h2>
      {goals.map((goal, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-lg">{goal.name}</h3>
          <div className="w-full bg-gray-200 rounded-full h-6">
            <div
              className={`h-6 rounded-full ${isDarkMode ? 'bg-green-500' : 'bg-green-500'}`}
              style={{ width: `${goal.percentage}%` }}
            >
              <span className="text-white text-sm ml-2">{goal.percentage}%</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgressStats;
