import logo from "./logo.svg";
import "./App.css";
import AdminLogin from "./Components/Admin/AdminLogin";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserRegister from "./Components/Users/UserRegister";
import UserLogin from "./Components/Users/UserLogin";
import UserHomePage from "./Components/Users/UserHomePage";
import Aboutus from "./Components/Users/Aboutus";
import UserProfile from "./Components/Users/UserProfile";
import Layout from "./Components/Users/Layout";
import AdminUpload from "./Components/Admin/AdminUpload";
import AdminHomePage from "./Components/Admin/AdminHomePage";
import UserCart from "./Components/Users/UserCart";
import AdminDashboard from "./Components/Admin/AdminDashboard";
import Search from "./Components/Users/Search";
import Payment from "./Components/Users/Payment";
import CustomerLanding from "./Components/Users/CustomerLanding";
import AdminGraph from "./Components/Admin/AdminGraph";
import ForgetPassword from "./Components/Users/ForgetPassword";
import ResetPassword from "./Components/Users/ResetPassword";
import AdminItemdetails from "./Components/Admin/AdminItemdetails";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/adminitemdetails" element={<AdminItemdetails />} />

          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/uploadpage" element={<AdminUpload />} />
          <Route path="/adminhome" element={<AdminHomePage />} />
          <Route path="/admingraph" element={<AdminGraph />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/resetpassword" element={<ResetPassword />} />

          <Route path="/" element={<CustomerLanding />} />

          <Route element={<Layout />}>
            <Route path="/userregister" element={<UserRegister />} />
            <Route path="/userlogin" element={<UserLogin />} />
            <Route path="/userhomepage" element={<UserHomePage />} />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/usercart" element={<UserCart />} />
            <Route path="/sweetsearch" element={<Search />} />
            <Route path="/payment" element={<Payment />} />
           
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
