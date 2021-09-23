import './stylesheets/style.scss';

import ButtonContainer from './components/buttonContainer/ButtonContainer'
import ScoreBoard from './components/scoreBoard/ScoreBoard';

import {useState, useEffect} from 'react';

function App() {
 
  const [CompMove, setCompMove] = useState('')
  const [PlayerMove, setPlayerMove] = useState('')
  const [score, setScore] = useState(localStorage.getItem('score') || 0)
  const [result, setResult] = useState('')

  // Computer makes move
  const ComputerMove = () => {
    const moves = ['rock', 'paper', 'scissors']
    setCompMove( moves[ Math.floor(Math.random() * moves.length) ] )
  }
  
  //Register Player move 
  const SetPlayerMove = (e) => {
    if(e.target.tagName === 'BUTTON'){
      setPlayerMove(e.target.dataset.value)
    }
    if(e.target.tagName === 'IMG'){
      setPlayerMove(e.target.parentNode.dataset.value)
    }
  }

  const CacheScore = () => {
    localStorage.setItem('score', score)
  }

 

  return (
    <main className="App">
      <ScoreBoard score={score} />      
      <ButtonContainer f={SetPlayerMove} />
    </main>
  );
}

export default App;
