import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Home = () => {
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);
  
  return (
    <section>
      <h3>Authentication System</h3>
      <p className="appDescription">
        A Login system developed using React, Redux, React Router and vanilla
        CSS on the frontend. The backend uses Express, MongoDB and Mongoose for
        the database and will implement authentication using JWT (JSON Web
        Tokens) and HTTP-only cookies. I also used Redux and Redux Toolkit for
        state management.
      </p>
      {!userInfo ? (
          <div className="btns">
            <button onClick={() => navigate("/signin")}>Sign In</button>
            <button onClick={() => navigate("/register")}>Register</button>
          </div>
      ) : null}
    </section>
  );
};

export default Home;
