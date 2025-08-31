

import { useEffect, useMemo, useState } from 'react';
import { getUsers, getUser, createUser, updateUser, deleteUser } from '../api/userService';

export function useUsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    async function load() {
      try {
        setLoading(true);
        setError('');
        const data = await getUsers(controller.signal);
        setUsers(data);
      } catch (err) {
        if (err.name !== 'AbortError') setError(err.message || 'Failed to fetch users.');
      } finally {
        setLoading(false);
      }
    }
    load();
    return () => controller.abort();
  }, []);

  const actions = useMemo(() => ({
    async addUser(payload) {
      setError('');
      setSuccess('');
      try {
        const created = await createUser(payload);
        // JSONPlaceholder returns an id field sometimes; if not, fallback to timestamp
        const id = created.id ?? Date.now();
        const user = { id, ...payload };
        setUsers(prev => [user, ...prev]);
        setSuccess('User created successfully.');
        return user;
      } catch (err) {
        setError(err.message || 'Failed to create user.');
        throw err;
      }
    },
    async editUser(id, payload) {
      setError('');
      setSuccess('');
      try {
        const updated = await updateUser(id, payload);
        setUsers(prev => prev.map(u => (u.id === Number(id) ? { ...u, ...updated } : u)));
        setSuccess('User updated successfully.');
        return updated;
      } catch (err) {
        setError(err.message || 'Failed to update user.');
        throw err;
      }
    },
    async removeUser(id) {
      setError('');
      setSuccess('');
      try {
        await deleteUser(id);
        setUsers(prev => prev.filter(u => u.id !== Number(id)));
        setSuccess('User deleted successfully.');
        return true;
      } catch (err) {
        setError(err.message || 'Failed to delete user.');
        throw err;
      }
    },
    clearSuccess() {
      setSuccess('');
    },
  }), []);

  return { users, loading, error, success, ...actions };
}

export function useUserById(id) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(!!id);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!id) return;
    const controller = new AbortController();
    async function load() {
      try {
        setLoading(true);
        setError('');
        const data = await getUser(id, controller.signal);
        setUser(data);
      } catch (err) {
        if (err.name !== 'AbortError') setError(err.message || 'Failed to fetch user.');
      } finally {
        setLoading(false);
      }
    }
    load();
    return () => controller.abort();
  }, [id]);

  return { user, setUser, loading, error };
}