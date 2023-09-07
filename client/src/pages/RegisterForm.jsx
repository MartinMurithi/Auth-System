import React, { useState } from "react";
import { useRegisterMutation } from "../redux/slices/UserSlice";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [handleRegister, { error }] = useRegisterMutation();
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await handleRegister({ name, email, password }).unwrap();
      navigate("/");
      console.log(data);
    } catch (err) {
      console.log(err?.data?.error || error);
    }
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleFormSubmit}>
        <h5 className="formTitle">Create Account</h5>
        <label htmlFor="admNo">Username</label>
        <input
          type="text"
          placeholder="Username"
          id="username"
          name="name"
          value={name}
          onChange={(e) => setname(e.target.value)}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          id="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="password"
          id="password"
          name="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="submitBtn">Create Account</button>
      </form>
    </div>
  );
};

export default RegisterForm;
