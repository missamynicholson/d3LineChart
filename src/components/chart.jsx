import React                from 'react';
import {connect}            from 'react-redux';
import * as actionCreators  from '../lib/action-creators';
import ScatterPlot          from './scatter-plot';

const styles = {
	width   : 1000,
	height  : 500,
	padding : 50,
};

const name = {testName: "Counted content per user"};
const startDate = {date: new Date("09/01/2016")}


var lineData = [  
		  [
		    { x: 0,  y: 5,  },
	            { x: 1,  y: 20  },
  	            { x: 2,  y: 15  },
		    { x: 3,  y: 7   },
	            { x: 4,  y: 6   },
		    { x: 5,  y: 5   },
	            { x: 6,  y: 20  },
		    { x: 7,  y: 5   },
	            { x: 8,  y: 4.5 },
  	            { x: 9,  y: 6   },
		    { x: 10, y: 7   },
	            { x: 11, y: 6   },
		    { x: 12, y: 5   },
	            { x: 13, y: 4.5 }
		  ],
		  [
		    { x: 0,  y: 5   },
		    { x: 1,  y: 27  },
		    { x: 2,  y: 22  },
		    { x: 3,  y: 5   },
	            { x: 4,  y: 3   },
		    { x: 5,  y: 4   },
	            { x: 6,  y: 4.5 },
		    { x: 7,  y: 5   },
		    { x: 8,  y: 7   },
		    { x: 9,  y: 8   },
		    { x: 10, y: 5   },
	            { x: 11, y: 3   },
		    { x: 12, y: 4   },
	            { x: 13, y: 4.5 }
		  ],
		  [ 
		    { x: 0,  y: 5   },
		    { x: 1,  y: 0.1 },
		    { x: 2,  y: 3   },
		    { x: 3,  y: 4   },
	            { x: 4,  y: 3   },
		    { x: 5,  y: 0.2 },
	            { x: 6,  y: 2   },
		    { x: 7,  y: 5   },
		    { x: 8,  y: 0.1 },
		    { x: 9,  y: 2   },
		    { x: 10, y: 4   },
	            { x: 11, y: 0.2 },
		    { x: 12, y: 3   },
	            { x: 13, y: 2   }
		 ]
];

const colours = { colour: [ "black", "blue", "red" ] };

export default class Chart extends React.Component {
	constructor(props) {
		super(props);
		this.state = { data: lineData };
	}
	
	render() {
		return  <div><ScatterPlot {...this.state} {...styles} {...name} {...colours} {...startDate} /></div>
	}
};
