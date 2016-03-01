'use strict';

var First = React.createClass({
	componentDidMount: function() {},
	render: function () {
		return (
			<table>
				<tbody>
					<tr>
						<td>X</td>
						<td>X</td>
						<td>X</td>
					</tr>
					<tr>
						<td>X</td>
						<td>X</td>
						<td>X</td>
					</tr>
					<tr>
						<td>X</td>
						<td>X</td>
						<td>X</td>
					</tr>
				</tbody>
			</table>
		);
	}
});

ReactDOM.render(
  <First />,
  document.getElementById('xo')
);
