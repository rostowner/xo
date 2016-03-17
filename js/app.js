'use strict';

const cellStates = {
	x: 'x',
	o: 'o',
	_: '_'
};

const Box = React.createClass({
	handlerOnClick: function (x, y) {
		console.log(x, y);
	},
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
							return <Row cells={row} handlerOnClick={this.handlerOnClick} rowindex={index} />; 
						}, this)}
					</tbody>
				</table>
			);
	}
});

const Row = React.createClass({
	handlerOnClick: function (x, y) {
		this.props.handlerOnClick(x, y);
	},
	render: function () {
		const cells = this.props.cells;
		const rowIndex = this.props.rowindex;
		return (<tr>
				{cells.map(function(cell, index){
					return <Cell item={cell} handlerOnClick={this.handlerOnClick} rowindex={rowIndex} cellindex={index} />;
				}, this)}
			</tr>);
	}
});

const Cell = React.createClass({
	handlerOnClick: function () {
		console.log('rowIndex', this.props.rowIndex);
		this.props.handlerOnClick(this.props.rowIndex, this.props.cellIndex);
	},
	render: function () {
		const item = this.props.item;
		const rowIndex = this.props.rowindex;
		const cellIndex = this.props.cellindex;

		return (<td onClick={this.handlerOnClick} rowIndex={rowIndex} cellIndex={cellIndex} >| {item} |</td>);
	}
});

ReactDOM.render(
  <Box />,
  document.getElementById('xo')
);
