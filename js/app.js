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
			player: cellStates.x,
			matrix: [
				[cellStates._, cellStates._, cellStates._], 
				[cellStates._, cellStates._, cellStates._], 
				[cellStates._, cellStates._, cellStates._]
			]
		};
	},
	changePlayer: function () {
		const player = (this.state.player === cellStates.x)? cellStates.o : cellStates.x;
		this.setState({player: player});
	},
	changeStateOfCell: function (x, y) {
		const playerSimbol = (this.state.player == cellStates.x) ? cellStates.x : cellStates.o;
		var matrix = this.state.matrix;
		matrix[x][y] = playerSimbol;
		this.setState({matrix: matrix});
	},
	render: function () {
		const matrix = this.state.matrix;
		return (<div>
				<table>
					<tbody>
						{matrix.map(function(row, index){ 
							return <Row cells={row} changeStateOfCell={this.changeStateOfCell} rowindex={index} />; 
						}, this)}
					</tbody>
				</table>
				<Player changePlayer={this.changePlayer} player={this.state.player} />
			</div>
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

const Player = React.createClass({
	changePlayer: function () {
		this.props.changePlayer();
	},
	render: function () {
		const player = this.props.player;
		return (<div>
			<h1>Player: {player}</h1>
			<button onClick={this.changePlayer}>Change Player</ button>
			</div>);
	}
});

ReactDOM.render(
	<Box />,
  	document.getElementById('xo')
);
