import React, { Component } from 'react';
import axios from 'axios';
//import swal from 'sweetalert';
import DeleteButton from './buttons/DeleteButton';
import EditButton from './buttons/EditButton';
import Form from './Form';

const URL = 'https://jsonplaceholder.typicode.com/users';

class Table extends Component {
	constructor () {
		super();
		this.state = {
			users: [],
			showAddForm: false,
			showEditForm: false,
			name: '',
			email: '',
			website: '',

			newUser: {},
			editedUser: {}
		};
		this.load();
	}

	load () {
		console.log('queried API');
		axios.get(URL).then((response) => {
			const users = response.data;
			this.setState({ users });
			// console.log(users);
		});
	}

	//Fills up the fields
	displayInfoHandler = (id) => {
		//Toggle form
		this.setState({ showEditForm: true });

		const users = this.state.users;

		this.setState({
			name: users[id].name,
			email: users[id].email,
			website: users[id].website
		});
	};

	editPersonHandler = (id) => {
		let editedUser = this.state.editedUser;
		const users = this.state.users.slice();

		editedUser.name = this.state.name;
		editedUser.email = this.state.email;
		editedUser.website = this.state.website;

		//Push editted user into array and setState to it
		users.splice(id, 1, editedUser);
		//Get ID
		editedUser.id = users.indexOf(editedUser);

		this.setState({ users: users });
		//Reset state
		this.resetStateHandler();
		this.setState({ showEditForm: false });
	};

	// deleteButtonHandler = (id) => {
	// 	const users = this.state.users;
	// 	users.splice(id, 1);
	// 	console.log(id);
	// 	this.setState({ users: users });
	// };

	deleteButtonHandler = (id) => {
		const del = this.state.users.filter((user) => id !== user.id);
		this.setState({ users: del });
	};
	// showAddButton = () => {};

	showFormHandler = () => {
		const doesShow = this.state.showAddForm;
		this.setState({ showAddForm: !doesShow });
	};

	resetStateHandler = () => {
		this.setState({
			name: '',
			email: '',
			website: '',

			newUser: {}
		});
	};

	addPersonHandler = (event) => {
		//Hide form after submit
		this.setState({ showAddForm: false });
		event.preventDefault();
		let newUser = this.state.newUser;
		const users = this.state.users.slice();

		newUser.name = this.state.name;
		newUser.email = this.state.email;
		newUser.website = this.state.website;

		//Push new user into array and setState to it
		users.push(newUser);
		//Get ID
		newUser.id = users.indexOf(newUser);

		this.setState({ users: users });
		//Reset state
		this.resetStateHandler();
	};

	handleNameChange = (e) => {
		this.setState({ name: e.target.value });
	};

	handleEmailChange = (e) => {
		this.setState({ email: e.target.value });
	};

	handleWebsiteChange = (e) => {
		this.setState({ website: e.target.value });
	};

	renderHeader () {
		const headerElement = [ 'id', 'name', 'email', 'website', 'actions' ];

		return headerElement.map((key, index) => {
			return <th key={index + 1}>{key.toUpperCase()}</th>;
		});
	}

	renderBody () {
		return (
			this.state.users &&
			this.state.users.map(({ id, name, email, website }) => {
				return (
					<tr key={id}>
						<td>{id}</td>
						<td>{name}</td>
						<td>{email}</td>
						<td>{website}</td>
						<td>
							<DeleteButton clicked={() => this.deleteButtonHandler(id)} key={this.id} />
							<EditButton clicked={() => this.displayInfoHandler(id)} key={this.id} />
						</td>
					</tr>
				);
			})
		);
	}

	render () {
		let form = null;
		if (this.state.showAddForm) {
			form = (
				<Form
					nameChanged={this.handleNameChange}
					emailChanged={this.handleEmailChange}
					websiteChanged={this.handleWebsiteChange}
					name={this.state.name}
					submitted={this.addPersonHandler}
				/>
			);
		}
		if (this.state.showEditForm) {
			form = (
				<Form
					nameChanged={this.handleNameChange}
					emailChanged={this.handleEmailChange}
					websiteChanged={this.handleWebsiteChange}
					name={this.state.name}
					email={this.state.email}
					website={this.state.website}
					submitted={this.editPersonHandler}
				/>
			);
		}
		return (
			<div>
				<h1>Table Page</h1>
				<button onClick={this.showFormHandler}>Add</button>
				{form}
				<table id="userTable">
					<thead>
						<tr>{this.renderHeader()}</tr>
					</thead>
					<tbody>{this.renderBody()}</tbody>
				</table>
			</div>
		);
	}
}

export default Table;
