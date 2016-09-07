import React  from 'react';
import Axis   from './axis';

export default (props) => {
  var lineFunc = d3.svg.line()
	  .x(function(d) {
		  return props.xScale(d.x);
	  })
  	  .y(function(d) {
		 return props.yScale(d.y);
	})
	  .interpolate('linear');
	
	
	return <g className="line">
  		  <path d={lineFunc(props.data)} stroke="blue" strokeWidth="2" fill="none" />
		</g>
}
