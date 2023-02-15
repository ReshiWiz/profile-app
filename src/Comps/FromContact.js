import React, { useState } from "react";
import "./FormStyle.css";
const FromContact = () => {

  
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [subject, setSubject] = useState("");
  // const [message, setMessage] = useState("");

  // const OnchangeEvent = (e) => {

  //   e.preventDefault();
  //   setEmail("");
  //   setMessage("");
  //   setName("");
  //   setName("");
  // };

  return (
    <div className="form">
      <form
        action="https://getform.io/f/b16f54ea-0633-4993-826e-1f522e14d19d"
        method="POST"
      >
        <label for="name">name</label>
        <input
          type="text"
          name="name"
          // onChange={(e) => setName(e.target.value)}
          // value={name}
        />

        <label for="email">email</label>
        <input
          type="email"
          name="email"
          // onChange={(e) => setEmail(e.target.value)}
          // value={email}
        />

        <label for="text">subject</label>
        <input
          type="text"
          name="email"
          // onChange={(e) => setSubject(e.target.value)}
          // value={subject}
        />

        <label for="message">message</label>
        <input
          type="text"
          name="message"
          // onChange={(e) => setMessage(e.target.value)}
          // value={message}
        />

        <button type="submit" className="btn" >
          Send
        </button>
      </form>
    </div>
  );
};

export default FromContact;
