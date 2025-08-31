// src/pages/AddUserPage.jsx
// Create user page.

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUsersList } from '../hooks/useUsers';
import UserForm from '../components/users/UserForm';
import ErrorMessage from '../components/common/ErrorMessage';

export default function AddUserPage() {
  const navigate = useNavigate();
  const { addUser } = useUsersList(); // fresh instance loads list; for demo it’s fine
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(values) {
    try {
      setSubmitting(true);
      setError('');
      await addUser(values);
      navigate('/');
    } catch (e) {
      setError(e.message || 'Failed to create user.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="container">
      <header className="page-header">
        <h1>Add user</h1>
      </header>
      <ErrorMessage message={error} />
      <UserForm onSubmit={handleSubmit} submitting={submitting} />
    </section>
  );
}