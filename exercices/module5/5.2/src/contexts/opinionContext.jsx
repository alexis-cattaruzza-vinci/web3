import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

const OpinionContext = React.createContext(null)

const ProviderWrapper = (props) => {
    const [opinions, setOpinions] = useState([
        { id: uuidv4(), text: "This is the initial opinion", score: 1 }
    ])

    const addOpinion = (text) => {
        const newOpinion = {id: uuidv4(), text, score: 1 }
        setOpinions([...opinions, newOpinion])
    }

    const addVoteOpinion = (id) => {
        setOpinions(opinions.map(opinion =>
                opinion.id === id ? {...opinion, score: opinion.score+1} : opinion
            ) 
        )
    }

    const sortedOpinions = opinions.sort((a, b) => b.score - a.score);

    const exposedValue = {
        addOpinion,
        addVoteOpinion,
        sortedOpinions,
    }

    return <OpinionContext.Provider value={exposedValue}>
        { props.children }
    </OpinionContext.Provider>
}

export{
    OpinionContext,
    ProviderWrapper
}