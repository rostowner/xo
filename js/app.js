'use strict';

<<<<<<< HEAD
var First = React.createClass({
	componentDidMount: function() {},
	render: function () {
		return (<h1>Trololo</h1>);
	}
});

ReactDOM.render(
  <First />,
  document.getElementById('xo')
=======
var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(
  "<h1>Hello, world!</h1>",
  document.getElementById('xo-example')
>>>>>>> 467905f7e8295ead8b14f55e33959af42a9b024d
);