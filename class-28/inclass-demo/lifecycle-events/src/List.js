const List = ({ list }) => {
  console.log(list);
  return (
    <ul>
      {list.map((pokemon, index) => <li key={`poke-${index}`}>{pokemon}</li>)}
    </ul>
  )

};

export default List;
