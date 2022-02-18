import { useState } from "react";

const Form = (props) =>{
  const [name, setName] = useState('');

  const handleChange = event =>{
    setName(event.target.value)
  }

  return(
    <div>
      Name: <input type="text" value={name} onChange={handleChange} />
      <h5>Name: {name}</h5>
    </div>
  )
}

export default Form;
