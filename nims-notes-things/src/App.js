import './App.css';
import Input from './input';
import React,{useState} from "react";


function App() {

  const [formData, setFormData] = useState({name: ''});
  const [formValid, setFormValid] =useState({name: false});

  const handleOnChange = (e, key) => {
    const newForm = {
      ...formData,
      [key]: e.target.value,
    }
   setFormData(newForm)
  }
  const handleOnBlur = (e,key) => {
    const valid = {
      ...formValid,
      [key]: e.target.value,
    }
    if( valid === null ){
     alert("This field is required");
    }
    else{
      setFormValid(true)
    }
  }
  

  return (
    <div className="App">
      <Input
        name= "name"
        type= "text"
        placeholder="Please Enter Your Name"
        onChange={(e)=> handleOnChange(e, "name")}
        onBlur={(e)=> handleOnBlur(e, "name")}
        value={formData.name}
      />
    <h5>Name: {formData.name}</h5>
    </div>
  );
};

export default App;
