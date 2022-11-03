import React, { useState, useEffect, useContext } from 'react'

import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";

import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import '../styles/registerLogin.css'
import { useNavigate } from "react-router-dom";
import { authContext } from '../contexts/AuthContext'

const LoginPage = () => {
  const navigate = useNavigate();
  const { handleLogin, error, setError } = useContext(authContext);
  const [email, setEmail] = useState('');
  const [pass1, setPass1] = useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  function handleAuth(){
    let formData = new FormData();
    formData.append('email', email);
    formData.append('password', pass1);

    handleLogin(formData, email, navigate)
  };

  useEffect(()=> {
    setError(false);
  }, [])

  const handleChange = (prop) => (event) => {
    setPass1({ ...pass1, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setPass1({
      ...pass1,
      showPassword: !pass1.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


 

  return (
    <>
      <div className="register_main">
        <div className="register_form">
          <h2 className='register_form_title'>Sign In</h2>
          
          <TextField sx={{marginBottom: '10px', width: '50%'}}
            id="outlined-textarea"
            label="Email"
            placeholder="Placeholder"
            multiline
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
      


          <FormControl sx={{ m: 1, width: "50%",  }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={pass1.showPassword ? "text" : "password"}
              value={pass1.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {pass1.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />


          </FormControl>
          <button className="custom-btn btn-4"onClick={handleAuth}><span>Войти</span></button>
        </div>
      </div>
    </>
  );
};

export default LoginPage;