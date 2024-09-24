import { useState } from 'react'

const ClickCounter = ({title, message}) => {

    const [count, setCount] = useState(0);

    return (
        <div className="card">
        <p>
            {title}
        </p>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        {count >= 10 && <p>{message}</p>}
        <p>
          Edit <code>src/clickCounter.jsx</code> and save to test HMR
        </p>
      </div>
    );
};

export default ClickCounter;