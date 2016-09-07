import React                from 'react';
import {connect}            from 'react-redux';
import * as actionCreators  from '../lib/action-creators';
import ScatterPlot          from './scatter-plot';

const styles = {
  width   : 500,
  height  : 500,
  padding : 50,
};

const name = {testName: "Counted content per user"};

var lineData1 = [
	{ x: 1,
	  y: 5 },
	{ x: 2,
	  y: 20 },
  	{ x: 3,
      	  y: 36 }
];

var lineData2 = [
	{ x: 1,
	  y: 7 },
	{ x: 2,
	  y: 27 },
	{ x: 3,
	  y: 15 }
];

const colours = ["black", "blue", "red"];

export default class Chart extends React.Component{

  constructor(props) {
    super(props);
    this.state = { data: lineData2 };
  }


  render() {
    return <div>
      <ScatterPlot {...this.state} {...styles} {...name} />
    </div>
  }
};
