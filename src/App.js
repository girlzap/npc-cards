/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Card from './Card'

import './App.css';



function App() {
	const [cardDeck, setCardDeck] = useState([])

	let data = [
		{
			"name": "Eva DeBarde",
			"voice": "loud and wild",
			"role": "Ship Captain",
			"who": "she/her halfling",
			"notes": "Offered to help for 40gp"
		}
	]

	useEffect(() => {
		setCardDeck(data)
	}, [])


	const makeNew = () => {
		let newThing = {
			"name": "Name",
			"voice": "Voice",
			"role": "Role",
			"who": "Who",
			"notes": "Notes"
		}
		setCardDeck(cardDeck => [...cardDeck, newThing])
	}

	return (
		<div className="App">
			<div className="card-container">
				<div className="card make-new" onClick={() => makeNew()}>+ <br /><span className="new-text">Click to add new card</span></div>

				{cardDeck.reverse().map((cardInfo, index) => (

					<Card key={index} index={index} info={cardInfo} />
				))}

			</div>
		</div>
	);
}

export default App;
