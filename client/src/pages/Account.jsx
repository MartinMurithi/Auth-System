import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Account = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // setName((state) => state.userInfo.user?.name);
  }, [userInfo]);
  return (
    <div className="formContainer">
      <form>
        <h5 className="formTitle">Welcome username</h5>
        <label htmlFor="admNo">Username</label>
        <input
          type="text"
          placeholder="Username"
          id="username"
          name="username"
          required
          value={userInfo?.user?.name}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          id="email"
          name="email"
          required
          value={userInfo?.user?.email}
          //   onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="password"
          id="password"
          name="password"
          required
          value={userInfo?.user?.password}
          //   onChange={(e) => setAge(e.target.value)}
        />
        <button className="submitBtn">Update Account</button>
      </form>
    </div>
  );
};

export default Account;
