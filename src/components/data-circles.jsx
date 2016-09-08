import React from 'react';

const renderCircles = (props) => {
	return (coords, index) => {
		const circleProps = {
			cx: props.xScale(coords.x),
			cy: props.yScale(coords.y),
			r: 2,
			fill: coords.colour,
			key: index
		};
		return <circle {...circleProps} />;
	};
};

export default (props) => {
	return  <g>{ [].concat.apply(props.data[0], props.data[1]).map(renderCircles(props)) }</g>
};
