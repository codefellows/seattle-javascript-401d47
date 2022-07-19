import { useState } from "react";

import './styles.scss';

const Counter = () => {

  const [ clicks, setClicks ] = useState(0);
  const [ factorOfFive, setFactorOfFive ] =  useState(false);

  const updateCounter = () => {
    // why not clicks++?  state is protected
    let newCount = clicks + 1;
    setClicks(newCount);

    // state change is asynchronous, use the variable of the changed state, not state not the actual state
    setFactorOfFive(newCount % 5 === 0)
  }

  return (
    <>
      <h2 data-testid="counter">Button has been clicked {clicks} time(s)</h2>
      <h2 data-testid="factor">Factor of Five? {factorOfFive.toString()}</h2>
      <button data-testid="button" onClick={updateCounter}>Update Clicks</button>
    </>
  )
};

export default Counter;
