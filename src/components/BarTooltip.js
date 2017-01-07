var React = require('react');
import { BarTooltip } from 'react-d3-tooltip';
import { SimpleTooltip }  from 'react-d3-tooltip';

var width = 300,
  height = 180,
  margins = {left: 0, right: 0, top: 0, bottom: 40},
  chartSeries = [
    {
      field: 'grupo',
      name: 'Propuesta venta'
    }],
  x = function(d) {
    return d.name;
  },
  xScale = 'ordinal',
  yTicks = [3];

var Tooltip = React.createClass({
  render: function(){
    var chartData = this.props.chart;
    return (
      <div>
        <BarTooltip
          data={chartData}
          width={width}
          margins={margins}
          height={height}
          chartSeries={chartSeries}
          x={x}
          xScale={xScale}
          yTicks={yTicks}
          showLegend={false}
          showXAxis={false}
          showYAxis={false}
        >
          <SimpleTooltip/>
        </BarTooltip>
      </div>
    )
  }
});

module.exports = Tooltip;