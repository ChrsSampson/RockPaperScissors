import './stylesheets/style.scss';

import PlayButtonContainer from './components/playButtonContainer/ButtonContainer'
import ScoreBoard from './components/scoreBoard/ScoreBoard';
import Rules from './components/rules/Rules'
import MenuButton from './components/ruleButton/MenuButton'
import Result from './components/result/Result'

import {useState, useEffect} from 'react';

function App() {
 
  const [CompMove, setCompMove] = useState('')
  const [PlayerMove, setPlayerMove] = useState('')
  const [score, setScore] = useState(localStorage.getItem('score'))
  const [result, setResult] = useState(null)
  const [showRules, setShowRules] = useState(false)

  // Toggle Rules
  const toggleRules = () => {
    setShowRules(!showRules)
  }
  // Reset the game score
  const resetScore = () => {
    localStorage.setItem('score', 0)
    // Update score state to re-render the page
    setScore(localStorage.getItem('score'))
  }

  // Reset results
  const resetResult = () => {
    setResult(null)
  }

  // Computer makes move
  const ComputerMove = () => {
    const moves = ['rock', 'paper', 'scissors']
    setCompMove( moves[ Math.floor(Math.random() * moves.length) ] )
  }
  
  //Register Player move 
  const SetPlayerMove = (e) => {
    if(e.target.tagName === 'BUTTON'){
      setPlayerMove(e.target.dataset.value)
      ComputerMove()
    }
    if(e.target.tagName === 'IMG'){
      setPlayerMove(e.target.parentNode.dataset.value)
      ComputerMove()
    }
  }
  

  // If there is no score in storage set one to 0
  // Set score to re-render 
  useEffect(() => {
    if(localStorage.getItem('score') === null){
      localStorage.setItem('score', 0)
      setScore(localStorage.getItem('score'))
    }
  },[])

  useEffect(() => {
    //determine outcome once player makes move
    const CheckOutcome = () => {
      if(PlayerMove !== '' && CompMove !== ''){
        if(PlayerMove === CompMove){
          setResult('Draw')
        }
        else if( (PlayerMove === 'rock' && CompMove === 'scissors') || (PlayerMove === 'paper' && CompMove === 'rock') || (PlayerMove === 'scissors' && CompMove === 'paper') ){
          localStorage.setItem('score', parseInt(score) + 1)
          setResult('Win')
        }
        else{
          localStorage.setItem('score', parseInt(score) - 1)
          setResult('Lose')
        }
        setScore(localStorage.getItem('score'))
      }
    }
    CheckOutcome()
  }, [CompMove])


  return (
    <main className="App">
      <ScoreBoard score={score} />
      {/* Rules are detached from the dom */}
      {showRules ? <Rules onClick={toggleRules} /> : null}
      <section className="Play-area">      
        {(result === null) ?
          <PlayButtonContainer onClick={SetPlayerMove} /> :
          <Result result={result} onClick={resetResult} moves={{player: PlayerMove, comp: CompMove}} />
         }
      </section>
      <section className="Button-container">
        <MenuButton text="Rules" type="rules" onClick={toggleRules} />
        <MenuButton text="Reset" type="reset" onClick={resetScore} />
      </section>
    </main>
  );
}

export default App;
