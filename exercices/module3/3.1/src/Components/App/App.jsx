import { useState, useEffect } from 'react'
import Statistics from '../Stats/Statistics';
import Button from '../Button/Button';
import Loading from '../Loading/Loading';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [selected, setSelected] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // 3 secondes
    return () => clearTimeout(timer); // Nettoyer le timeout si le composant est démonté
  }, []);

  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  const totalVotes = good + neutral + bad;

  const percentageOfGood = (good/totalVotes) *100;

  const averageScore = totalVotes > 0 ? (good - bad) / totalVotes : 0;

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  

  const handleRandomSelection = () => {
    const randomNumber = Math.floor(Math.random() * 6); // Generates a random number between 0 and 8
    setSelected(randomNumber); // Set the selected state to the random number
  };

  if(loading){
    return <Loading />
  }

  return (
    <div>
      <h2>Give feedback here !</h2>

      <div>
        <Button handleClick={handleGoodClick} text={"good"}/>
        <Button handleClick={handleNeutralClick} text={"neutral"}/>
        <Button handleClick={handleBadClick} text={"bad"}/>
      </div>

      <Statistics 
      good={good}
      neutral={neutral}
      bad={bad}
      totalVotes={totalVotes}
      percentageOfGood={percentageOfGood.toFixed(2)}
      averageScore={averageScore.toFixed(2)}
      />

      <div>
        {anecdotes[selected]}
        <Button handleClick={handleRandomSelection} text={"Next quote"}/>
      </div>
      
    </div>
  );
};

export default App;