import React from 'react';
import { Chart, Doughnut } from 'react-chartjs-2';

Chart.defaults.global.defaultFontFamily = '"MuseoSans", arial, helvetica, sans-serif';

const options = {
  legend: {
    display: false,
    position: 'left',
    labels: {
      boxWidth: 15,
      fontSize: 13,
      //fontStyle: 'bold',
      padding: 20,
      usePointStyle: true
    }
  },
  ticks: {
    reverse: false
  }
}
export default React.createClass({
  render() {
    const label = this.props.label;
    const data = {
      labels: ['Grupo 3', 'Grupo 2', 'Grupo 1'],
      datasets: [
        {
          backgroundColor: ['rgba(255, 0, 0, 0.5)', 'rgba(255, 197, 20, 0.5)', 'rgba(15, 189, 119, 0.5)'],
          hoverBackgroundColor: ['rgba(255, 0, 0, 0.8)', 'rgba(255, 197, 20, 0.8)', 'rgba(15, 189, 119, 0.8)'],
          borderWidth: 1,
          borderColor: ['rgba(255, 0, 0, 1.0)', 'rgba(255, 197, 20, 1.0)', 'rgba(15, 189, 119, 1.0)'],
          hoverBorderWidth: 1,
          hoverBorderColor: ['rgba(255, 0, 0, 1.0)', 'rgba(255, 197, 20, 1.0)', 'rgba(15, 189, 119, 1.0)'],
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