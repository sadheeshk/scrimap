import React from"react"
import ReactDOM from "react-dom"
import CheB from "./components/Checkbox"
import App from "./components/App"
import Style from "./style.css"
import ContactList from "./search-components/ContactList"
import JokeC from "./JokeComponent/JokeC"
import Homepage from "./utube/Homepage"
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import MovieData from "./utube/display/MovieData"

ReactDOM.render(
  <Homepage/>,
  document.getElementById("root")
)
