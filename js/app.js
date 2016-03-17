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
	changeStateOfCell: function (x, y) {
		var matrix = this.state.matrix;
		matrix[x][y] = cellStates.x;
		this.setState({matrix: matrix});
	},
	render: function () {
		const matrix = this.state.matrix;
		return (<table>
					<tbody>
						{matrix.map(function(row, index){ 
							return <Row cells={row} changeStateOfCell={this.changeStateOfCell} rowindex={index} />; 
						}, this)}
					</tbody>
				</table>
			);
	}
});

const Row = React.createClass({
	rowCellOnClick: function (x, y) {
		this.props.changeStateOfCell(x, y);
	},
	render: function () {
		const cells = this.props.cells;
		const rowIndex = this.props.rowindex;
		return (<tr>
				{cells.map(function(cell, index){
					return <Cell item={cell} rowCellOnClick={this.rowCellOnClick} rowindex={rowIndex} cellindex={index} />;
				}, this)}
			</tr>);
	}
});

const Cell = React.createClass({
	handlerOnClick: function () {
		const x = this.props.rowindex;
		const y = this.props.cellindex;
		this.props.rowCellOnClick(x, y);
	},
	render: function () {
		const item = this.props.item;

		return (<td onClick={this.handlerOnClick}>| {item} |</td>);
	}
});

ReactDOM.render(
  <Box />,
  document.getElementById('xo')
);
