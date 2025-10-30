import React, { useMemo, useState } from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import './styles/theme.css';
import RecipeList from './pages/RecipeList';
import RecipeDetail from './pages/RecipeDetail';
import { recipes } from './data/recipes';

// PUBLIC_INTERFACE
function AppShell() {
  /** Shell layout with header/nav and an outlet area. */
  const [query, setQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    // If user is not on home, navigate home to see filtered results
    if (location.pathname !== '/') navigate('/');
  };

  const resultsCount = useMemo(() => {
    const k = query.trim().toLowerCase();
    if (!k) return recipes.length;
    return recipes.filter(r =>
      r.title.toLowerCase().includes(k) ||
      r.description.toLowerCase().includes(k) ||
      r.tags.some(t => t.toLowerCase().includes(k))
    ).length;
  }, [query]);

  return (
    <>
      <header className="header" role="banner">
        <div className="container">
          <nav className="navbar" aria-label="Main">
            <Link to="/" className="brand" aria-label="Recipe Home">
              <span className="dot" aria-hidden="true" />
              <span>Recipe Viewer</span>
            </Link>
            <form className="search" role="search" onSubmit={onSubmit}>
              <span className="icon" aria-hidden="true">🔎</span>
              <label htmlFor="q" className="sr-only" style={{ position: 'absolute', left: -9999 }}>Search recipes</label>
              <input
                id="q"
                name="q"
                type="search"
                placeholder="Search recipes, tags..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search recipes"
              />
            </form>
            <div aria-live="polite" style={{ color: 'var(--muted)' }}>
              {resultsCount} items
            </div>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="*" element={
          <main className="container">
            <p role="alert">Page not found.</p>
            <Link className="btn secondary" to="/">← Back to list</Link>
          </main>
        } />
      </Routes>
    </>
  );
}

// PUBLIC_INTERFACE
function App() {
  /** App entry that renders the AppShell with routes. */
  return <AppShell />;
}

export default App;
