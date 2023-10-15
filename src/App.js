import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Login from "./page/account/login";
import Register from "./page/account/register";
import ForgetPass from "./page/account/forgetPass";
import DefaultLayout from "./components/dashboard/defaultLayout";
import EmployeeProfile from "./components/profile/employeeProfile";

function App() {
  return (
    <div className="App">
      <ToastContainer />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget-password" element={<ForgetPass />} />
        <Route path="/" element={<DefaultLayout />} />
        <Route path="/profile" element={<EmployeeProfile />} />
      </Routes>
    </div>
  );
}

export default App;
