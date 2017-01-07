import React from 'react';
import { Line } from 'react-chartjs-2';

const options = {
  legend: {
    display: true,
    position: 'bottom',
    labels: {
      boxWidth: 14,
      fontSize: 13,
      fontStyle: 'bold',
      padding: 20,
      usePointStyle: true
    }
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero:true
      }
    }]
  }
}

export default React.createClass({
  render: function(){
    const x = ["01", "02", "03", "04", "05", "06"];
    const y = this.props.chart;
    const dataChart = {
      labels: x,
      datasets: [
        {
          label: 'Propuesta venta',
          borderColor: 'rgba(18, 59, 106, 1.0)',
          borderWidth: 2,
          pointBorderColor: 'rgba(18, 59, 106, 1.0)',
          pointBackgroundColor: '#ffffff',
          pointBorderWidth: 2,
          pointRadius: 4,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(18, 59, 106, 1.0)',
          fill: false,
          data: y[0]
        },
        {
          label: 'Matriculación',
          borderColor: 'rgba(9, 160, 187,1.0)',
          borderWidth: 2,
          pointBorderColor: 'rgba(9, 160, 187,1.0)',
          pointBackgroundColor: '#ffffff',
          pointBorderWidth: 2,
          pointRadius: 4,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(9, 160, 187,1.0)',
          fill: false,
          data: y[1]
        },
        {
          label: 'Entrega',
          borderColor: 'rgba(15, 189, 119,1.0)',
          borderWidth: 2,
          pointBorderColor: 'rgba(15, 189, 119,1.0)',
          pointBackgroundColor: '#ffffff',
          pointBorderWidth: 2,
          pointRadius: 4,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(15, 189, 119,1.0)',
          fill: false,
          data: y[2]
        },
        {
          label: 'Campañas',
          borderColor: 'rgba(255, 197, 20,1.0)',
          borderWidth: 2,
          pointBorderColor: 'rgba(255, 197, 20,1.0)',
          pointBackgroundColor: '#ffffff',
          pointBorderWidth: 2,
          pointRadius: 4,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(255, 197, 20,1.0)',
          fill: false,
          data: y[3]
        }
      ]
    };
    return (
      <div>
        <p>{this.props.label}</p>
        <Line
          data={dataChart}
          options={options}
        />
      </div>
    );
  }
})