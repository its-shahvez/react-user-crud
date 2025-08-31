// src/components/common/Spinner.jsx
// Simple accessible spinner.

export default function Spinner({ label = 'Loading...' }) {
  return (
    <div className="spinner" role="status" aria-live="polite" aria-busy="true">
      <div className="spinner-circle" />
      <span className="spinner-label">{label}</span>
    </div>
  );
}