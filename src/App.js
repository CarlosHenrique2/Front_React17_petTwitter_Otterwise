import { Routes, Route } from "react-router-dom";
import { AuthProvider, RequireAuth } from "./context/auth-context";
import Login from "./routes/Login";
import Layout from "./components/Layout";
import Paginainicial from "./routes/Paginainicial";
import Home from "./routes/home";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Paginainicial />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/Home"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
