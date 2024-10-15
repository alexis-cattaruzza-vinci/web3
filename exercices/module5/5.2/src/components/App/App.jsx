import { ProviderWrapper as OpinionProvider } from "../../contexts/opinionContext"
import OpinionList from "../Opinion/OpinionList"
import AddOpinion from "../Form/AddOpinion"

const App = () => {

  return (
    <OpinionProvider>
      <h1>Votes of opinions</h1>
      <OpinionList />
      <AddOpinion />
    </OpinionProvider>
  )
}

export default App
