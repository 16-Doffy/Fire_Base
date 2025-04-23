import { Route, Routes } from "react-router-dom";
import "./App.css";
import FireBase from "./components/FireBase/FireBase";
import FirebaseAuth from "./components/FireBase/FirebaseAuth";
import { AuthProvider } from "./components/contexts/auth-context";
import SignUpPage from "./components/pages/SignupPage";
import { ToastContainer } from "react-toastify";
import SignIn from "./components/pages/SignIn";
import Homepage from "./components/pages/Homepage";
import NotFoundPage from "./components/pages/NotFoundPage";

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
        <Route path="/" element={<Homepage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <ToastContainer />
      </AuthProvider>
    </div>
  );
}


export default App;
