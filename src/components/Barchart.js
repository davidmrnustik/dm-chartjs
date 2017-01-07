import React from 'react';
import { Bar, defaults } from 'react-chartjs-2';

defaults.global.legend.display = false;

const options = {
  maintainAspectRatio: true,
  responsive: true,
  scales: {
    xAxes: [{
      stacked: true,
      categoryPercentage: 0.9,
      gridLines: {
        display: false
      }
    }],
    yAxes: [{
      ticks: {
        min:0
      },
      display:false,
      stacked: false
    }]
  }
}

export default React.createClass({
  getInitialState: function(){
    return {
      label: this.props.label,
      data: {
        labels: ['Grupo 1', 'Grupo 2', 'Grupo 3'],
        datasets: [
          {
            label: this.props.label,
            backgroundColor: ['rgba(15, 189, 119, 0.5)', 'rgba(255, 197, 20, 0.5)', 'rgba(255, 0, 0, 0.5)'],
            borderColor: ['rgba(15, 189, 119, 1.0)', 'rgba(255, 197, 20, 1.0)', 'rgba(255, 0, 0, 1.0)'],
            borderWidth: 1,
            hoverBorderWidth: 2,
            hoverBackgroundColor: ['rgba(15, 189, 119, 0.8)', 'rgba(255, 197, 20, 0.8)', 'rgba(255, 0, 0, 0.8)'],
            hoverBorderColor: '#898989',
            data: this.props.chart
          }
        ]
      }
    }
  },
  componentDidMount: function(){
    this.setState({
      label: this.props.label,
      data: {
        datasets: {
          label: this.props.label,
          data: this.props.chart
        }
      }
    })
  },
  render() {
    
    return (
      <div>
        <p>{this.state.label}</p>
        <Bar
          data={this.state.data}
          width={100}
          height={50}
          options={options}
        />
      </div>
    );
  }
});