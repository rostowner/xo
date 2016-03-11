'use strict';

var Box = React.createClass({
	getInitialState: function () {
		return {
			rows: [new Array(3), new Array(3), new Array(3)]
		};
	},
	render: function () {
		const r = this.props.rows.map(x => <Row item={x}/>);
		return (
			<table>
				<tbody>
					{r}
				</tbody>
			</table>
		);
	}
});

var Row = React.createClass({
	render: function () {
		return <tr>
					<td>X</td>
					<td>X</td>
					<td>X</td>
				</tr>
	}
});

ReactDOM.render(
	const rows = this.state.rows;
  <Box rows={rows} />,
  document.getElementById('xo')
);
