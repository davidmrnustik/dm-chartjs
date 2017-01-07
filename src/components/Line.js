var React = require('react');
import { BarChart } from 'react-d3-basic';
import { Title } from 'react-d3-core';
import './line.css';

var width = 300,
  height = 180,
  margins = {left: 0, right: 0, top: 0, bottom: 40},
  chartSeries = [
    {
      field: 'grupo',
      name: 'Grupo 1',
      style: {
        fill: "#ff0000"
      }
    }],
  x = function(d) {
    return d.name;
  },
  xScale = 'ordinal',
  xOrient = 'bottom',
  //yLabel = "Expedientes",
  xRangeRoundBands = {interval: [0, width - margins.left - margins.right], padding: 0},
  yRange = [height - margins.top - margins.bottom, 0],
  id = 'graph',
  titleClassName = 'chart-title',
  yTicks = [3];

var Line = React.createClass({
  render: function(){
    var chartData = this.props.chart;
    var title = this.props.title;
    return (
      <div>
        <Title
          title={title}
          titleClassName={titleClassName}
        />
        <BarChart
          data={chartData}
          title={title}
          id={id}
          width={width}
          height={height}
          margins={margins}
          chartSeries={chartSeries}
          x={x}
          xScale={xScale}
          yTicks={yTicks}
          yLabel={false}
          showXGrid={false}
          xOrient={xOrient}
          showYGrid={false}
          showLegend={false}
          showXAxis={false}
          showYAxis={false}
          yRange={yRange}
          xRangeRoundBands={xRangeRoundBands}
        >
        </BarChart>
      </div>
    )
  }
})

module.exports = Line;