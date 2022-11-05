import IconButton from "@mui/material/IconButton";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

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
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState(null);
  const [executor, setExecutor] = useState("");

  const { register } = useAuth();

  // let newObj = {
  //   first_name: name,
  //   last_name: lastName,
  //   email: email,
  //   password: pass,
  //   password2: passConfirm,
  // };
  function handleSave() {
    if (
      !name.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !pass.trim() ||
      !passConfirm.trim() ||
      !phone.trim()
    ) {
      alert("Some inputs are empty!");
    } else {
      console.log("HELLO", passConfirm);
      let formData = new FormData();
      formData.append("first_name", name);
      formData.append("last_name", lastName);
      formData.append("email", email);
      formData.append("password", pass);
      formData.append("password2", passConfirm);
      formData.append("phone_number", phone);
      formData.append("image", image);
      formData.append("status", executor);
      console.log(formData);
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
            label="Имя"
            placeholder="Placeholder"
            multiline
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            sx={{ marginBottom: "6px", width: "50%" }}
            id="outlined-textarea"
            label="Фамилие"
            placeholder="Placeholder"
            multiline
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <TextField
            sx={{ marginBottom: "10px", width: "50%" }}
            id="outlined-textarea"
            label="Почта"
            placeholder="Placeholder"
            multiline
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            sx={{ marginBottom: "10px", width: "50%" }}
            id="outlined-textarea"
            label="Номер"
            placeholder="Placeholder"
            multiline
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <FormControl sx={{ m: 1, width: "50%" }} variant="outlined">
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
          <FormControl sx={{ m: 1, width: "50%" }} variant="outlined">
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

          <div className="input__wrapper">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>

          <FormControl className="register_executor_main">
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              onChange={(e) => setExecutor(e.target.value)}
              className="register_executor"
            >
              <FormControlLabel
                value="1"
                control={<Radio />}
                label="Пользователь"
                className="register_executor_label"
              />
              <FormControlLabel
                value="2"
                control={<Radio />}
                label="Исполнитель"
                className="register_executor_label"
              />
            </RadioGroup>
          </FormControl>

          <button className="custom-btn btn-4" onClick={handleSave}>
            <span>Подтвердить</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default RegistrationPage;
