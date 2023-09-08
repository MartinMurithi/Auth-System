import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeUserInfo } from "../redux/slices/AuthSlice";
import { useNavigate } from "react-router-dom";
import { useLogOutMutation } from "../redux/slices/UserSlice";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [logoutApiCall, {error}] = useLogOutMutation();

  const { userInfo } = useSelector((state) => state.auth);
  console.log(userInfo);

  const handleLogout = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(removeUserInfo());
      console.log('logged out');
      navigate('/');
    } catch (err) {
      toast.error(err?.error || error);
    }
  }
  return (
    <header>
      <nav>
        <div className="leftSide">
          <NavLink to={"/"} className="logo">
            MERN AUTH
          </NavLink>
        </div>

        <div className="rightSide">
          {userInfo ? (
            <>
              <p>{userInfo?.user?.name}</p>
              <NavLink to={'/account'}>Account</NavLink>
              <button onClick={handleLogout}>LogOut</button>
            </>
          ) : (
            <>
              <NavLink to={"/signin"} className="signIn">
                {/* <FaArrowRightFromBracket /> */}
                <p>Sign In</p>
              </NavLink>
              <NavLink to={"/register"} className="register">
                {/* <FaRegistered /> */}
                <p>Register</p>
              </NavLink>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
