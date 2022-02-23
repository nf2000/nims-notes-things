import React from "react";
import "./App.css";
import Form from "./Form";

function App() {
  const [formData, setFormData] = useState({ note: "" });

  const handleOnChange = (e, key) => {
    const newForm = {
      ...formData,
      [key]: e.target.value,
    };
    setFormData(newForm);
  };

  const handleOnBlur = (e) => {
    if (formData.note === "") {
      alert("This field is required");
    }
  };

  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
