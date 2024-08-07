import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Link } from 'react-router-dom';
import './Financial.css';
import ReadMoreButton from '../ReadMore/ReadMoreButton';

// Register necessary components and plugins
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

const dataSets = [
  { label: 'Total Income(₹ in million)', data: [47240, 45353, 69415, 62913, 67903], years: ['FY20', 'FY21', 'FY22', 'FY23', 'FY24'] },
  { label: 'Exports(₹ in million)', data: [26312, 30594, 45459, 33357, 40923], years: ['FY20', 'FY21', 'FY22', 'FY23', 'FY24'] },
  { label: 'EBITDA(₹ in million)', data: [8653, 8270, 15100, 9418, 9949], years: ['FY20', 'FY21', 'FY22', 'FY23', 'FY24'] },
  { label: 'PBT(₹ in million)', data: [4212, 4451, 10917, 5543, 5163], years: ['FY20', 'FY21', 'FY22', 'FY23', 'FY24'] },
  { label: 'PAT(₹ in million)', data: [3418, 3457, 8150, 4219, 3896], years: ['FY20', 'FY21', 'FY22', 'FY23', 'FY24'] },
  { label: 'EPS(₹ per share)', data: [0.67, 0.68, 1.63, 0.84, 0.78], years: ['FY20', 'FY21', 'FY22', 'FY23', 'FY24'] },
];

const Financial = () => {
  const renderCharts = () => {
    return dataSets.map((dataset, index) => {
      // Define an array of five different colors
      const colors = ['#febd2a', '#5B8678', '#58595B', '#9fa0a1', '#D1D3D4'];

      const data = {
        labels: dataset.years,
        datasets: [
          {
            label: dataset.label,
            backgroundColor: colors,
            borderColor: colors,
            borderWidth: 1,
            hoverBackgroundColor: colors.map(color => `${color}AA`), // Add transparency for hover
            hoverBorderColor: colors,
            data: dataset.data,
            barThickness: 21, // Adjust bar thickness for spacing
          },
        ],
      };

      const options = {
        indexAxis: 'y', // Make the chart horizontal
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                return context.raw;
              },
            },
          },
          datalabels: {
            anchor: 'end',
            align: 'end',
            formatter: (value) => value,
            color: 'black',
            font: {
              weight: 'bold',
            },
          },
        },
        scales: {
          x: {
            beginAtZero: true,
            ticks: {
              display: false, // Hide the x-axis labels
            },
            grid: {
              display: false, // Remove x-axis grid lines
            },
          },
          y: {
            grid: {
              display: false, // Remove y-axis grid lines
            },
          },
        },
        layout: {
          padding: {
            top: 100,
            bottom: 100,
            right: 40,
          },
        },
        maintainAspectRatio: false,
      };

      return (
        <div key={index} style={{ padding: '8px', height: '380px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h4 className='pt-4' style={{ textAlign: 'center', marginBottom: '10px' }}>{dataset.label}</h4>
          <div style={{ flexGrow: 1, width: '80%' }}>
            <Bar data={data} options={options} />
          </div>
        </div>
      );
    });
  };

  return (
    <div className='marginal graph'>
      <h2 className='text-center text-[#febd2a] text-font text-7xl py-8'>
        Financial<span className='pl-10 text-[#58aba0] text-font'>Highlights</span>
      </h2>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay // Enable autoplay
        autoPlaySpeed={3000} // Speed of autoplay
        centerMode={false}
        containerClass=""
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3,
          },
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
          },
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
        style={{ width: '70%' }} // Adjust the width as needed
      >
        {renderCharts()}
      </Carousel>
      <div className='mb-4'>
        <Link to={"/financial-highlights"}><ReadMoreButton/></Link>
      </div>
    </div>
  );
};

export default Financial;
