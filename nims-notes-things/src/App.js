import React from "react";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./redux/store";
import Notes from "./components/notes";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header>Nims Notes Things</Header>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/notes/:id/update" element={<Form />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
