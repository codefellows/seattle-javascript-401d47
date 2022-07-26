import { useContext, useState } from "react";
import { PeopleContext } from "../Context/People";

const People = () => {
  let [name, setName] = useState();
  let [age, setAge] = useState();
  let context = useContext(PeopleContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    context.addPerson({name, age})
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </label>
        <label>Age
          <input type="text" onChange={(e) => setAge(e.target.value)} />
        </label>
        <button type="submit">Add Person</button>
      </form>
      <ul>
        {context.list.map((person, index) => (
          <li key={`person-${index}`}>{person.name}</li>
        ))}
      </ul>
    </>
  )
};

export default People;
