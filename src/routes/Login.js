import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { signin } = useAuth();

  const from = location.state?.from?.pathname || "/";

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    await signin({ email, password });
    navigate(from, { replace: true });
  }

  return (
    <div>
      <p>Você precisa estar logado para ver a página {from}</p>

      <form onSubmit={handleSubmit}>
        <label>
          email: <input name="email" type="text" />
        </label>{" "}
        <label>
          senha: <input name="password" type="password" />
        </label>{" "}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
