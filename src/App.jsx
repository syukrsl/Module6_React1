import { useState } from "react"
import Emoji from "./Emoji"
import MultiState from "./MultiState"
import BigCats from "./BigCats"
import LoginForm from "./LoginForm"

// Declare function component
function App() {
  const [name, setName] = useState("Bob")
  // Return some JSX to be rendered
  return (
    <>
      {/* <Emoji title="How are you feeling?" />
      <Emoji title="Feeling happy?" />
      // <Emoji title="Feeling sad?" /> */}
      {/* <MultiState name={name} /> */}
      <BigCats />
      <LoginForm />
    </>
  )
}
// Exporting the component App
export default App;
