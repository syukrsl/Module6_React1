// import functions from the react library
import { useState } from "react";

// start of function react component
// a function that returns JSX
function Emoji({ title }) {
  // setting a state value
  const [mood, setMood] = useState(true)
  const count = 0;

  function handleClick() {
    setMood((current) => !current)
  }

  // this is the JSX
  return <>
    <p>{title}</p>
    {mood ? "😊" : "😔"}
    <button onClick={handleClick}>Set Mood</button>
  </>
}

// export the function to be imported into other files
export default Emoji;