import React, { useState } from "react";
import { useLogInMutation } from "../redux/slices/UserSlice";
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [logIn, {error}] = useLogInMutation();

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const data = await logIn({ email, password }).unwrap();
      navigate('/');
      console.log(data);
    } catch (err) {
      console.log(err?.data?.error || error);
    }
  };

  console.log(password);
  
  return (
    <div className="formContainer">
      <form onSubmit={submitForm}>
        <h5 className="formTitle">Sign In</h5>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          id="email"
          name="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="password"
          id="password"
          name="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="submitBtn">Sign In</button>
      </form>
    </div>
  );
};

export default SignInForm;
