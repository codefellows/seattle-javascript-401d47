import { useContext, useState } from "react";
import useForm from '../../hooks/form.js';
import { SettingsContext } from "../../Context/Settings";


const SettingsForm = () => {
  const [defaultValues] = useState({});
  const { showCompleted, changeItems, sortBy, storeSettings } = useContext(SettingsContext);
  const { handleChange, handleSubmit } = useForm(changeSettings, defaultValues);


  function changeSettings(newSettings){
    showCompleted();
    changeItems(newSettings.pageItems);
    sortBy(newSettings.sort);
    storeSettings()
    // try logging existing settings - you'll feel the async
  }


  return (
    <form onSubmit={handleSubmit}>

    <h2>Change Settings</h2>

    <label>
      <span>Show Completed?</span>
      <input onChange={handleChange} required name="completed" type="text"  />
    </label>

    <label>
      <span>Quantity of Items to SHow</span>
      <input onChange={handleChange} required name="pageItems" type="text" placeholder="quantity" />
    </label>

    <label>
      <span>Sort By</span>
      <input onChange={handleChange} required type="text" name="sort" />
    </label>

    <label>
      <button type="submit">Change Settings</button>
    </label>
  </form>
  )

};

export default SettingsForm;
