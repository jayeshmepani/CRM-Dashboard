import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Chart from '../components/Chart';
import ProgressStats from '../components/ProgressStats';
import dummyData from '../utils/dummyData';
import Link from 'next/link'; // Import Link component from Next.js

const AnalyticsPage = () => {
  const [stats, setStats] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [goals, setGoals] = useState([]);
  const [timeRange, setTimeRange] = useState('1 Week');

  useEffect(() => {
    // Fetch data or use dummy data
    const data = dummyData[timeRange];
    if (data) {
      setStats(data.stats);
      setChartData(data.chartData);
      setGoals(data.goals);
    }
  }, [timeRange]);

  return (
    <div>
      <Navbar setTimeRange={setTimeRange} />
      <div className="p-4">
        <div className="mb-8">
          <ProgressStats goals={goals} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <Chart chartData={chartData} chartType="line" />
          <Chart chartData={chartData} chartType="pie" />
          <Chart chartData={chartData} chartType="bar" />
        </div>
        {/* Button to go back to the main page */}
        <div className="mt-8">
          <Link href="/" className="px-4 py-2 bg-blue-500 text-white rounded shadow-md hover:bg-blue-600">
            Go to Main Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
