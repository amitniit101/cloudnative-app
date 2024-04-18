import "./App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./routes/ProtectedRoutes";
const Login = lazy(() => import("./pages/Login"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Main = lazy(() => import("./pages/Main"));
const OTP = lazy(() => import("./pages/OTP"));

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route
              path="/dashboard"
              element={<ProtectedRoutes Component={Dashboard} />}
            ></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/verify-otp" element={<OTP />}></Route>
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
