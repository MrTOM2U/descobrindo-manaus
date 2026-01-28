import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function LogoutButton() {
  const { logout } = useContext(AuthContext);

  function handleLogout() {
    const confirmLogout = window.confirm("Deseja realmente sair?");
    if (confirmLogout) {
      logout();
    }
  }

  return <button onClick={handleLogout}>Sair</button>;
}
