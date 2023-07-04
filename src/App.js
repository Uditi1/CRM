import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/// Imports of Pages ///
import Login from "./Pages/Login/Login";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import EnterOtp from "./Pages/EnterOtp/EnterOtp";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/enterotp" element={<EnterOtp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
