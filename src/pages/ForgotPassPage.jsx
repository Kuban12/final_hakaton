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

const ForgotPassPage = () => {
  const navigate = useNavigate();
  const { forgotPassword, error, setError } = useContext(authContext);
  const [email, setEmail] = useState("");

  function handleAuth() {
    let formData = new FormData();
    formData.append("email", email);

    forgotPassword(formData, navigate);
  }

  useEffect(() => {
    setError(false);
  }, []);

  return (
    <>
      <div className="register_main">
        <div className="login_form">
          <h2 className="register_form_title">Fish Form</h2>

          <TextField
            className="loginInputs"
            sx={{ marginBottom: "10px", width: "50%" }}
            id="outlined-textarea"
            label="Email"
            placeholder="Placeholder"
            multiline
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button className="custom-btn btn-4" onClick={handleAuth}>
            <span>Отправить пароль</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ForgotPassPage;
