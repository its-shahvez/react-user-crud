// src/pages/HomePage.jsx
// Main list view with loading, error, and success messages.

import { Link } from 'react-router-dom';
import { useUsersList } from '../hooks/useUsers';
import Spinner from '../components/common/Spinner';
import ErrorMessage from '../components/common/ErrorMessage';
import UserList from '../components/users/UserList';

export default function HomePage() {
  const { users, loading, error, success, removeUser, clearSuccess } = useUsersList();

  async function handleDelete(id) {
    // Optional confirm for better UX
    const ok = window.confirm('Delete this user?');
    if (!ok) return;
    await removeUser(id);
  }

  return (
    <section className="container">
      <header className="page-header">
        <h1>Users</h1>
        <Link className="btn" to="/add-user">Add user</Link>
      </header>

      {loading && <Spinner label="Loading users..." />}

      {!loading && error && <ErrorMessage message={error} />}

      {!loading && success && (
        <div className="success" role="status" onAnimationEnd={clearSuccess}>
          {success}
        </div>
      )}

      {!loading && !error && <UserList users={users} onDelete={handleDelete} />}
    </section>
  );
}