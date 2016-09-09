import React            from 'react';
import d3               from 'd3';
import DataLine         from './data-line';
import XYAxis           from './x-y-axis';
import AxisLabels       from './axis-labels';
import DataCircles      from './data-circles';

const xMax   = (data)  => d3.max(data, (d) => d.x);
const yMax   = (data)  => d3.max(data, (d) => d.y);

const xScale = (props) => {
	return  d3.scale.linear()
		.domain([0, xMax([].concat.apply(props.data[0], props.data[1]))])
		.range([props.padding, props.width - props.padding * 2]);
};

const yScale = (props) => {
	return  d3.scale.linear()
		.domain([0, yMax([].concat.apply(props.data[0], props.data[1]))])
		.range([props.height - props.padding, props.padding]);
};

const marshalProps = (props) => {
	const scales = { xScale: xScale(props), yScale: yScale(props) };
	return Object.assign({}, props, scales);
};

export default (props) => {
	const d3Props = marshalProps(props);
	return 	<svg width={d3Props.width} height={d3Props.height}>
			<DataLine {...d3Props} />
			<XYAxis {...d3Props}/>
			<text y="10" x="-300" stroke="#0000" transform="rotate(-90)">{props.testName}</text>
			<AxisLabels {...d3Props} />
			<DataCircles {...d3Props} />
		</svg>
}
