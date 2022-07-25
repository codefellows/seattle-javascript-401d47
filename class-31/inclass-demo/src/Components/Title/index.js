import React from "react";
import { SettingsContext } from "../../Context/Settings";

class Title extends React.Component {
  // set property on the constructor - class specific
  static contextType = SettingsContext;

  render(){
    return(
      <h1>{this.context.title}</h1>
    )
  }
}



export default Title;
