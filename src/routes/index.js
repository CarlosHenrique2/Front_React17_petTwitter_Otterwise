import { Routes, Route } from "react-router-dom";

import { AuthProvider, RequireAuth } from "../context/auth-context";

import Login from "./Login";
import Criar from "./Criar";
import Home from "./home";
import Profile from "./Profile";

export function AppRoutes() {
  return (
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
      <Route
        path="/Home?user:id"
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      />
      <Route
        path="/profile/:id"
        element={
          <RequireAuth>
            <Profile />
          </RequireAuth>
        }
      />
    </Routes>
  );
}

/* /Profile/:id */
