


import { useEffect, useState } from 'react';

const initial = { name: '', email: '', phone: '' };

export default function UserForm({ initialValues = initial, onSubmit, submitting = false }) {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});

  useEffect(() => setValues({ ...initial, ...initialValues }), [initialValues]);

  function validate(v) {
    const e = {};
    if (!v.name?.trim()) e.name = 'Name is required';
    if (!v.email?.trim()) e.email = 'Email is required';
    if (!v.phone?.trim()) e.phone = 'Phone is required';
    return e;
    }

  function handleChange(e) {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const eObj = validate(values);
    setErrors(eObj);
    if (Object.keys(eObj).length) return;
    await onSubmit(values);
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" value={values.name} onChange={handleChange} placeholder="Jane Doe" />
        {errors.name && <span className="field-error">{errors.name}</span>}
      </div>

      <div className="form-row">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" value={values.email} onChange={handleChange} placeholder="jane@example.com" />
        {errors.email && <span className="field-error">{errors.email}</span>}
      </div>

      <div className="form-row">
        <label htmlFor="phone">Phone</label>
        <input id="phone" name="phone" value={values.phone} onChange={handleChange} placeholder="+91 98765 43210" />
        {errors.phone && <span className="field-error">{errors.phone}</span>}
      </div>

      <div className="form-actions">
        <button className="btn" type="submit" disabled={submitting}>
          {submitting ? 'Saving...' : 'Save'}
        </button>
      </div>
    </form>
  );
}