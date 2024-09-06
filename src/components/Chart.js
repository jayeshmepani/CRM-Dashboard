import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  LineChart,
  Line,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
} from 'recharts';

// Custom color palette for the charts
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FB8341', '#A717F7', '#B1614F'];

// Custom labels for Pie Chart (with slice name and percentage)
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, chartData }) => {
  const RADIAN = Math.PI / 180;
  const radius = 19 + innerRadius + (outerRadius - innerRadius) * 1.; // Adjusted for a 3D-like effect
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="var(--label-color)"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
      fontSize={12}
    >
      {`${chartData[index].name}: ${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Chart = ({ chartData, chartType }) => {
  const chartWrapperRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    if (chartWrapperRefs[0].current) {
      chartWrapperRefs[0].current.style.transform = 'translateX(-1.3rem)';
    }
    if (chartWrapperRefs[1].current) {
      chartWrapperRefs[1].current.style.transform = 'translateX(-1.3rem)';
    }
    if (chartWrapperRefs[2].current) {
      chartWrapperRefs[2].current.style.transform = 'translateX(0.13rem)';
    }
  }, []);

  const { isDarkMode } = useTheme();
  
  return (
    <div className={`w-full h-64 p-4 shadow-md rounded ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      {chartType === 'line' ? (
        <ResponsiveContainer ref={chartWrapperRefs[0]}>
          <LineChart data={chartData}>
            <XAxis dataKey="name" stroke="var(--axis-color)" />
            <YAxis stroke="var(--axis-color)" />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="var(--axis-color)" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      ) : chartType === 'bar' ? (
        <ResponsiveContainer ref={chartWrapperRefs[1]}>
          <BarChart data={chartData}>
            <XAxis dataKey="name" stroke="var(--axis-color)" />
            <YAxis stroke="var(--axis-color)" />
            <Tooltip />
            <Bar dataKey="value" fill="var(--axis-color)" />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <ResponsiveContainer ref={chartWrapperRefs[2]}>
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={47} // Adjusted for the 3D effect
              outerRadius={73}
              fill="var(--label-color)"
              paddingAngle={3}
              dataKey="value"
              labelLine={true} // Disable the default label lines
              label={(props) => renderCustomizedLabel({ ...props, chartData })} // Add custom label
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default Chart;
