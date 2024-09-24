import { useState } from "react"


const ColorBox = () => {

    const colors= ['red', 'green', 'blue', 'yellow', 'purple'];
    const [currentColorIndex, setCurrentColorIndex] = useState(0);

    const currentColor = colors[currentColorIndex];
    const nextColor = colors[(currentColorIndex+1) % colors.length];

    const handleClick = () => {
        setCurrentColorIndex((currentColorIndex+1) % colors.length);
    }

    return (
        <div
        style={{
            backgroundColor: currentColor,
            width: '200px',
            height: '200px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            border: '2px solib black',
            margin: '10px',
        }}
        >
            <button onClick={handleClick}>
                {nextColor}
            </button>
            <p>Current Color: {currentColor}</p>

        </div>
    );
};

export default ColorBox;