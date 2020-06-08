import React from 'react';

const button = (props) => {
	return (
		<div>
			<button className="btn" onClick={props.clicked}>
				Add
			</button>
			<p>{props.count}</p>
		</div>
	);
};
export default button;
