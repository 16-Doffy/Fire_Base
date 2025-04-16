import { Route, Routes } from "react-router-dom";
import "./App.css";
import FireBase from "./components/FireBase/FireBase";
import FirebaseAuth from "./components/FireBase/FirebaseAuth";
import { AuthProvider } from "./components/contexts/auth-context";
import SignUpPage from "./components/pages/SignupPage";

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/sign-up" element={<SignUpPage />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
