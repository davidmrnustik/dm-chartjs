import React from 'react';
import { Chart } from 'react-chartjs-2';
//import pattern from 'patternomaly';

Chart.defaults.global.defaultFontFamily = '"MuseoSans", arial, helvetica, sans-serif';

export default React.createClass({
  componentDidMount() {
    const ctx = this.refs.chartBar.getContext('2d');
    const x = this.props.xAxes;
    const y = this.props.chart;
    const gradientGreen = ctx.createLinearGradient(0, 0, 0, 250);
    gradientGreen.addColorStop(0, 'rgba(15, 189, 119,0.75)');   
    gradientGreen.addColorStop(1, 'rgba(15, 189, 119,0)');
    const gradientOrange = ctx.createLinearGradient(0, 0, 0, 250);
    gradientOrange.addColorStop(0, 'rgba(255,197,20,0.75)');   
    gradientOrange.addColorStop(1, 'rgba(255,197,20,0)');
    const gradientRed = ctx.createLinearGradient(0, 0, 0, 250);
    gradientRed.addColorStop(0, 'rgba(255,0,0,0.75)');
    gradientRed.addColorStop(1, 'rgba(255,0,0,0)');
    const dataChart = {
      labels: x,
      datasets: [
        {
          label: 'Grupo 1',
          backgroundColor: gradientGreen,
          //backgroundColor: pattern.draw('diagonal-right-left', gradientGreen),
          borderWidth: 0,
          borderColor: 'rgba(15, 189, 119, 1.0)',
          hoverBackgroundColor: 'rgba(15, 189, 119, 0.7)',
          data: y[0]
        },
        {
          label: 'Grupo 2',
          backgroundColor: gradientOrange,
          //backgroundColor: pattern.draw('line', gradientOrange),
          borderWidth: 0,
          borderColor: 'rgba(255, 197, 20, 1.0)',
          hoverBackgroundColor: 'rgba(255, 197, 20, 0.7)',
          data: y[1]
        },
        {
          label: 'Grupo 3',
          backgroundColor: gradientRed,
          //backgroundColor: pattern.draw('line-vertical', gradientRed),
          borderWidth: 0,
          borderColor: 'rgba(255, 0, 0, 1.0)',
          hoverBackgroundColor: 'rgba(255, 0, 0, 0.7)',
          data: y[2]
        }
      ]
    };
    const options = {
      legend: {
        display: true,
        position: 'top',
        reverse: true,
        labels: {
          boxWidth: 14,
          fontSize: 11,
          fontStyle: 'bold',
          padding: 20,
          usePointStyle: true
        }
      },
      showScale: false,
      scales: {
        xAxes: [{
          categoryPercentage: 0.6,
          barPercentage: 1.0,
          gridLines: {
            display: false
          },
          stacked: true
        }],
        yAxes: [{
          ticks: {
            beginAtZero:true
          },
          display: true,
          stacked: true
        }]
      }
    };

    new Chart(ctx, {
      type:'bar',
      data: dataChart,
      options: options
    })
  },
  render() {
    return (
      <div>
        <p>{this.props.label}</p>
        <canvas className="chartBar" width="300" height="150" ref="chartBar" />
      </div>
    );
  },
});