import React from 'react';
import { Chart } from 'react-chartjs-2';

export default React.createClass({
  componentDidMount: function(){
    const x = ["01", "02", "03", "04", "05", "06"];
    const y = this.props.chart;
    const ctx = this.refs.chartBar.getContext('2d');

    const gradientBlue = ctx.createLinearGradient(0, 0, 0, 100);
    gradientBlue.addColorStop(0, 'rgba(18, 59, 106,0.5)');   
    gradientBlue.addColorStop(1, 'rgba(18, 59, 106,0)');

    const gradientTurquoise = ctx.createLinearGradient(0, 0, 0, 200);
    gradientTurquoise.addColorStop(0, 'rgba(9, 160, 187,0.5)');   
    gradientTurquoise.addColorStop(1, 'rgba(9, 160, 187,0)');

    const gradientGreen = ctx.createLinearGradient(0, 0, 0, 300);
    gradientGreen.addColorStop(0, 'rgba(15, 189, 119,0.5)');   
    gradientGreen.addColorStop(1, 'rgba(15, 189, 119,0)');

    const gradientOrange = ctx.createLinearGradient(0, 0, 0, 300);
    gradientOrange.addColorStop(0, 'rgba(255,197,20,0.5)');   
    gradientOrange.addColorStop(1, 'rgba(255,197,20,0)');

    const dataChart = {
      labels: x,
      datasets: [
        {
          label: 'Propuesta venta',
          borderColor: 'rgba(18, 59, 106,1.0)',
          borderWidth: 2,
          pointBorderColor: 'rgba(18, 59, 106,1.0)',
          pointBackgroundColor: '#ffffff',
          pointBorderWidth: 2,
          pointRadius: 4,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(18, 59, 106,1.0)',
          backgroundColor: gradientBlue,
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
          backgroundColor: gradientTurquoise,
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
          backgroundColor: gradientGreen,
          data: y[2]
        },
        {
          label: 'Campañas',
          borderColor: 'rgba(255,197,20,1.0)',
          borderWidth: 2,
          pointBorderColor: 'rgba(255,197,20,1.0)',
          pointBackgroundColor: '#ffffff',
          pointBorderWidth: 2,
          pointRadius: 4,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(255,197,20,1.0)',
          backgroundColor: gradientOrange,
          data: y[3]
        }
      ]
    };
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
    }

    new Chart(ctx, {
      type:'line',
      data: dataChart,
      options: options
    })
  },
  render: function(){
    return (
      <div>
        <p>{this.props.label}</p>
        <canvas className="chartBar" width="300" height="150" ref="chartBar" />
      </div>
    );
  }
})