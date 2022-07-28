import { useState, useContext } from "react";
import { SettingsContext } from '../../Context/Settings';
import { EditableText } from "@blueprintjs/core";
import Auth from "../Auth";
import './styles.css'
import { AuthContext } from "../../Context/Auth";

const List = ({ list, toggleComplete, deleteItem, updateItem }) => {

  const settings = useContext(SettingsContext);
  const { can } = useContext(AuthContext)
  const [page, setPage] = useState(0);

  /** pagination logic:
   * 
   * pagination buttons show when enough items to populate a second page.
   * << will only show when there is a previous page
   * >> will only show when there is a next page
   * note:  not ideal, but all pages will show.  even if there are 100
   */
  const renderList = settings.completed ? list : list.filter(item => settings.completed ? true : !item.complete)
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

  return (
    <>
      {displayList.map(item => (
        <div key={item.id}>
          {
            can('update') ?
              <>
                <EditableText onConfirm={(value) => updateItem(item.id, { text: value })} defaultValue={item.text} />
              </> :
              <p>{item.text}</p>
          }
          {

            can('update') ?
              <>
                <span>Assigned to:</span>
                <EditableText onConfirm={(value) => updateItem(item.id, { assignee: value })} defaultValue={item.assignee} />
              </> :
              <p><small>Assigned to: {item.assignee}</small></p>
          }
          {
            can('update') ?
              <>
                <span>Difficulty:</span>
                <EditableText onConfirm={(value) => updateItem(item.id, { difficulty: value })} defaultValue={item.difficulty} />
              </> :
              <p><small>Difficulty: {item.difficulty}</small></p>
          }
          <button onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</ button>
          <Auth capability="delete">
            <button onClick={() => deleteItem(item.id)}>Delete!</button>
          </Auth>
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
