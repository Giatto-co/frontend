import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import Login from "./pages/Auth/Login/login";
import SocialsLogin from "./pages/Auth/Login/socials-login";
import Signup from "./pages/Auth/Signup/signup";
import SocialsSignup from "./pages/Auth/Signup/socials-signup";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import Homepage from "./pages/Homepage";
import CategoryPage from "./pages/CategoryPage";
import CollectionsPage from "./pages/CollectionsPage/index";
import Collection from "./components/CollectionsComponents";
import DiscoverCollection from "./pages/CollectionsPage/discoverCollection";

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/login" element={!user && <Login />} />
          <Route
            path="/login/socials"
            element={!user ? <SocialsLogin /> : <Navigate to="/home" />}
          />
          <Route path="/signup" element={!user && <Signup />} />
          <Route
            path="/signup/socials"
            element={!user ? <SocialsSignup /> : <Navigate to="/home" />}
          />
          <Route path="/reset-password" element={!user && <ForgotPassword />} />
          {/* <Route
            path="/category/:name"
            element={user ? <CategoryPage /> : <Navigate to="/login" />}
          /> */}
          <Route
            path="/category/:name"
            element={<CategoryPage />}
          />
          <Route
            path="/collections"
            element={<CollectionsPage />}
          />
          <Route
            path="/:name-collections"
            element={<Collection />}
          />
          <Route
            path="/:name-collections/:id"
            element={<DiscoverCollection />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
