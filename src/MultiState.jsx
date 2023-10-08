import { useState } from "react"

function MultiState({ name }) {
  const people = {
    Ariff: 21,
    Bob: 22,
    Sam: 23
  }

  // store a state for name
  const [person, setPerson] = useState({ name: "Ariff", age: 21 });

  // create change handler function
  function handleClick() {
    setPerson({ name: "Bob", age: people.Bob })
  }

  // return jsx for name and age
  return (
    <>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <button onClick={handleClick}>Change Person</button>
    </>
  )
}

export default MultiState;