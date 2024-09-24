import { useState } from 'react'

const ClickCounter = ({title, message, messageMouse}) => {

    const [count, setCount] = useState(JSON.parse(localStorage.getItem("count")));
    const [showMessage, setShowMessage] = useState(false);

    return (
        <div className="card">
        <p>
            {title}
        </p>
        {showMessage && <p>{messageMouse}</p>}
        <button onClick={() => {
          setCount((count) => count + 1);
          localStorage.setItem("count",JSON.stringify(count))

        }} 
        onMouseEnter={() => setShowMessage(true)} 
        onMouseLeave={() => setShowMessage(false)}>
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