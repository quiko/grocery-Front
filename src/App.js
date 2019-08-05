import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import 'materialize-css/dist/css/materialize.min.css';
import "./App.css";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
