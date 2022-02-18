import './App.css';
import Input from './input';
import React,{useState} from "react";


function App() {

  const [formData, setFormData] = useState({name: ''});
  // const [formValid, setFormValid] =useState({name: false});

  const handleOnChange = (e, key) => {
    const newForm = {
      ...formData,
      [key]: e.target.value,
    }
   setFormData(newForm)
  }
  const handleOnBlur = e => {
    if(formData.name === ''){
      alert(e.target.name + " is required")
    }
  }
  return (
    <div className="App">
      <Input
        name= "name"
        type= "text"
        placeholder="Please Enter Your Name"
        onChange={(e)=> handleOnChange(e, "name")}
        onBlur={handleOnBlur}
        value={formData.name}
      />
    <h5>Name: {formData.name}</h5>
    </div>
  );
};

export default App;
