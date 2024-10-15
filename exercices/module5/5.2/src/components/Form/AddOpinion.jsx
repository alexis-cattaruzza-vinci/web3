import { useContext, useState } from "react"
import { OpinionContext } from "../../contexts/opinionContext"

const AddOpinion = () => {
    const {addOpinion} = useContext(OpinionContext)

    const [text, setText] = useState('')

    const handleText = (e) => {
        e.preventDefault()
        if(text.trim()){
            addOpinion(text)
            setText('')
        }
    }

    return (
        <form onSubmit={handleText}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Your opinion"
            />
            <button type="submit">Add opinion</button>
        </form>
    )
}

export default AddOpinion