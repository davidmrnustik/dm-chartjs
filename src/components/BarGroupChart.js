import React, { Component } from 'react';
import { BarGroupChart } from 'react-d3-basic';
import { Legend } from 'react-d3-core';

var dataChart = [
 {
   "Fase": "Propuesta venta",
   "Grupo 1": 15,
   "Grupo 2": 10,
   "Grupo 3": 5
 },
 {
   "Fase": "Matriculación",
   "Grupo 1": 10,
   "Grupo 2": 5,
   "Grupo 3": 5
 },
 {
   "Fase": "Entrega",
   "Grupo 1": 3,
   "Grupo 2": 10,
   "Grupo 3": 2
 },
 {
   "Fase": "Campañas",
   "Grupo 1": 5,
   "Grupo 2": 3,
   "Grupo 3": 7
 }
];

var width = 500,
  height = 200,
  legendPosition = 'left',
  legendOffset = 90,
  legendClassName = "legend-class",
  margins = {left: 0, right: 0, top: 0, bottom: 40},
  chartSeries = [
    {
      field: 'Grupo 1',
      name: 'Grupo 1',
      color: "green",
      style: {
        fillOpacity: .6
      }
    },
    {
      field: 'Grupo 2',
      name: 'Grupo 2',
      color: "orange"
    },
    {
      field: 'Grupo 3',
      name: 'Grupo 3',
      color: "red"
    }
  ],
  yScale = 'linear',
  xScale = 'ordinal',
  x = function(d) {
    return d.Fase;
  };

class BarGroup extends Component {

  render() {
    return (
      <div>
        <Legend
            width={width}
            height={height}
            margins={margins}
            legendPosition={legendPosition}
            legendClassName={legendClassName}
            legendOffset={legendOffset}
            chartSeries={chartSeries}
          />
          <BarGroupChart
            data={dataChart}
            width={width}
            height={height}
            margins={margins}
            x={x}
            xScale={xScale}
            yScale={yScale}
            showLegend={false}
            chartSeries={chartSeries}
          />
      </div>
    )
  }
}

export default BarGroup;