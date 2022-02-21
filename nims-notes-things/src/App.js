import "./App.css";
import Form from "./Form";
import empty from "./Form";

function App() {
  return (
    <div className="App">
      <Form />
      {empty.key && <p>This field is required</p>}

    </div>
  );
}

export default App;
