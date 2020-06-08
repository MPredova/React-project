import React from 'react';

const form = (props) => {
	return (
		<div>
			<div id="formStyle">
				<form name="user">
					<div id="user">
						<div>
							<label htmlFor="user_name">Name: </label>
							<input
								onChange={props.nameChanged}
								value={props.name}
								name="name"
								type="text"
								id="user_name"
								required="required"
							/>
						</div>
						<div>
							<label htmlFor="user_email">Email: </label>
							<input
								onChange={props.emailChanged}
								value={props.email}
								name="email"
								type="text"
								id="user_email"
								required="required"
							/>
						</div>
						<div>
							<label htmlFor="user_website">Website: </label>
							<input
								onChange={props.websiteChanged}
								value={props.website}
								name="website"
								type="text"
								id="user_website"
								required="required"
							/>
						</div>
						<div>
							<button onClick={props.submitted} type="submit" id="user_submit">
								Submit
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default form;
