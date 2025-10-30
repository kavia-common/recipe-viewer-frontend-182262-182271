import { Link, useNavigate, useParams } from 'react-router-dom';
import { getRecipeById } from '../data/recipes';

/* PUBLIC_INTERFACE */
/** Detail page showing full recipe information. */
export default function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = getRecipeById(id);

  if (!recipe) {
    return (
      <main className="container">
        <p role="alert">Recipe not found.</p>
        <Link className="btn secondary" to="/">← Back</Link>
      </main>
    );
  }

  const totalTime = recipe.prepTime + recipe.cookTime;

  return (
    <main className="container" aria-label={`Recipe: ${recipe.title}`}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
        <button className="btn secondary" onClick={() => navigate(-1)} aria-label="Go back to previous page">← Back</button>
        <h1 style={{ margin: 0, fontSize: 26 }}>{recipe.title}</h1>
      </div>

      <section className="detail" aria-describedby="meta">
        <div>
          <div className="detail-hero">
            <img src={recipe.image} alt={`${recipe.title} hero`} />
          </div>
          <div className="panel" id="meta" style={{ marginTop: 16 }}>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <span><strong>Total:</strong> {totalTime} min</span>
              <span><strong>Prep:</strong> {recipe.prepTime} min</span>
              <span><strong>Cook:</strong> {recipe.cookTime} min</span>
              <span>🍽 <strong>Servings:</strong> {recipe.servings}</span>
            </div>
          </div>
        </div>

        <aside>
          <div className="panel" style={{ marginBottom: 16 }}>
            <h3>Ingredients</h3>
            <ul>
              {recipe.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
            </ul>
          </div>
          <div className="panel">
            <h3>Steps</h3>
            <ol>
              {recipe.steps.map((step, i) => <li key={i} style={{ margin: '8px 0' }}>{step}</li>)}
            </ol>
          </div>
        </aside>
      </section>

      <div className="footer-space" />
    </main>
  );
}
