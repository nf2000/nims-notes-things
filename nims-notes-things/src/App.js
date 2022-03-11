import React from "react";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./redux/store";
import Notes from "./components/notes";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
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
        <Header>Nims Notes Things</Header>
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
