import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../redux/actions/auth.action";

import "./loginscreen.scss";

function LoginScreen() {
  const dispatch = useDispatch();

  const accessToken = useSelector((state) => state.auth.accessToken);

  const handleLogin = () => {
    dispatch(login());
  };

  const history = useHistory();

  useEffect(() => {
    if (accessToken) {
      history.push("/");
    }
  }, [accessToken, history]);

  return (
    <div className="login">
      <div className="login__container">
        <h2>Welcome to M24 Tube</h2>
        <img
          src="https://mefigure.in/uploads/setting/1693886173-MzLYIltlUp.png"
          alt=""
        />
        <button onClick={handleLogin}>Login With google</button>
        <p>This Project is made using Self Data API</p>
      </div>
    </div>
  );
}

export default LoginScreen;
