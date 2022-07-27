import { useState, useContext } from "react";
import { SettingsContext } from '../../Context/Settings';
import './styles.css'

const List = ({list, toggleComplete}) => {

  const settings = useContext(SettingsContext);
  const [page, setPage] = useState(0);

  /** pagination logic:
   * 
   * pagination buttons show when enough items to populate a second page.
   * << will only show when there is a previous page
   * >> will only show when there is a next page
   * note:  not ideal, but all pages will show.  even if there are 100
   */
  const renderList = settings.completed ? list : list.filter( item => settings.completed ? true : !item.complete)
  const listStart = settings.pageItems * page || 0;
  const listEnd = listStart + settings.pageItems || list.length;
  const pages = new Array(Math.ceil(renderList.length / settings.pageItems)).fill('');
  const displayList = renderList ? renderList.slice(listStart, listEnd) : [];

  const handlePrevious = () => {
    const prev = Object.keys(pages)[page - 1] || 0;
    setPage(prev);
  }

  const handleNext = () => {
    const nxt = Object.keys(pages)[page + 1] || pages.length
    setPage(nxt);
  }

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

    {page >= 1 && <button onClick={handlePrevious}>previous</button>}
    {
      pages.length > 1 && pages.map((n, index) => (
        <button key={`page-${index}`} onClick={() => setPage(index)}>{index + 1}</button>
      ))
    }
    {page + 2 <= pages.length && <button onClick={handleNext}>next</button>}
    </>
  )
}

export default List;
