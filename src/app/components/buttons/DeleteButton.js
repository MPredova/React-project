import React from 'react';

const button = (props) => {
	return (
		<div>
			<button onClick={props.clicked} value={props.key}>
				Delete
			</button>
		</div>
	);
};
export default button;
