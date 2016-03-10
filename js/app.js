'use strict';

const cellStates = {
	x: 'x',
	o: 'o',
	_: '_'
};

const Box = React.createClass({
	getInitialState: function () {
		return {
			size: 3,
			matrix: [
				[cellStates._, cellStates._, cellStates._], 
				[cellStates._, cellStates._, cellStates._], 
				[cellStates._, cellStates._, cellStates._]
			]
		};
	},
	render: function () {
		const matrix = this.state.matrix;
		return (<table>
					<tbody>
						{matrix.map(function(row, index){ 
							return <Row cells={row} row-index={index} />; 
						})}
					</tbody>
				</table>
			);
	}
});

const Row = React.createClass({
	render: function () {
		const cells = this.props.cells;
		return (<tr>
				{cells.map(function(cell, index){
					return <Cell item={cell} cell-index={index} />;
				})}
			</tr>);
	}
});

const Cell = React.createClass({
	render: function () {
		const item = this.props.item;
		return (<td>| {item} |</td>);
	}
});

ReactDOM.render(
  <Box />,
  document.getElementById('xo')
);
