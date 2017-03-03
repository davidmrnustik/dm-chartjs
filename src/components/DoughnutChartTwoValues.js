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
    return (arr[0] / (arr[0] + arr[1])) * 100;
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
        const text = this.makeCalc(this.props.chart).toFixed(0) + "%";
        const textX = Math.round((width - c.measureText(text).width) / 2);
        const textY = height / 2;
        c.fillStyle = this.makeCalc(this.props.chart) > 50 ? 'red' : '#454545';
        c.fillText(text, textX, textY);
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
          backgroundColor: ['rgba(255, 0, 0, 0.5)', 'rgba(186, 186, 186, 0.4)'],
          hoverBackgroundColor: ['rgba(255, 0, 0, 0.8)', 'rgba(186, 186, 186, 0.8)'],
          borderWidth: 1,
          borderColor: ['rgba(255, 0, 0, 1.0)', 'rgba(186, 186, 186, 1.0)'],
          hoverBorderWidth: 1,
          hoverBorderColor: ['rgba(255, 0, 0, 1.0)', 'rgba(186, 186, 186, 1.0)'],
          data: y
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