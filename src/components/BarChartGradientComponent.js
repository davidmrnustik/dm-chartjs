import React from 'react';
import { Chart } from 'react-chartjs-2';

const options = {
  showScale: false,
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

export default React.createClass({
  getInitialState: function(){
    return {
      label: this.props.label,
      data: {
        labels: ['Grupo 1', 'Grupo 2', 'Grupo 3'],
        datasets: [
          {
            backgroundColor: ['green', 'orange', 'red'],
            borderWidth: 0,
            borderColor: ['rgba(15, 189, 119, 1.0)', 'rgba(255, 197, 20, 1.0)', 'rgba(255, 0, 0, 1.0)'],
            hoverBackgroundColor: ['rgba(15, 189, 119, 0.8)', 'rgba(255, 197, 20, 0.8)', 'rgba(255, 0, 0, 0.8)'],
            data: this.props.chart
          }
        ]
      }
    }
  },
  componentDidMount() {
    const ctx = this.refs.chartBar.getContext('2d');
    const gradientGreen = ctx.createLinearGradient(0, 0, 0, 300);
    gradientGreen.addColorStop(0, 'rgba(15, 189, 119,1)');   
    gradientGreen.addColorStop(1, 'rgba(15, 189, 119,0)');
    const gradientOrange = ctx.createLinearGradient(0, 0, 0, 300);
    gradientOrange.addColorStop(0, 'rgba(255,165,0,1)');   
    gradientOrange.addColorStop(1, 'rgba(255,165,0,0)');
    const gradientRed = ctx.createLinearGradient(0, 0, 0, 400);
    gradientRed.addColorStop(0, 'rgba(255,0,0,1)');   
    gradientRed.addColorStop(1, 'rgba(255,0,0,0)');
    this.setState({
      label: this.props.label,
      data: {
        datasets: {
          label: this.props.label,
          backgroundColor: [gradientGreen, gradientOrange, gradientRed],
          borderWidth: 0,
          borderColor: ['rgba(15, 189, 119, 1.0)', 'rgba(255, 197, 20, 1.0)', 'rgba(255, 0, 0, 1.0)'],
          hoverBackgroundColor: ['rgba(15, 189, 119, 0.8)', 'rgba(255, 197, 20, 0.8)', 'rgba(255, 0, 0, 0.8)'],
          data: this.props.chart
        }
      }
    })
    
    //const myBarChart = new Chart(ctx).Bar(dataChart, options);
    new Chart(ctx, {
      type:'bar',
      data: this.state.data,
      options: options
    })
  },
  render() {
    return <canvas className="chartBar" width="300" height="150" ref="chartBar" />;
  },
});