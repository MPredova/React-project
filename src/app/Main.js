import React, { Component } from 'react';
//import Button from './components/buttons/AddButton';
import Table from './components/Table';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class Home extends Component {
	// state = {
	// 	count: 0
	// };

	// add = () => {
	// 	this.setState({
	// 		count: this.state.count + 1
	// 	});
	// };

	render () {
		return (
			<Router>
				<div>
					<Route path="/table" component={Table} />
					{/* <Button count={this.state.count} clicked={this.add} /> */}
				</div>
			</Router>
		);
	}
}
