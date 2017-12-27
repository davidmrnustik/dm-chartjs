import React, { Component } from 'react';
import './App.css';
import './react-select.css';
import BarChartGradientComponentTwo from './BarChartGradientComponentTwo.js';
import BarChartGradientComponentTwoGroup from './BarChartGradientComponentTwoGroup.js';
import Doughnut from './DoughnutChart.js';
import Doughnut2 from './DoughnutChart2.js';
import Doughnut3 from './DoughnutChart3.js';
import DoughnutTwo from './DoughnutChartTwoValues.js';
import LineChart from './LineChart.js';
import LineChartNormal from './LineChartNormal.js';
import LineChartNormal2 from './LineChartNormal2.js';
import LineChartPoint from './LineChartPoint.js';
import Select from './Select';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Doughnut3 chart={[2, 2, 2]} />
        <br /><hr /><br />
        <Doughnut2 chart={[247, 51, 13]} />
        <br /><hr /><br />
        <DoughnutTwo label="Cobros" chart={[25000, 19000]} />
        <br /><hr /><br />
        <DoughnutTwo label="Cobros" chart={[25000, 0]} />
        <br /><hr /><br />
        <DoughnutTwo label="Cobros" chart={[25000, 4000]} />
        <br /><hr /><br />
        <LineChartNormal2 label="Expedientes" chart={[[30, 28, 27, 25, 27, 29], [20, 21, 19, 18, 20, 21], [15, 14, 13, 13, 12, 14], [15, 16, 15, 14, 12, 13], [12, 7, 9, 3, 10, 8], [6, 4, 10, 5, 14, 6], [8, 9, 13, 2, 10, 9]]} xAxes={["Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]}/>
        <br /><hr /><br />
        <LineChartPoint label="Expedientes" chart={[[30, , 27, 25, 27, 29, 12], [20, 21, 19, , 20, 21, 8], [15, 14, , 13, 12, 14, 5], [15, 16, 15, 14, , , ], [8, 10, , 5, , 9, ], [5, 7, 3, , 2, , 6], [10, 14, , 6, 5, 2, ]]} xAxes={[1, 3, 4, 6, 7, 8, 9]}/>
        <br /><hr /><br />
        <LineChartNormal label="Expedientes" chart={[[30, 28, 27, 25, 27, 29], [20, 21, 19, 18, 20, 21], [15, 14, 13, 13, 12, 14], [15, 16, 15, 14, 12, 13]]} xAxes={["Enero", "Febrero", "Marzo", "Abril", "Junio", "Julio"]}/>
        <br /><hr /><br />
        <LineChart label="Expedientes" chart={[[30, 28, 27, 25, 27, 29], [20, 21, 19, 18, 20, 21], [15, 14, 13, 13, 12, 14], [15, 16, 15, 14, 12, 13]]} />
        <br /><hr /><br />
        <Doughnut label="Compras" chart={[5, 3, 4]} />
        <br /><hr /><br />
        <Doughnut label="Logisticas" chart={[6, 3, 7]} />
        <br /><hr /><br />
        <Doughnut label="Propuesta venta" chart={[6, 9, 12]} />
        <br /><hr /><br />
        <Doughnut label="Cobros/Pagos" chart={[2, 4, 8]} />
        <br /><hr /><br />
        <Doughnut label="Trámites Tráfico" chart={[3, 5, 10]} />
        <br /><hr /><br />
        <Doughnut label="Campañas" chart={[5, 10, 15]} />
        <br /><hr /><br />
        <Doughnut label="Taller/Posventa" chart={[9, 7, 3]} />
        <br /><hr /><br />
        <BarChartGradientComponentTwoGroup label="Expedientes" chart={[[15, 10, 3, 5, 8, 9, 5], [10, 5, 10, 3, 5, 8, 4], [5, 5, 2, 7, 6, 5, 4]]} xAxes={['Compras', 'Logisticas', 'Propuestas Venta', 'Cobros/Pagos', 'Trámites Tráfico', 'Campañas', 'Taller/Posventa']} />
        <br /><hr /><br />
        <BarChartGradientComponentTwoGroup label="Expedientes" chart={[[15, 10, 3, 5], [10, 5, 10, 3], [5, 5, 2, 7]]} xAxes={['Propuesta Venta', 'Matriculación', 'Entrega', 'Campañas']} />
        <br /><hr /><br />
        <BarChartGradientComponentTwo label="Campañas" chart={[5, 3, 7]} />
        <br /><hr /><br />
        <BarChartGradientComponentTwo label="Entrega" chart={[3, 10, 2]} />
        <br /><hr /><br />
        <BarChartGradientComponentTwo label="Matriculación" chart={[10, 5, 5]} />
        <br /><hr /><br />
        <BarChartGradientComponentTwo label="Propuesta venta" chart={[15, 10, 5]} />
        <br /><hr /><br />
      </div>
    );
  }
}

export default App;
