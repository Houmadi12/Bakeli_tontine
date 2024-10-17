import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend,} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


export default class ChartComposant extends Component {
    constructor(props) {
        super(props);
        this.state = {
          chartData: {
            labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin','juillet'],
            datasets: [
              {
                label: '',
                data: [0, 40, 36, 38, 44, 38, 60],
                borderColor: '#20DF7F',
                backgroundColor: '#093545',
              },
            ],
          },
          chartOptions: {
            responsive: true,
            plugins: {
              legend: {
                position: 'bottom',
              }
            },
          },
        };
      }
    
    render(){
        const { chartData, chartOptions } = this.state;
        return (
          <div style={{ width: '100%', height: '100%'}} className='d-flex align-items-center'>
            <Line options={chartOptions} data={chartData} />
          </div>
        );
    }
}