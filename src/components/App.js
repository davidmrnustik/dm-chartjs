import React, { Component } from 'react';
import './App.css';
import BarChartGradientComponentTwo from './BarChartGradientComponentTwo.js';
import BarChartGradientComponentTwoGroup from './BarChartGradientComponentTwoGroup.js';
import Doughnut from './DoughnutChart.js';
import LineChart from './LineChart.js';
import LineChartNormal from './LineChartNormal.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LineChartNormal label="Expedientes" chart={[[30, 28, 27, 25, 27, 29], [20, 21, 19, 18, 20, 21], [15, 14, 13, 13, 12, 14], [15, 16, 15, 14, 12, 13]]} />
        <br /><hr /><br />
        <LineChart label="Expedientes" chart={[[30, 28, 27, 25, 27, 29], [20, 21, 19, 18, 20, 21], [15, 14, 13, 13, 12, 14], [15, 16, 15, 14, 12, 13]]} />
        <br /><hr /><br />
        <Doughnut label="Campañas" chart={[5, 3, 7]} />
        <br /><hr /><br />
        <Doughnut label="Entrega" chart={[3, 10, 2]} />
        <br /><hr /><br />
        <Doughnut label="Matriculación" chart={[10, 5, 5]} />
        <br /><hr /><br />
        <Doughnut label="Propuesta venta" chart={[15, 10, 5]} />
        <br /><hr /><br />
        <BarChartGradientComponentTwoGroup label="Expedientes" chart={[[15, 10, 3, 5], [10, 5, 10, 3], [5, 5, 2, 7]]} />
        <br /><hr /><br />
        <BarChartGradientComponentTwo label="Campañas" chart={[5, 3, 7]} />
        <br /><hr /><br />
        <BarChartGradientComponentTwo label="Entrega" chart={[3, 10, 2]} />
        <br /><hr /><br />
        <BarChartGradientComponentTwo label="Matriculación" chart={[10, 5, 5]} />
        <br /><hr /><br />
        <BarChartGradientComponentTwo label="Propuesta venta" chart={[15, 10, 5]} />
      </div>
    );
  }
}

export default App;
