var React = require('react');
var BarChart = require('react-d3-basic').BarChart;

var chartData = [
  {"name":"Grupo 1","grupo":15,"grupo1":10,"index":0,"color":"#fff"},
  {"name":"Grupo 2","grupo":10,"grupo1":15,"index":1,"color":"#FF0000"},
  {"name":"Grupo 3","grupo":5,"grupo1":7,"index":2,"color":"#FFFF00"}
];

var width = 300,
  height = 180,
  margins = {left: 0, right: 0, top: 10, bottom: 20},
  chartSeries = [
    {
      field: 'grupo',
      name: 'Grupo 1'
    }],
  x = function(d) {
    return d.name;
  },
  xScale = 'ordinal',
  xOrient = 'bottom',
  yLabel = "Expedientes",
  xRangeRoundBands = {interval: [0, width - margins.left - margins.right], padding: 0},
  yRange = [height - margins.top - margins.bottom, 0],
  yTicks = [3];

var Line = React.createClass({
  render: function(){
    return (
      <div>
        <BarChart
          data= {chartData}
          margins= {margins}
          width= {width}
          height= {height}
          chartSeries = {chartSeries}
          x= {x}
          xScale= {xScale}
          yTicks= {yTicks}
          yLabel= {yLabel}
          xLabel= "sadvdsf" 
          showXGrid= {false}
          xOrient = {xOrient}
          showYGrid= {false}
          showLegend= {false}
          showXAxis= {false}
          showYAxis= {false}
          yRange= {yRange}
          xRangeRoundBands= {xRangeRoundBands}
        />
        
      </div>
    )
  }
})

module.exports = Line;