import { useState } from 'react'
import SingleCat from "./SingleCat"

function BigCats({ name }) {

  const originalList = [
    { name: 'Cheetah', latinName: 'Acinonyx jubatus' },
    { name: 'Cougar', latinName: 'Puma concolor' },
    { name: 'Jaguar', latinName: 'Panthera onca' },
    { name: 'Leopard', latinName: 'Panthera pardus' },
    { name: 'Lion', latinName: 'Panthera leo' },
    { name: 'Snow leopard', latinName: 'Panthera uncia' },
    { name: 'Tiger', latinName: 'Panthera tigris' },
  ]
  const [cats, setCats] = useState([...originalList])

  function handleSort() {
    // clone the array
    const newCats = [...cats]
    // INSERT CODE TO SET ARRAY
    newCats.sort((a, b) => a.name > b.name)
    setCats(newCats)
  }

  function handleReverse() {
    // clone the array
    const newCats = [...cats]
    newCats.reverse()
    setCats(newCats)
  }

  function handleFilter() {
    const filteredCats = cats.filter(cat => cat.latinName)
  }

  function handleReset() {
    setCats([...cats])
  }

  return (
    <div>
      <button onClick={handleSort}>Sort Cats</button>
      <button onClick={handleReverse}>Reverse Cats</button>
      <button onClick={handleFilter}>Filter Cats</button>
      <button onClick={handleReset}>Reset Cats</button>
      <h1>Hello {name}</h1>
      <ul>
        {cats.map(cat => (
          <SingleCat cat={cat} />
        ))}
      </ul>
    </div>
  )
}

export default BigCats;