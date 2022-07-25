import { useContext, useState } from "react";
import { ThemeContext } from "../../Context/Theme";
import { SettingsContext } from "../../Context/Settings";
import Title from "../Title";
import { Switch, Icon } from "@blueprintjs/core";
import './styles.css';

const Header = () => {

  const theme = useContext(ThemeContext);
  const [checked, setChecked] = useState(true);

  const handleChecked = () => {
    setChecked(!checked);
  }

  return (
    <>
      <Title />
      <h4>{theme.mode}</h4>
        <Icon icon="settings" />
        <Switch checked={checked} label={theme.mode} onChange={handleChecked}/>
        <SettingsContext.Consumer>
          {settings => <p>{settings.email}</p>}
        </SettingsContext.Consumer>
    </>
  )
};

export default Header;
