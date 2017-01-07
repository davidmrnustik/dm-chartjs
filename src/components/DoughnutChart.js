import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const options = {
  legend: {
    display: true,
    position: 'left',
    labels: {
      boxWidth: 15,
      fontSize: 14,
      fontStyle: 'bold',
      padding: 15,
      usePointStyle: true
    }
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
            backgroundColor: ['rgba(15, 189, 119, 0.5)', 'rgba(255, 197, 20, 0.5)', 'rgba(255, 0, 0, 0.5)'],
            hoverBackgroundColor: ['rgba(15, 189, 119, 0.8)', 'rgba(255, 197, 20, 0.8)', 'rgba(255, 0, 0, 0.8)'],
            borderWidth: 1,
            borderColor: ['rgba(15, 189, 119, 1.0)', 'rgba(255, 197, 20, 1.0)', 'rgba(255, 0, 0, 1.0)'],
            hoverBorderWidth: 1,
            hoverBorderColor: ['rgba(15, 189, 119, 1.0)', 'rgba(255, 197, 20, 1.0)', 'rgba(255, 0, 0, 1.0)'],
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
          backgroundColor: ['rgba(15, 189, 119, 0.5)', 'rgba(255, 197, 20, 0.5)', 'rgba(255, 0, 0, 0.5)'],
          hoverBackgroundColor: ['rgba(15, 189, 119, 0.8)', 'rgba(255, 197, 20, 0.8)', 'rgba(255, 0, 0, 0.8)'],
          borderWidth: 1,
          borderColor: ['rgba(15, 189, 119, 1.0)', 'rgba(255, 197, 20, 1.0)', 'rgba(255, 0, 0, 1.0)'],
          hoverBorderWidth: 1,
          hoverBorderColor: ['rgba(15, 189, 119, 1.0)', 'rgba(255, 197, 20, 1.0)', 'rgba(255, 0, 0, 1.0)'],
          data: this.props.chart
        }
      }
    })
  },
  render() {
    return (
      <div>
        <p>{this.state.label}</p>
        <Doughnut
          data={this.state.data}
          options={options}
        />
      </div>
    );
  }
})