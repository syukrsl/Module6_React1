function SingleCat({ cat }) {
  return (
    <li>
      {cat.name}
      <br />
      <img src="https://placekitten.com/g/70/80" />
    </li>
  )
}

export default SingleCat;