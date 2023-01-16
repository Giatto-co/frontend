import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Auth/Login/login";
import SocialsLogin from "./pages/Auth/Login/socials-login";
import Signup from "./pages/Auth/Signup/signup";
import SocialsSignup from "./pages/Auth/Signup/socials-signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<SocialsLogin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/socials" element={<SocialsLogin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup/socials" element={<SocialsSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
