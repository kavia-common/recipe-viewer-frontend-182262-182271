# Recipe Viewer Frontend (React)

A lightweight React app that displays a grid of recipe cards and a detail page. No backend is required; data is in-memory.

## Features
- Grid list of recipes (title, image, description, tags)
- Detail view with ingredients, steps, prep/cook time, servings
- React Router navigation (`/` and `/recipe/:id`)
- Themed modern light UI
  - Primary `#3b82f6`, Accent `#06b6d4`, Background `#f9fafb`, Surface `#ffffff`, Text `#111827`
- Responsive and accessible (alt text, semantic elements, focus rings)

## Getting Started
From `recipe_app_frontend/`:

1. Install dependencies (first run only):
   - `npm install`
2. Start the app:
   - `npm start`
3. Open http://localhost:3000

## Project Structure
- `src/data/recipes.js` – mock recipe data (no backend)
- `src/components/` – small UI components
- `src/pages/` – `RecipeList` and `RecipeDetail`
- `src/styles/theme.css` – theme and layout styles
- `src/App.js` – routes and header

## Notes
- No environment variables are required.
- All data is local and static.
