import React from 'react';
import Chart from 'chart.js';

export default React.createClass({
  componentDidMount() {
    const ctx = this.refs.chart.getContext('2d');
    const x = ["Grupo 1", "Grupo 2", "Grupo 3"];
    const y = [12, 16, 4];
    const gradient = ctx.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, 'rgba(250,174,50,1)');
    gradient.addColorStop(1, 'rgba(250,174,50,0)');
    const data = {
      labels: x,
      datasets: [
        {
          fillColor: gradient,
          data: y,
        },
      ],
    };
    const options = {
      // Boolean - If we should show the scale at all
      //showScale: false,
      // Boolean - Whether to show a dot for each point
      //pointDot: false,
      // Boolean - Whether to show a stroke for datasets
      //datasetStroke: false,
    };
    /* eslint new-cap: ["error", {"capIsNewExceptions": ["Line"]}] */
    new Chart(ctx).Line(data, options);
  },
  render() {
    return <canvas className="chart" width="300" height="150" ref="chart" />;
  },
});