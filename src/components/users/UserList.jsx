// src/components/users/UserList.jsx
// Displays a responsive table of users.

import UserItem from './UserItem';

export default function UserList({ users, onDelete }) {
  if (!users?.length) {
    return <p className="muted">No users found.</p>;
  }
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Phone</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => <UserItem key={u.id} user={u} onDelete={onDelete} />)}
        </tbody>
      </table>
    </div>
  );
}