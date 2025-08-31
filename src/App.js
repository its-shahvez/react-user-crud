
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddUserPage from './pages/AddUserPage';
import EditUserPage from './pages/EditUserPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav className="nav">
          <div className="container nav-inner">
            <Link className="brand" to="/">User Manager</Link>
            <div className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/add-user">Add user</Link>
            </div>
          </div>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add-user" element={<AddUserPage />} />
            <Route path="/edit-user/:id" element={<EditUserPage />} />
          </Routes>
        </main>
        <footer className="footer">
          <div className="container">
            <span className="muted">JSONPlaceholder demo CRUD</span>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
