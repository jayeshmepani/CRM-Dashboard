import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Cards from '../components/Cards';
import Chart from '../components/Chart';
import ProgressStats from '../components/ProgressStats';
import dummyData from '../utils/dummyData';
import Head from 'next/head';

const IndexPage = () => {
  const [stats, setStats] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [goals, setGoals] = useState([]);
  const [timeRange, setTimeRange] = useState('1 Week');

  useEffect(() => {
    fetch(`/api/dummy-data?range=${timeRange}`)
      .then((response) => response.json())
      .then((data) => {
        setStats(data.stats);
        setChartData(data.chartData);
        setGoals(data.goals);
      });
  }, [timeRange]);

  return (
    <div>
      <Navbar setTimeRange={setTimeRange} />
      <Cards stats={stats} />
      <ProgressStats goals={goals} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        <Chart chartData={chartData} chartType="line" />
        <Chart chartData={chartData} chartType="pie" />
        <Chart chartData={chartData} chartType="bar" />
      </div>
    </div>
  );
};

export default IndexPage;
