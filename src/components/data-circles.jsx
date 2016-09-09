import React from 'react';

const renderCircles = (props, colour) => {
	return (coords, index) => {
		const circleProps = {
			cx: props.xScale(coords.x),
			cy: props.yScale(coords.y),
			r: 2,
			fill: colour,
			key: index
		};
		return <circle {...circleProps} />;
	};
};

export default (props) => {
	return <svg>
			<g>{ props.data[0].map(renderCircles(props, "black")) }</g>
			<g>{ props.data[1].map(renderCircles(props, "blue")) }</g>
			<g>{ props.data[2].map(renderCircles(props, "red")) }</g>
			</svg>
};
