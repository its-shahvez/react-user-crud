// src/pages/EditUserPage.jsx
// Edit user page with prefilled form.

import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useUserById, useUsersList } from '../hooks/useUsers';
import Spinner from '../components/common/Spinner';
import ErrorMessage from '../components/common/ErrorMessage';
import UserForm from '../components/users/UserForm';

export default function EditUserPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, setUser, loading, error } = useUserById(id);
  const { editUser } = useUsersList();
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    // When fetched user arrives, set local form values implicitly via props
  }, [user]);

  async function handleSubmit(values) {
    try {
      setSubmitting(true);
      setSubmitError('');
      await editUser(id, values);
      // optimistically update local user too
      setUser(prev => ({ ...prev, ...values }));
      navigate('/');
    } catch (e) {
      setSubmitError(e.message || 'Failed to update user.');
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) return <div className="container"><Spinner label="Loading user..." /></div>;
  if (error) return <div className="container"><ErrorMessage message={error} /></div>;
  if (!user) return <div className="container"><p className="muted">User not found.</p></div>;

  return (
    <section className="container">
      <header className="page-header">
        <h1>Edit user</h1>
      </header>
      <ErrorMessage message={submitError} />
      <UserForm initialValues={user} onSubmit={handleSubmit} submitting={submitting} />
    </section>
  );
}