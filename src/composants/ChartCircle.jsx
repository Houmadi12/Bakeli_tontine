import React, { Component } from 'react';
import { Doughnut, Line } from 'react-chartjs-2';
import {Chart as ChartJS, ArcElement, Tooltip, Legend,} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Tooltip, Legend);


class ChartCircle extends Component {  
    constructor(props) {
        super(props);
        this.state = {
            data: {
              labels: ['Terminé', 'En cours', 'Archivé', 'Bloqué'],
              datasets: [
                {
                  data: [ 49.48, 9.04,23.62, 18, ],
                  backgroundColor: ["#093545","#FEDEBC","#FFA8A7",'#20DF7F']
                },
              ],
            },
            options: {
              responsive: true,
              plugins: {
                legend: {
                  position: 'bottom',
                },
              },
            },
          };
      }
    
    render() {
      const { data, options } = this.state;
      return (
        <div style={{width:"100%", height: "100%"}} className='d-flex justify-content-center'>
            <Doughnut data={data} options={options} />
        </div>
      );
    }
  }

  export default ChartCircle;