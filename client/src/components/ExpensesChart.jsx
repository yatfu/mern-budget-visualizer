import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const ExpensesChart = ({categories, values}) => {
  // Random values for demo
  const data = {
    labels: categories,
    datasets: [
      {
        label: '$',
        data: values,
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',    // red
          'rgba(54, 162, 235, 0.7)',    // blue
          'rgba(255, 206, 86, 0.7)',    // yellow
          'rgba(75, 192, 192, 0.7)',    // green
        ],
        borderColor: 'transparent',
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: '40%',
    plugins: {
      legend: {
        position: 'right',
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default ExpensesChart;