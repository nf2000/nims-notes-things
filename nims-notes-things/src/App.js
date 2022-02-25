import React from "react";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./redux/store";
import Notes from "./components/notes";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header>Nims Notes Things</Header>
        <Form />
        <Notes/>
      </div>
    </Provider>
  );
}
export default App;

