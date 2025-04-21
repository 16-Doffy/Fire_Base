import { Route, Routes } from "react-router-dom";
import "./App.css";
import FireBase from "./components/FireBase/FireBase";
import FirebaseAuth from "./components/FireBase/FirebaseAuth";
import { AuthProvider } from "./components/contexts/auth-context";
import SignUpPage from "./components/pages/SignupPage";
import { ToastContainer } from "react-toastify";
import SignIn from "./components/pages/SignIn";

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<SignUpPage />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
        <ToastContainer />
      </AuthProvider>
    </div>
  );
}


export default App;
