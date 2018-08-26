import React from 'react';

const Scroll = (props) => {
	return (
		<div style = {{overflowY: 'scroll', border: '3px solid black', height: '350px'}} >
			{props.children}
		</div>
	)
};
//props, state children
export default Scroll;