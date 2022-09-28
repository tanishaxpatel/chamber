import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Discover from "./pages/Discover";
import About from "./pages/About";
import Login from "./componets/Login";

import Signup from "./componets/Signup";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from "./componets/ProtectedRoute";
import { RecoilRoot } from "recoil";

const App = () => {
  return (
    <UserAuthContextProvider>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<Login />} />
            <Route path={"/signup"} element={<Signup />} />

            <Route
              path={"/home"}
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path={"/discover"}
              element={
                <ProtectedRoute>
                  <Discover />
                </ProtectedRoute>
              }
            />
            <Route
              path={"/blog"}
              element={
                <ProtectedRoute>
                  <Blog />
                </ProtectedRoute>
              }
            />
            <Route
              path={"/about"}
              element={
                <ProtectedRoute>
                  <About />
                </ProtectedRoute>
              }
            />
            <Route
              path={"/contact"}
              element={
                <ProtectedRoute>
                  <Contact />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </UserAuthContextProvider>
  );
};

export default App;
