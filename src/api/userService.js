
const BASE_URL = 'https://jsonplaceholder.typicode.com';

async function handleResponse(res) {
  if (!res.ok) {
    const message = `API error ${res.status}: ${res.statusText}`;
    throw new Error(message);
  }
  return res.json();
}

export async function getUsers(signal) {
  const res = await fetch(`${BASE_URL}/users`, { signal });
  return handleResponse(res);
}

export async function getUser(id, signal) {
  const res = await fetch(`${BASE_URL}/users/${id}`, { signal });
  return handleResponse(res);
}

export async function createUser(data) {
  const res = await fetch(`${BASE_URL}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return handleResponse(res);
}

export async function updateUser(id, data) {
  const res = await fetch(`${BASE_URL}/users/${id}`, {
    method: 'PUT', // Using PUT per requirements
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return handleResponse(res);
}

export async function deleteUser(id) {
  const res = await fetch(`${BASE_URL}/users/${id}`, {
    method: 'DELETE',
  });
  // JSONPlaceholder returns an empty object; treat ok as success
  if (!res.ok) {
    const message = `API error ${res.status}: ${res.statusText}`;
    throw new Error(message);
  }
  return true;
}