import React, { useEffect, useState } from "react";
import { useLogInMutation } from "../redux/slices/UserSlice";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "../redux/slices/AuthSlice";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const SignInForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector(state => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [logIn, { error }] = useLogInMutation();
  
  // Check if user is already logged in, if so, redirect to home page
  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  },[userInfo,navigate]);

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const data = await logIn({ email, password }).unwrap();
      dispatch(setUserInfo({ ...data }));
      navigate('/');
      console.log(data);
    } catch (err) {
      toast.error(err?.data?.error || error);
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
        <p className="regOption">Don't have an account ? <NavLink to={'/register'}>Register</NavLink></p>
      </form>
    </div>
  );
};

export default SignInForm;
