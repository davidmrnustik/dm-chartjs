var React = require('react');
import { Chart, Svg, Title } from 'react-d3-core';

var width = 700,
    height = 300,
    margins = {top: 20, right: 50, bottom: 20, left: 50},
    id = "test-chart",
    svgClassName = "test-chart-class",
    titleClassName = "test-chart-title-class";

var title = "test chart lib";

var NewChart = React.createClass({
  render: function(){
    return (
      <div>
        <Chart
          title={title}
          width={width}
          height={height}
          margins={margins}
          id={id}
          svgClassName={svgClassName}
          titleClassName={titleClassName}
        >
        <Title
          title={title}
          titleClassName={titleClassName}
        />
        
        <Svg
          width={width}
          height={height}
          margins={margins}
          id={id}
          svgClassName={svgClassName}
          >

        </Svg>
      </Chart>
    </div>
    )
  }
});

module.exports = NewChart;