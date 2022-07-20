import { useEffect } from "react";

const Content = () => {

  // greedy at first then we'll add the unmount capability
  useEffect(() => {
    let intervalId = setInterval(() => {
      console.log('Content mounted, and running...' );
    }, 1000)

    return () => {
      console.log('Content Unmounted!  not running anymore!')
      clearInterval(intervalId);
    }
  });

  return <div id="one">DIV ONE</div>

};

export default Content;
