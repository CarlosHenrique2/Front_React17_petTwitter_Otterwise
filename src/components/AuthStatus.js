import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";

function AuthStatus() {
  let auth = useAuth();
  let navigate = useNavigate();

  if (!auth.user) {
    return <p>Você não está logado.</p>;
  }

  return (
    <p>
      Bem vindo(a) {auth.user?.name}!{" "}
      <button
        onClick={() => {
          auth.signout(() => navigate("/"));
        }}
      >
        Sair
      </button>
    </p>
  );
}

export default AuthStatus;
