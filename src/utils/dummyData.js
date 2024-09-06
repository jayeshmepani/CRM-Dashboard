const dummyData = {
  '1 Day': {
    stats: [
      { title: 'New Users', value: 6 },
      { title: 'Sales', value: 2000, isCurrency: true },
      { title: 'Conversions', value: '25%' },
      { title: 'Bounce Rate', value: '35%' },
    ],
    goals: [
      { name: 'Subscription Sign-ups', percentage: 50 },
      { name: 'Monthly Revenue Target', percentage: 60 },
      { name: 'Annually Revenue Target', percentage: 73 },
    ],
    chartData: [
      { name: '9 AM', value: 1 },
      { name: '12 PM', value: 2 },
      { name: '3 PM', value: 1 },
      { name: '6 PM', value: 3 },
    ],
  },
  '1 Week': {
    stats: [
      { title: 'New Users', value: 90 },
      { title: 'Sales', value: 15000, isCurrency: true },
      { title: 'Conversions', value: '20%' },
      { title: 'Bounce Rate', value: '40%' },
    ],
    goals: [
      { name: 'Subscription Sign-ups', percentage: 70 },
      { name: 'Monthly Revenue Target', percentage: 80 },
      { name: 'Annually Revenue Target', percentage: 89 },
    ],
    chartData: [
      { name: 'Monday', value: 7 },
      { name: 'Tuesday', value: 8 },
      { name: 'Wednesday', value: 16 },
      { name: 'Thursday', value: 23 },
      { name: 'Friday', value: 14 },
      { name: 'Saturday', value: 15 },
      { name: 'Sunday', value: 7 },
    ],
  },
  '1 Month': {
    stats: [
      { title: 'New Users', value: 550 },
      { title: 'Sales', value: 50000, isCurrency: true },
      { title: 'Conversions', value: '22%' },
      { title: 'Bounce Rate', value: '38%' },
    ],
    goals: [
      { name: 'Subscription Sign-ups', percentage: 85 },
      { name: 'Monthly Revenue Target', percentage: 90 },
      { name: 'Annually Revenue Target', percentage: 95 },
    ],
    chartData: [
      { name: 'Week 1', value: 90 },
      { name: 'Week 2', value: 145 },
      { name: 'Week 3', value: 125 },
      { name: 'Week 4', value: 190 },
    ],
  },
  '1 Year': {
    stats: [
      { title: 'New Users', value: 7000 },
      { title: 'Sales', value: 730000, isCurrency: true },
      { title: 'Conversions', value: '23%' },
      { title: 'Bounce Rate', value: '37%' },
    ],
    goals: [
      { name: 'Subscription Sign-ups', percentage: 93 },
      { name: 'Monthly Revenue Target', percentage: 97 },
      { name: 'Annually Revenue Target', percentage: 99 }, // You might want to cap this at 100%
    ],
    chartData: [
      { name: 'Q1', value: 1700 },
      { name: 'Q2', value: 2300 },
      { name: 'Q3', value: 1400 },
      { name: 'Q4', value: 1600 },
    ],
  },
};

export default dummyData;
