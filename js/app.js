'use strict';

const Box = React.createClass({
	getInitialState: function () {
		return {
			size: 3,
			matrix: [
				['x', 'x', 'x'], 
				['x', 'x', 'x'], 
				['x', 'x', 'x']
			]
		};
	},
	render: function () {
		const matrix = this.state.matrix;
		return (<table>
					<tbody>
						{matrix.map(function(row){ 
							return <Row cells={row} />; 
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
				{cells.map(function(cell){
					return <Cell item={cell} />;
				})}
			</tr>);
	}
});

const Cell = React.createClass({
	render: function () {
		const item = this.props.item;
		return (<td>{item}</td>);
	}
});

ReactDOM.render(
  <Box />,
  document.getElementById('xo')
);
