import { Link } from 'react-router-dom';
import Tag from './Tag';

/* PUBLIC_INTERFACE */
/** Card displaying a recipe summary with image, title, description, and tags. */
export default function RecipeCard({ recipe }) {
  return (
    <article className="card" aria-labelledby={`${recipe.id}-title`}>
      <Link to={`/recipe/${recipe.id}`} aria-label={`Open ${recipe.title}`}>
        <img
          className="card-img"
          src={recipe.image}
          alt={`${recipe.title} image`}
          loading="lazy"
        />
      </Link>
      <div className="card-body">
        <h3 id={`${recipe.id}-title`} className="card-title">
          <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
        </h3>
        <p className="card-desc">{recipe.description}</p>
        <div className="badges" aria-label="recipe meta">
          <span className="badge"><span className="dot-sm" /> {recipe.prepTime + recipe.cookTime} min</span>
          <span className="badge">🍽 {recipe.servings} servings</span>
        </div>
        <div className="tags" style={{ marginTop: 10 }}>
          {recipe.tags?.map(t => <Tag key={t} label={t} />)}
        </div>
      </div>
    </article>
  );
}
