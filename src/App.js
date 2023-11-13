import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./component/LandingPage";
import RequestPage from "./component/RequestPage";
import SignInPage from "./component/SignInPage";
import ContactPage from "./component/ContactPage"
import SignUpPage from "./component/SignUpPage"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage/>} />
        <Route exact path="/request" element={<RequestPage/>} />
        <Route exact path="/signIn" element={<SignInPage/>} />
        <Route exact path="/contact" element={<ContactPage/>} />
        <Route exact path="/signUp" element={<SignUpPage/>} />
       
      </Routes>
    </div>
  );
}

export default App;
