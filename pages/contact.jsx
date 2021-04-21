import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [thankYou, setThankYou] = useState("");
  const [formStatus, setFormStatus] = useState(false);
  const handleForm = (e) => {
    e.preventDefault();
    console.log(name);
    setThankYou(name);
    setName("");
    setFormStatus(true);
  };
  return (
    <div className="grid place-items-center">
      <h3>Coming Soon</h3>
      {/* <div className="flex flex-col justify-center align-middle">
        {!formStatus ? (
          <form onSubmit={handleForm}>
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              name="Name"
              id="Name"
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </form>
        ) : (
          <div className="w-full bg-green-400 text-center text-white rounded-md shadow-lg flex align-middle px-5 py-2">
            Thank you {thankYou} for reaching out! I'll get back to you shortly.
            <a href="">Return Home</a>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default Contact;
