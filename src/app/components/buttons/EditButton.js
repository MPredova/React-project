import React from 'react';

const editButton = (props) => {
	return (
		<div>
			<button onClick={props.clicked}>Edit</button>
		</div>
	);
};
export default editButton;
