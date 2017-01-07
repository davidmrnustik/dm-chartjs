import React from 'react';
import { Chart } from 'react-chartjs-2';

export default React.createClass({
  componentDidMount: function(){
    const x = ["01", "02", "03", "04", "05", "06"];
    const y = this.props.chart;
    const ctx = this.refs.chartBar.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 280);
    gradient.addColorStop(0, 'rgba(9, 160, 187,0.4)');   
    gradient.addColorStop(1, 'rgba(9, 160, 187,0)');
    const dataChart = {
      labels: x,
      datasets: [
        {
          label: 'Propuesta venta',
          borderColor: 'rgba(9, 160, 187,1.0)',
          borderWidth: 2,
          pointBorderColor: 'rgba(9, 160, 187,1.0)',
          pointBackgroundColor: '#ffffff',
          pointBorderWidth: 2,
          pointRadius: 4,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(9, 160, 187,1.0)',
          backgroundColor: gradient,
          pointStyle: 'circle',
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
          backgroundColor: gradient,
          pointStyle: 'triangle',
          data: y[1]
        },
        {
          label: 'Entrega',
          borderColor: 'rgba(9, 160, 187,1.0)',
          borderWidth: 2,
          pointBorderColor: 'rgba(9, 160, 187,1.0)',
          pointBackgroundColor: '#ffffff',
          pointBorderWidth: 2,
          pointRadius: 4,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(9, 160, 187,1.0)',
          backgroundColor: gradient,
          pointStyle: 'star',
          data: y[2]
        },
        {
          label: 'Campañas',
          borderColor: 'rgba(9, 160, 187,1.0)',
          borderWidth: 2,
          pointBorderColor: 'rgba(9, 160, 187,1.0)',
          pointBackgroundColor: '#ffffff',
          pointBorderWidth: 2,
          pointRadius: 4,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(9, 160, 187,1.0)',
          backgroundColor: gradient,
          pointStyle: 'rectRot',
          data: y[3]
        }
      ]
    };
    const options = {

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