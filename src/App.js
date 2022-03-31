import { Routes, Route } from "react-router-dom";
import { AuthProvider, RequireAuth } from "./context/auth-context";
import Login from "./routes/Login";
import Layout from "./components/Layout";
import Criar from "./routes/Criar";
import Home from "./routes/home";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Criar />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/Home"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
