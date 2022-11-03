import IconButton from "@mui/material/IconButton";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";

import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { useAuth } from "../contexts/AuthContext";
import "../styles/registerLogin.css";

const RegistrationPage = () => {
  const { handleRegister, error, setError } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [passConfirm, setPassConfirm] = useState("");
  const [image, setImage] = useState(null);

  const { register } = useAuth();

  // let newObj = {
  //   first_name: name,
  //   last_name: lastName,
  //   email: email,
  //   password: pass,
  //   password2: passConfirm,
  // };
  function handleSave() {
    if (!name.trim() || !lastName.trim() || !email.trim()) {
      alert("Some inputs are empty!");
    } else {
      console.log("HELLO", passConfirm);
      let formData = new FormData();
      formData.append("first_name", name);
      formData.append("last_name", lastName);
      formData.append("email", email);
      formData.append("password", pass);
      formData.append("password2", passConfirm);
      formData.append("image", image);
      handleRegister(formData, navigate);
    }
  }
  // function handleRegister(){
  //   register(newObj)
  //   setName('')
  //   setLastName('')
  //   setEmail('')
  //   setPass('')
  //   setPassConfirm('')

  // }

  useEffect(() => {
    setError(false);
  }, []);

  /////////////////////
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    setPass(event.target.value);
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

  /////////////////////

  return (
    <>
      <div className="register_main">
        <div className="register_form">
          <h2 className="register_form_title">Sign Up</h2>

          <TextField
            sx={{ marginBottom: "10px", width: "50%" }}
            id="outlined-textarea"
            label="name"
            placeholder="Placeholder"
            multiline
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            sx={{ marginBottom: "6px", width: "50%" }}
            id="outlined-textarea"
            label="lastName"
            placeholder="Placeholder"
            multiline
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <TextField
            sx={{ marginBottom: "10px", width: "50%" }}
            id="outlined-textarea"
            label="Email"
            placeholder="Placeholder"
            multiline
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <FormControl sx={{ m: 1, width: "50%" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
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
          <FormControl sx={{ m: 1, width: "50%" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Confirm
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

          <div className="input__wrapper">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>

          <button className="custom-btn btn-4" onClick={handleSave}>
            <span>Подтвердить</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default RegistrationPage;
