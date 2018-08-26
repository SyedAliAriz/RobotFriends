import React from 'react';

const Card =({name, email, id}) => {
	return (
		//const { name, email, id } = props; //we can destructure props and use just {id} instead of {props.id} etc.
		<div className='bg-gold dib br3 pa3 ma2 grow bw2 shadow-5 mw5'>
			<img alt='man portrait'src={`https://robohash.org/${id}?size=200x200`} />
			<div >
				<h4>{name}</h4>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;