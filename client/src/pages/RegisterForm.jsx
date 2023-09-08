import React, { useState, useEffect } from "react";
import { useRegisterMutation } from "../redux/slices/UserSlice";
import { useNavigate, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "../redux/slices/AuthSlice";


const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector(state => state.auth);

  const [handleRegister, { error }] = useRegisterMutation();
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

   // Check if user is already logged in, if so, redirect to home page
  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  },[userInfo,navigate]);
  
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleRegister({ name, email, password }).unwrap();
      dispatch(setUserInfo({ name, email, password }));
      navigate('/');
    } catch (err) {
      toast.error(err?.data?.error || error);
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
        <p className="logInOption">Already have an account ? <NavLink to={'/signin'}>LogIn</NavLink></p>
      </form>
    </div>
  );
};

export default RegisterForm;
