import { useContext } from "react"
import { OpinionContext } from "../../contexts/opinionContext"

const OpinionList = () => {
    const {sortedOpinions, addVoteOpinion} = useContext(OpinionContext)

    return (
        <ul>
            {sortedOpinions.map((opinion) => (
                <li key={opinion.id}>
                    {opinion.text} - Votes: {opinion.score}
                    <button onClick={() => addVoteOpinion(opinion.id)}>Vote</button>
                </li>
            ))}
        </ul>
    )
}

export default OpinionList