import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };

  const sendForm = (e) => {
    e.preventDefault();
    console.log(name);
    setName("");
  };

  return (
    <form onSubmit={sendForm}>
      <input type="text" value={name} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
