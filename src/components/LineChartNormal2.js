import React from 'react';
import { Chart, Line } from 'react-chartjs-2';

Chart.defaults.global.defaultFontFamily = '"MuseoSans", arial, helvetica, sans-serif';
const yLabelString = 'Nº días desde el alta';

const options = {
  legend: {
    display: true,
    position: 'top',
    fullWidth: false,
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
      },
      scaleLabel: {
        display: true,
        labelString: yLabelString
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
          label: 'Compras',
          borderColor: 'rgba(18, 59, 106, 1.0)',
          borderWidth: 2,
          pointBorderColor: 'rgba(18, 59, 106, 1.0)',
          pointBackgroundColor: '#ffffff',
          pointBorderWidth: 2,
          pointRadius: 3,
          pointHoverRadius: 4,
          pointHoverBackgroundColor: 'rgba(18, 59, 106, 1.0)',
          backgroundColor: 'rgba(18, 59, 106, 1.0)',
          fill: false,
          data: y[0]
        },
        {
          label: 'Logísticas',
          borderColor: 'rgba(9, 160, 187,1.0)',
          borderWidth: 2,
          pointBorderColor: 'rgba(9, 160, 187,1.0)',
          pointBackgroundColor: '#ffffff',
          pointBorderWidth: 2,
          pointRadius: 3,
          pointHoverRadius: 4,
          pointHoverBackgroundColor: 'rgba(9, 160, 187,1.0)',
          backgroundColor: 'rgba(9, 160, 187,1.0)',
          fill: false,
          data: y[1]
        },
        {
          label: 'Propuestas Venta',
          borderColor: 'rgba(15, 189, 119,1.0)',
          borderWidth: 2,
          pointBorderColor: 'rgba(15, 189, 119,1.0)',
          pointBackgroundColor: '#ffffff',
          pointBorderWidth: 2,
          pointRadius: 3,
          pointHoverRadius: 4,
          pointHoverBackgroundColor: 'rgba(15, 189, 119,1.0)',
          backgroundColor: 'rgba(15, 189, 119,1.0)',
          fill: false,
          data: y[2]
        },
        {
          label: 'Cobros/Pagos',
          borderColor: 'rgba(255, 197, 20,1.0)',
          borderWidth: 2,
          pointBorderColor: 'rgba(255, 197, 20,1.0)',
          pointBackgroundColor: '#ffffff',
          pointBorderWidth: 2,
          pointRadius: 3,
          pointHoverRadius: 4,
          pointHoverBackgroundColor: 'rgba(255, 197, 20,1.0)',
          backgroundColor: 'rgba(255, 197, 20,1.0)',
          fill: false,
          data: y[3]
        },
        {
          label: 'Trámites Tráfico',
          borderColor: 'rgba(169, 68, 66,1.0)',
          borderWidth: 2,
          pointBorderColor: 'rgba(169, 68, 66,1.0)',
          pointBackgroundColor: '#ffffff',
          pointBorderWidth: 2,
          pointRadius: 3,
          pointHoverRadius: 4,
          pointHoverBackgroundColor: 'rgba(169, 68, 66,1.0)',
          backgroundColor: 'rgba(169, 68, 66,1.0)',
          fill: false,
          data: y[4]
        },
        {
          label: 'Campañas',
          borderColor: 'rgba(20, 181, 255,1.0)',
          borderWidth: 2,
          pointBorderColor: 'rgba(20, 181, 255,1.0)',
          pointBackgroundColor: '#ffffff',
          pointBorderWidth: 2,
          pointRadius: 3,
          pointHoverRadius: 4,
          pointHoverBackgroundColor: 'rgba(20, 181, 255,1.0)',
          backgroundColor: 'rgba(20, 181, 255,1.0)',
          fill: false,
          data: y[5]
        },
        {
          label: 'Taller/Posventa',
          borderColor: 'rgba(255, 61, 20,1.0)',
          borderWidth: 2,
          pointBorderColor: 'rgba(255, 61, 20,1.0)',
          pointBackgroundColor: '#ffffff',
          pointBorderWidth: 2,
          pointRadius: 3,
          pointHoverRadius: 4,
          pointHoverBackgroundColor: 'rgba(255, 61, 20,1.0)',
          backgroundColor: 'rgba(255, 61, 20,1.0)',
          fill: false,
          data: y[6]
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