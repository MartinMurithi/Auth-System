import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <section>
      <h3>Authentication System</h3>
      <p className="appDescription">
        A robust MERN stack authentication system with JSON Web Tokens (JWT) and
        bcrypt for secure user authentication
      </p>
      <div className="btns">
        <button onClick={()=>navigate('/signin')}>Sign In</button>
        <button onClick={()=>navigate('/register')}>Register</button>
      </div>
    </section>
  );
};

export default Home;
