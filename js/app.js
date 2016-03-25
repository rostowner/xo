'use strict';

const cellStates = {
	x: 'x',
	o: 'o',
	_: '_'
};

const getDefaultMatrix = function (x) {
	var arr = [];
	var res = [];
	if (x) {
		for (var i = 0; i < x; i++) {
			arr.push(new Array(x));
		}
		for (i = 0; i < x; i++) {
			for (var y = 0; y < x; y++) {
				arr[i][y] = cellStates._;
			}
		}
		res = arr;
	} else {
		res = [
				[cellStates._, cellStates._, cellStates._], 
				[cellStates._, cellStates._, cellStates._], 
				[cellStates._, cellStates._, cellStates._]
			];
	};
	return res;
	};

const Box = React.createClass({
	getInitialState: function () {
		return {
			size: 3,
			player: cellStates.x,
			matrix: getDefaultMatrix(3)
		};
	},
	changePlayer: function () {
		const player = (this.state.player === cellStates.x)? cellStates.o : cellStates.x;
		this.setState({player: player});
	},
	changeStateOfCell: function (x, y) {
		const playerSimbol = (this.state.player == cellStates.x) 
								? cellStates.x 
								: cellStates.o;
		var matrix = this.state.matrix;
		matrix[x][y] = (matrix[x][y] == cellStates._)
							? playerSimbol
							: cellStates._;
		this.setState({matrix: matrix});
		this.changePlayer();
	},
	restartAll: function () {
		const matrix = getDefaultMatrix(this.state.size);
		const player = cellStates.x;
		const obj = {matrix: matrix, player: player};

		this.setState(obj);
	},
	setMatrixSize: function (matrixSize) {
		this.setState({size: matrixSize});
		setTimeout(this.restartAll, 0);
	},
	render: function () {
		// todo: add buttons Layer
		const matrix = this.state.matrix;
		return (<div>
				<table className="table table-bordered table-hover">
					<tbody>
						{matrix.map(function(row, index){ 
							return <Row cells={row} changeStateOfCell={this.changeStateOfCell} rowindex={index} />; 
						}, this)}
					</tbody>
				</table>
				<Player changePlayer={this.changePlayer} player={this.state.player} />
				<Restart restart={this.restartAll} />
				<Size matrixSize={this.state.size} setMatrixSize={this.setMatrixSize} />
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
		return (<td onClick={this.handlerOnClick} className="text-center cell">{item}</td>);
	}
});

const Player = React.createClass({
	render: function () {
		const player = this.props.player;
		return (<span>
			<p className="bg-primary">Player: {player}</p>
			<button className="btn btn-primary" onClick={this.props.changePlayer}>Change Player</ button>
			</span>);
	}
});

const Restart = React.createClass({
	render: function () {
		return (<button className="btn btn-default" onClick={this.props.restart}>Restart</button>);
	}
});

const Size = React.createClass({
	setSize: function (e) {
		e.preventDefault();
		const s = this.refs.sizem.value;
		this.props.setMatrixSize(s);
	},
	render: function () {
		return (
			<form className="form-inline">
			<hr />
			  <div className="form-group">
			    <label htmlFor="sizeId">Size</label>
			    <input 	type="text" 
			    		className="form-control" 
			    		name="size" 
			    		ref="sizem" 
			    		defaultValue={this.props.matrixSize} 
			    		id="sizeId" 
			    		placeholder="Size" />
			  </div>
			  <button onClick={this.setSize} className="btn btn-default">Set Size</button>
			</form>
			);
	}
});

ReactDOM.render(
	<Box />,
  	document.getElementById('xo')
);
