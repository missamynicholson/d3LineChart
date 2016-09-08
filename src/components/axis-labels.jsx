import React from 'react';

function addDay(date, days) {
	var result = new Date(date);
	result.setDate(result.getDate() + days);
	return result;
}

const renderTitles = (props) => {
	return (coords, index) => {
		const titleProps = {
			textAnchor: "middle",
			transform: "translate(" + (props.padding + (index / (props.data[0].length + 1) * props.width)) + "," + (props.height - 10) + ")",
			stroke: coords.colour,
			key: index
		};
		return <text {...titleProps}>{ addDay(props.date, index).toISOString().substring(5, 10) }</text>;
	};
};

export default (props) => {
	return <g>{ props.data[0].map(renderTitles(props)) }</g>
}
