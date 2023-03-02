import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import Login from "./pages/Auth/Login/login";
import SocialsLogin from "./pages/Auth/Login/socials-login";
import Signup from "./pages/Auth/Signup/signup";
import SocialsSignup from "./pages/Auth/Signup/socials-signup";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import Homepage from "./pages/Homepage";

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={!user && <Login />} />
          <Route path="/login/socials" element={!user ? <SocialsLogin /> : <Navigate to="/" />} />
          <Route path="/signup" element={!user && <Signup />} />
          <Route path="/signup/socials" element={!user ? <SocialsSignup /> : <Navigate to="/" />} />
          <Route path="/reset-password" element={!user && <ForgotPassword />} />
          <Route path="/home" element={ <Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
