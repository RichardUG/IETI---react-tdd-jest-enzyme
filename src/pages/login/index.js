import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Paper, Avatar, TextField, makeStyles, } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import UserIcon from "@mui/icons-material/Person";
import PasswordIcon from "@mui/icons-material/Password";
import ListItemIcon from "@mui/material/ListItemIcon";
import {ThemeContext} from "../../ThemeContext";
import "./login.scss";
const Login = () => {
  const {state} = useContext(ThemeContext);
  const paperStyle = {
    padding: 20,
    height: "60vh",
    width: 310,
    margin: "20px auto",
    background: `${state.isDarkMode ? "rgb(98, 3, 187)" : "white"}`
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleEmail = (e) => {
    const { value } = e.currentTarget;
    setEmail(value);
  };
  const handlePassword = (e) => {
    const { value } = e.currentTarget;
    setPassword(value);
  };
  const useStyles = makeStyles({
    inputlight: {
      color: "black"
    },
    inputdark: {
      color: "white"

    }
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    if (email !== "" && password !== "") {
      fetch(window.$users + "/v1/auth", {
        mode: "cors",
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          window.$token = json.token;
          window.$expiration = json.expirationDate;
          navigate("../tasks");
        });
    }
  };
  const classes = useStyles();
  return (
      <Grid >
        <form onSubmit={handleSubmit} className="">
          <Paper elevation={10} style={paperStyle} className="card">
            <Grid align="center">
              <Avatar style={avatarStyle}>
                <LockOutlinedIcon />
              </Avatar>
              <h2 className={`${state.isDarkMode ? "dark" : "light"}`}>Iniciar Sesion</h2>
            </Grid>
            <div >
              <div >
                <ListItemIcon>
                  <UserIcon className={`${state.isDarkMode ? "dark" : "light"}`} />{" "}
                </ListItemIcon>
                <TextField 
                  inputProps={{ className: `${state.isDarkMode ? classes.inputdark : classes.inputlight} `} }
                  variant="outlined"
                  id="user"
                  name="user"
                  label="Username"
                  type="email"
                  value={email?.email}
                  onChange={handleEmail}
                />
              </div>
              <br></br>
              <div>
                <ListItemIcon>
                  <PasswordIcon className={`${state.isDarkMode ? "dark" : "light"}`} />{" "}
                </ListItemIcon>
                <FormControl className={`${state.isDarkMode ? "dark" : "light"}`}  variant="outlined">
                  <InputLabel
                    htmlFor="outlined-adornment-password"
                    value={password}
                  >
                    Password
                  </InputLabel>
                  <OutlinedInput
                    inputProps={{ className: `${state.isDarkMode ? classes.inputdark : classes.inputlight}` }}
                    fullWidth
                    label="Password"
                    id="outlined-adornment-password-login"
                    type="password"
                    name="password"
                    autoComplete="off"
                    onChange={handlePassword}
                  />
                </FormControl>
              </div>
            </div>
            <br />
            <br />
            <br />
            <button className={`boton-${state.isDarkMode ? "dark" : "light"}`} type="submit" variant="contained">
              Sign in
            </button>
          </Paper>
        </form>
      </Grid>
  );
};

export default Login;