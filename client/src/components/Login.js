import React from "react";

const Login = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const fetched_userName = e.target[0].value;
    props.submit(fetched_userName);
  };
  return (
    <div className="login-container">
      <h1>Chat Prototype</h1>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input placeholder="Enter username" className="login-form"></input>
      </form>
    </div>
  );
};

export default Login;
