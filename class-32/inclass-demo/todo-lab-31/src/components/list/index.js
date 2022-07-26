import { useState, useContext } from "react";
import { SettingsContext } from '../../context/settings.js';


const List = ({list, toggleComplete}) => {

  const settings = useContext(SettingsContext);

  const [page, setPage] = useState(0);

  //pagination  
  const renderList = list.filter( item => settings.completed ? true : !item.complete)
  const start = settings.pageItems * page || 0;
  const end = start + settings.pageItems || list.length;
  const pages = new Array(Math.ceil(renderList.length / settings.pageItems)).fill('');

  const displayList = renderList ? renderList.slice(start, end) : [];

  return(
    <>
    {displayList.map(item => (
      <div key={item.id}>
        <p>{item.text}</p>
        <p><small>Assigned to: {item.assignee}</small></p>
        <p><small>Difficulty: {item.difficulty}</small></p>
        <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
        <hr />
      </div>
    ))}
    {
      pages.map((n, index) => (
        <button key={`page-${index}`} onClick={() => setPage(index)}>{index + 1}</button>
      ))
    }
    </>
  )
}

export default List;
