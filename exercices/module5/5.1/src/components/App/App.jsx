import { useContext} from 'react'

import { Context as CounterContext} from '../../contexts/countersContext'


const App = () => {
  // Get the context value, which is an object
  const {
    good,
    increaseGood,
    ok,
    increaseOk,
    bad,
    increaseBad
  } = useContext(CounterContext);

  return (
    <div>
      <h2>Give feedback here !</h2>
      <div>
        <button onClick={increaseGood} value="Good">Good</button>
        <p>{good}</p>
        <button onClick={increaseOk}value="Ok">Ok</button>
        <p>{ok}</p>
        <button onClick={increaseBad} value="Bad">Bad</button>
        <p>{bad}</p>
      </div>
    </div>
  );
};

export default App;