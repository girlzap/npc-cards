import React from 'react';

function Card(props) {

	const { name, voice, role, who, notes } = props.info

	const editText = (e) => {

		document.getElementById(e.target.id).setAttribute('contenteditable', true)
	}


	const setText = (e) => {
		//TODO: this is firing twice on keyboard events, add check/catch

		//TODO: send value back to main component to set text in the state. eventually will need a custom hook to send this to local storage or a server?
		console.log('set')
		document.getElementById(e.target.id).removeAttribute('contenteditable')
		document.getElementById(e.target.id).blur()
	}

	//TODO: tabindex isnt quite right... 
	return (
		<div className="card">


			<div id={props.index + 'name'}
				className="name"
				onClick={editText}
				onBlur={setText}
				onKeyPress={event => {
					if (event.key === 'Enter') {
						setText(event)
					}
				}}
				tabIndex={0}
			>
				{name}
			</div>
			<div
				id={props.index + 'voice'}
				className="voice"
				onClick={editText}
				onBlur={setText}
				onKeyPress={event => {
					if (event.key === 'Enter') {
						setText(event)
					}
				}}
				tabIndex={1}
			>
				{voice}
			</div>
			<div
				id={props.index + 'role'}
				className="role"
				onClick={editText}
				onBlur={setText}
				onKeyPress={event => {
					if (event.key === 'Enter') {
						setText(event)
					}
				}}
				tabIndex={2}
			>
				{role}
			</div>
			<div
				id={props.index + 'who'}
				className="who"
				onClick={editText}
				onBlur={setText}
				onKeyPress={event => {
					if (event.key === 'Enter') {
						setText(event)
					}
				}}
				tabIndex={3}
			>
				{who}
			</div>
			<div
				id={props.index + 'notes'}
				className="notes"
				onClick={editText}
				onBlur={setText}
				onKeyPress={event => {
					if (event.key === 'Enter') {
						setText(event)
					}
				}}
				tabIndex={4}
			>
				{notes}
			</div>
		</div>
	);
}

export default Card;


