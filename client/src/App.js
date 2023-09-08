import "./App.css";
import Header from "./components/Header";
import Account from "./pages/Account";
import Home from "./pages/Home";
import RegisterForm from "./pages/RegisterForm";
import SignInForm from "./pages/SignInForm";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify"

function App() {
  return (
    <div className="App">
      <Header />
      <ToastContainer/>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/register" element={ <RegisterForm /> } />
        <Route path="/signin" element={ <SignInForm />} />
        <Route path="/account" element={ <Account />} />
      </Routes>
    </div>
  );
}

export default App;
