import React, {useState} from "react";

const Context = React.createContext(null)


const ProviderWrapper = (props) =>{

    const [good, setGood] = useState(0)
    const [ok, setOk] = useState(0)
    const [bad, setBad] = useState(0)

    const increaseGood = () =>{
        setGood(good+1)
    }

    const increaseOk = () => {
        setOk(ok+1)
    }

    const increaseBad = () => {
        setBad(bad+1)
    }

    const exposedValue = {
        good,
        increaseGood,
        ok,
        increaseOk,
        bad,
        increaseBad
    }

    return <Context.Provider value={exposedValue}>
        { props.children }
    </Context.Provider>
}

export {
    Context,
    ProviderWrapper,
}