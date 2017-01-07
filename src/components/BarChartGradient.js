import React from 'react';
import { Chart } from 'react-chartjs-2';
//import pattern from 'patternomaly';

export default React.createClass({
  componentDidMount() {
    const ctx = this.refs.chartBar.getContext('2d');
    const x = ["Grupo 1", "Grupo 2", "Grupo 3"];
    const y = [12, 16, 4];
    const gradientGreen = ctx.createLinearGradient(0, 0, 0, 300);
    gradientGreen.addColorStop(0, 'rgba(15, 189, 119,1)');   
    gradientGreen.addColorStop(1, 'rgba(15, 189, 119,0)');
    const gradientOrange = ctx.createLinearGradient(0, 0, 0, 300);
    gradientOrange.addColorStop(0, 'rgba(255,165,0,1)');   
    gradientOrange.addColorStop(1, 'rgba(255,165,0,0)');
    const gradientRed = ctx.createLinearGradient(0, 0, 0, 400);
    gradientRed.addColorStop(0, 'rgba(255,0,0,1)');   
    gradientRed.addColorStop(1, 'rgba(255,0,0,0)');
    const dataChart = {
      labels: x,
      datasets: [
        {
          backgroundColor: [gradientGreen, gradientOrange, gradientRed],
          //backgroundColor: [pattern.draw('square', '#ff6384'),pattern.draw('line', 'rgba(255, 165, 0, 0.4)'),pattern.draw('diamond', '#cc65fe')],
          //borderColor: ['rgba(0, 255, 0, 0.5)', 'rgba(255, 165, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
          borderWidth: 0,
          borderColor: ['rgba(15, 189, 119, 1.0)', 'rgba(255, 197, 20, 1.0)', 'rgba(255, 0, 0, 1.0)'],
          hoverBackgroundColor: ['rgba(15, 189, 119, 0.8)', 'rgba(255, 197, 20, 0.8)', 'rgba(255, 0, 0, 0.8)'],
          data: y
        }
      ]
    };
    const options = {
      // Boolean - If we should show the scale at all
      showScale: false,
      // Boolean - Whether to show a dot for each point
      //pointDot: false,
      // Boolean - Whether to show a stroke for datasets
      //datasetStroke: false,
      scales: {
        xAxes: [{
          categoryPercentage: 1.0,
          gridLines: {
            display: false
          },
          stacked: true
        }],
        yAxes: [{
          ticks: {
            beginAtZero:true
          },
          display: false,
          stacked: true
        }]
      }
    };
    /* eslint new-cap: ["error", {"capIsNewExceptions": ["Bar"]}] */

    //const myBarChart = new Chart(ctx).Bar(dataChart, options);
    new Chart(ctx, {
      type:'bar',
      data: dataChart,
      options: options
    })
  },
  render() {
    return <canvas className="chartBar" width="300" height="150" ref="chartBar" />;
  },
});