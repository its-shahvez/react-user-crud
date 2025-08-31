// src/components/common/ErrorMessage.jsx
// Displays an error with optional retry.

export default function ErrorMessage({ message, onRetry }) {
  if (!message) return null;
  return (
    <div className="error">
      <span className="error-text">Error: {message}</span>
      {onRetry && (
        <button className="btn btn-secondary" onClick={onRetry} aria-label="Retry">
          Retry
        </button>
      )}
    </div>
  );
}