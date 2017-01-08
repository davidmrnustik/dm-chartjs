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
  render() {
    const label = this.props.label;
    const data = {
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
    return (
      <div>
        <p>{label}</p>
        <Doughnut
          data={data}
          options={options}
        />
      </div>
    );
  }
})