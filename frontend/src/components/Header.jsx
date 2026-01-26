import { useNavigate } from 'react-router-dom';
import { logout } from '../services/auth';

function Header() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  function handleLogout() {
    logout();
    navigate('/login');
  }

  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 20px',
        borderBottom: '1px solid #ddd',
      }}
    >
      <strong>Descobrindo Manaus</strong>

      {user && (
        <div>
          <span style={{ marginRight: '12px' }}>
            Olá, {user.name}
          </span>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </header>
  );
}

export default Header;
