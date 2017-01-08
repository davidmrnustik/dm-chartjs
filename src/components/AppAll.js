import React, { Component } from 'react';
import './App.css';
import Line from './Line.js';
import Tooltip from './BarTooltip.js';
import BarGroup from './BarGroupChart.js';
import BarExample from './Barchart.js';
import MixedChart from './MixedChart.js';
import ChartGradient from './ChartGradient.js';
import BarChartGradient from './BarChartGradient.js';
import BarChartGradientComponent from './BarChartGradientComponent.js';
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
        <br /><hr /><br />
        <BarChartGradientComponent label="Propuesta venta" chart={[12, 16, 4]} />
        <br /><hr /><br />
        <BarChartGradient />
        <br /><hr /><br />
        <ChartGradient />
        <br /><hr /><br />
        <MixedChart label="Mixed chart" chart={[12, 16, 4]} />
        <br /><hr /><br />
        <BarExample label="Propuesta Venta" chart={[15, 10, 5]} />
        <br /><hr /><br />
        <BarExample label="Matriculación" chart={[10, 5, 5]} />
        <br /><hr /><br />
        <BarExample label="Entrega" chart={[3, 10, 2]} />
        <br /><hr /><br />
        <BarExample label="Campañas" chart={[5, 3, 7]} />

        <br /><hr /><br />

        <BarGroup />
        <Line title="Propuesta Venta" chart={[
          {"name":"Grupo 1","grupo":15},
          {"name":"Grupo 2","grupo":10},
          {"name":"Grupo 3","grupo":5}
          ]}
        />

        <Line title="Matriculación" chart={[
          {"name":"Grupo 1","grupo":10},
          {"name":"Grupo 2","grupo":5},
          {"name":"Grupo 3","grupo":5}
          ]}
        />
        <Line title="Entrega" chart={[
          {"name":"Grupo 1","grupo":3},
          {"name":"Grupo 2","grupo":10},
          {"name":"Grupo 3","grupo":2}
          ]}
        />
        <Line title="Campañas" chart={[
          {"name":"Grupo 1","grupo":5},
          {"name":"Grupo 2","grupo":3},
          {"name":"Grupo 3","grupo":7}
          ]}
        />
        <Tooltip title="" chart={[
          {"name":"Grupo 1","grupo":5},
          {"name":"Grupo 2","grupo":3},
          {"name":"Grupo 3","grupo":7}
          ]}
        />
      </div>
    );
  }
}

export default App;
