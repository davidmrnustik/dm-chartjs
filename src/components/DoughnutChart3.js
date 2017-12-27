import React from 'react';
import { Chart, Doughnut } from 'react-chartjs-2';

Chart.defaults.global.defaultFontFamily = '"MuseoSans", arial, helvetica, sans-serif';

const options = {
  responsive: true,
  legend: {
    display: false,
  },
  ticks: {
    reverse: false
  }
}
export default React.createClass({
  makeCalc(arr) {
    return arr.reduce((a, b) => a + b);
  },
  componentDidMount() {

    Chart.pluginService.register({
      afterDraw: () => {
        const c = this.refs.chartBar.chart_instance.chart.ctx;
        const width = c.canvas.width;
        const height = c.canvas.height;
        const fontSize = (height / 114).toFixed(2);
        c.font = fontSize + "em sans-serif";
        c.textBaseline = "middle";
        const text = this.makeCalc(this.props.chart).toFixed(0);
        const textX = Math.round((width - c.measureText(text).width) / 2);
        const textY = height / 2;
        c.fillStyle = '#454545';
        // c.fillText(text, textX, textY);
      }
    })
  },
  render() {
    const x = ["Importe pendiente", "Pagado"];
    const y = this.props.chart;
    const dataChart = {
      labels: x,
      datasets: [
        {
          backgroundColor: ['rgba(255, 0, 0, 0.5)', 'rgba(255, 197, 20, 0.5)', 'rgba(15, 189, 119, 0.5)'],
          hoverBackgroundColor: ['rgba(255, 0, 0, 0.8)', 'rgba(255, 197, 20, 0.8)', 'rgba(15, 189, 119, 0.8)'],
          borderWidth: 1,
          borderColor: ['rgba(255, 0, 0, 1.0)', 'rgba(255, 197, 20, 1.0)', 'rgba(15, 189, 119, 1.0)'],
          hoverBorderWidth: 1,
          hoverBorderColor: ['rgba(255, 0, 0, 1.0)', 'rgba(255, 197, 20, 0.8)', 'rgba(15, 189, 119, 1.0)'],
          data: [y[2], y[1], y[0]]
        }
      ]
    };
    const label = this.props.label;
    return (
      <div>
        <p>{label}</p>
        <Doughnut ref="chartBar" data={dataChart} options={options} />
      </div>
    )
  }
})