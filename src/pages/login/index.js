import { useLocation, useNavigate } from "react-router-dom";

import { useAuth } from "../../context/auth-context";

import "./index.css";

function Teste() {
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
      {/*       <p>Você precisa estar logado para ver a página {from}</p> */}

      <h1 className="info_page">Login</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          E-mail: <input name="email" type="text" placeholder="E-mail" />
        </label>{" "}
        <label>
          Senha: <input name="password" type="password" placeholder="Senha" />
        </label>{" "}
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Teste;
