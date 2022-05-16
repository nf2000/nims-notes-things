import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./redux/store";
import Notes from "./components/notes";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Login";
import Home from "./components/Home";
import axios from "axios";
import firebase from "./service/firebase";

function App() {
  const [user, setUser] = useState("null");
  const [quote, setQuote] = useState("");

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  console.log(user);

  //.then returns a promise which returns an api reponse
  const getQuote = () => {
    axios
      .get("https://api.quotable.io/random")
      .then((response) => {
        setQuote(response.data.content);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Login /> */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        {user ? <Home user={user} /> : <Login />}

        <Header>Nims Notes Things</Header>
        <button onClick={getQuote}>Get Quote</button>
        {quote && <p>{quote}</p>}
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/notes" element={<Notes />} />
            <Route exact path="/editNote/:noteId" element={<Form />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
