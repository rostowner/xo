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
							return <Row cells={row} rowindex={index} />; 
						})}
					</tbody>
				</table>
			);
	}
});

const Row = React.createClass({
	render: function () {
		const cells = this.props.cells;
		const rowIndex = this.props.rowindex;
		return (<tr>
				{cells.map(function(cell, index){
					return <Cell item={cell} rowindex={rowIndex} cellindex={index} />;
				})}
			</tr>);
	}
});

const Cell = React.createClass({
	render: function () {
		const item = this.props.item;
		const rowIndex = this.props.rowindex;
		const cellIndex = this.props.cellindex;

		return (<td>| {item} |</td>);
	}
});

ReactDOM.render(
  <Box />,
  document.getElementById('xo')
);
