import React, { useState, useEffect, useContext } from "react";

import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";

import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import "../styles/registerLogin.css";
import { useNavigate } from "react-router-dom";
import { authContext } from "../contexts/AuthContext";

const ForgotPassConfirmPage = () => {
  const navigate = useNavigate();
  const { forgotPassConfirm, error, setError } = useContext(authContext);
  const [pass, setPass] = useState("");
  const [pass1, setPass1] = useState("");
  const [passConfirm, setPassConfirm] = useState("");

  function handleAuth() {
    let formData = new FormData();
    formData.append("code", pass);
    formData.append("password", pass1);
    formData.append("password2", passConfirm);

    forgotPassConfirm(formData, navigate);
  }

  useEffect(() => {
    setError(false);
  }, []);

  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    setPass1(event.target.value);
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  //////////////
  const [values2, setValues2] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChangee = (prop) => (event) => {
    setValues2({ ...values2, [prop]: event.target.value });
    setPassConfirm(event.target.value);
  };

  const handleClickShowPassworde = () => {
    setValues2({
      ...values2,
      showPassword: !values2.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="register_main">
        <div className="login_form">
          <h2 className="register_form_title">Новый пароль</h2>

          <TextField
            className="loginInputs"
            sx={{ marginBottom: "10px", width: "50%" }}
            id="outlined-textarea"
            label="Разовый пароль с почты"
            placeholder="Placeholder"
            multiline
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />

          <FormControl
            className="loginInputs"
            sx={{ m: 1, width: "50%" }}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Пароль
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <FormControl
            className="loginInputs"
            sx={{ m: 1, width: "50%" }}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Подтверждение
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values2.showPassword ? "text" : "password"}
              value={values2.password}
              onChange={handleChangee("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassworde}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values2.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>

          <button className="custom-btn btn-4" onClick={handleAuth}>
            <span>Поменять пароль</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ForgotPassConfirmPage;
