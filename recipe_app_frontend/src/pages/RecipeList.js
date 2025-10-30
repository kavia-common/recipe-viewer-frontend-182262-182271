import { useMemo, useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import { recipes } from '../data/recipes';

/* PUBLIC_INTERFACE */
/** Grid page showing recipe cards and a search box. */
export default function RecipeList() {
  const [q, setQ] = useState('');

  const filtered = useMemo(() => {
    const k = q.trim().toLowerCase();
    if (!k) return recipes;
    return recipes.filter(r =>
      r.title.toLowerCase().includes(k) ||
      r.description.toLowerCase().includes(k) ||
      r.tags.some(t => t.toLowerCase().includes(k))
    );
  }, [q]);

  return (
    <main className="container" aria-label="Recipe list">
      <div className="grid" style={{ marginTop: 8 }}>
        {filtered.map(r => (
          <RecipeCard key={r.id} recipe={r} />
        ))}
      </div>

      {/* Accessible search in the header - but a secondary one here for small screens */}
      <div className="footer-space" />
    </main>
  );
}
