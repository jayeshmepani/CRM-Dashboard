import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Cards from '../components/Cards';
import dummyData from '../utils/dummyData';

const IndexPage = () => {
  const [stats, setStats] = useState([]);
  const [timeRange, setTimeRange] = useState('1 Week');

  useEffect(() => {
    // Fetch data or use dummy data
    const data = dummyData[timeRange];
    if (data) {
      setStats(data.stats);
    }
  }, [timeRange]);

  return (
    <div>
      <Navbar setTimeRange={setTimeRange} />
      <Cards stats={stats} />
    </div>
  );
};

export default IndexPage;
