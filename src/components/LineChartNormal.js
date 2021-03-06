import React from 'react';
import { Chart, Line } from 'react-chartjs-2';

Chart.defaults.global.defaultFontFamily = '"MuseoSans", arial, helvetica, sans-serif';

const options = {
  legend: {
    display: true,
    position: 'bottom',
    labels: {
      boxWidth: 14,
      fontSize: 11,
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
    const x = this.props.xAxes;
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
          backgroundColor: 'rgba(18, 59, 106, 1.0)',
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
          backgroundColor: 'rgba(9, 160, 187,1.0)',
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
          backgroundColor: 'rgba(15, 189, 119,1.0)',
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
          backgroundColor: 'rgba(255, 197, 20,1.0)',
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