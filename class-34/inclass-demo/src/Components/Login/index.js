import { useContext, useState } from "react";
import useForm from '../../hooks/form.js';
import { AuthContext } from "../../Context/Auth";
import { When } from "react-if";

const Login = () => {
  const [defaultValues] = useState({})
  const { isLoggedIn, login } = useContext(AuthContext);
  const { handleChange, handleSubmit } = useForm(loginUser, defaultValues);

  function loginUser({ username, password }) {
    login(username, password)
  }

  return (
    <>
      <When condition={!isLoggedIn}>
        <form onSubmit={handleSubmit}>

          <h2>Log In</h2>

          <label>
            <span>Username</span>
            <input data-testid="username" onChange={handleChange} required name="username" type="text" />
          </label>

          <label>
            <span>Password</span>
            <input data-testid="password" onChange={handleChange} required name="password" type="text" />
          </label>

          <label>
            <button data-testid="login" type="submit">Log In</button>
          </label>
        </form>
      </When>
    </>
  )


};

export default Login;
