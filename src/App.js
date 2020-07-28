import React, { useEffect, useState } from 'react';
import Card from './Card'

import './App.css';



function App() {
  const [cardDeck, setCardDeck] = useState([])

  let data = [
    {
      "name": "Ellie",
      "voice": "loud and wild", 
      "role":"Smuggler", 
      "who":"she/her saytr",
      "notes":"Offered to help for 40% cut"
    }
  ]

  useEffect(()=>
  {
    setCardDeck(data)
  },[])

 
  const makeNew=()=>{
    let newThing = {
      "name": "Name",
      "voice": "Voice",
      "role":"Role",
      "who":"Who",
      "notes":"Notes"
    }
    setCardDeck(cardDeck=>[...cardDeck, newThing])
  }
console.log(JSON.stringify(cardDeck))
  return (
    <div className="App">
      <div className="card-container">
        <div className="card make-new" onClick={()=>makeNew()}>+</div>
        
        {cardDeck.map((cardInfo, index)=>(
          
          <Card key={index} index={index} info={cardInfo} />
        ))}

      </div>
    </div>
  );
}

export default App;
