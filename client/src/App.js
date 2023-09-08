import "./App.css";
import Header from "./components/Header";
import Account from "./pages/Account";
import Home from "./pages/Home";
import RegisterForm from "./pages/RegisterForm";
import SignInForm from "./pages/SignInForm";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Header />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/signin" element={<SignInForm />} />
        {/* Private routes */}
        <Route path="" element={<PrivateRoute />}>
          <Route path="/account" element={<Account />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
