import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from './serviceWorkerRegistration';
//window.$dir="http://localhost:8080/"
window.$token = "";
window.$expiration = "";
window.$tasks = "https://taskplannertasks.herokuapp.com";
window.$users = "https://taskplannerusers.herokuapp.com";
ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.register()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
