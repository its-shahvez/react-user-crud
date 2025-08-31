// src/components/users/UserItem.jsx
// Single user row for list view.

import { Link } from 'react-router-dom';

export default function UserItem({ user, onDelete }) {
  return (
    <tr>
      <td>{user.name}</td>
      <td><a href={`mailto:${user.email}`}>{user.email}</a></td>
      <td><a href={`tel:${user.phone}`}>{user.phone}</a></td>
      <td className="actions">
        <Link className="btn btn-small" to={`/edit-user/${user.id}`}>Edit</Link>
        <button className="btn btn-small btn-danger" onClick={() => onDelete(user.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
}