import React, { useState } from 'react';
import './App.css';
import TextArea from './TextArea';

function App() {
  const [formData, setFormData] = useState({note: ''});

  const handleOnChange = (e, key) => {
    const newForm = {
      ...formData,
      [key]: e.target.value,
    }
   setFormData(newForm)
  }

  const handleOnBlur = (e) => {
    if(formData.note === ''){
      alert("This field is required")
    }
  }
  
  return (
    <div className="App">
      <TextArea
        name= "name"
        placeholder="Please Enter Your Note"
        onChange={(e)=> handleOnChange(e, "note")}
        onBlur={handleOnBlur}
        value={formData.note}
      />
    <h5>Note: {formData.note}</h5>
    </div>
  );
};

export default App;
