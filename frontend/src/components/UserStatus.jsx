import { Link, useNavigate } from "react-router-dom";

function UserStatus() {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  }

  if (!user) {
    return (
      <div style={{ marginBottom: 16 }}>
        <p>Você não está logado</p>
        <Link to="/login">Fazer login</Link>
      </div>
    );
  }

  const parsedUser = JSON.parse(user);

  return (
    <div style={{ marginBottom: 16 }}>
      <p>
        Logado como: <strong>{parsedUser.name}</strong> ({parsedUser.email})
      </p>
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
}

export default UserStatus;
