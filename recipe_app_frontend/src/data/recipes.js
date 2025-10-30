export const recipes = [
  {
    id: 'classic-pancakes',
    title: 'Classic Pancakes',
    description: 'Fluffy pancakes perfect for breakfast, topped with maple syrup.',
    image: 'https://images.unsplash.com/photo-1490063965659-93336b0f36dc?q=80&w=1200&auto=format&fit=crop',
    tags: ['Breakfast', 'Quick', 'Vegetarian'],
    servings: 4,
    prepTime: 10,
    cookTime: 15,
    ingredients: [
      '1 1/2 cups all-purpose flour',
      '3 1/2 tsp baking powder',
      '1 tbsp sugar',
      '1/2 tsp salt',
      '1 1/4 cups milk',
      '1 egg',
      '3 tbsp butter, melted'
    ],
    steps: [
      'In a bowl, sift together flour, baking powder, sugar, and salt.',
      'Make a well in the center and pour in the milk, egg, and melted butter; mix until smooth.',
      'Heat a lightly oiled griddle or frying pan over medium high heat.',
      'Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake.',
      'Brown on both sides and serve hot with maple syrup.'
    ]
  },
  {
    id: 'avocado-toast',
    title: 'Avocado Toast',
    description: 'Creamy avocado on toasted sourdough with a hint of lime and chili.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop',
    tags: ['Snack', 'Vegan', 'Healthy'],
    servings: 2,
    prepTime: 5,
    cookTime: 5,
    ingredients: [
      '2 slices sourdough bread',
      '1 ripe avocado',
      '1/2 lime, juiced',
      'Salt and pepper to taste',
      'Red chili flakes (optional)'
    ],
    steps: [
      'Toast the bread slices to your liking.',
      'Mash avocado with lime juice, salt, and pepper.',
      'Spread the avocado mix over toast and sprinkle chili flakes.'
    ]
  },
  {
    id: 'spaghetti-bolognese',
    title: 'Spaghetti Bolognese',
    description: 'Rich and hearty meat sauce served over spaghetti.',
    image: 'https://images.unsplash.com/photo-1604908815117-786f0e3f9f57?q=80&w=1200&auto=format&fit=crop',
    tags: ['Dinner', 'Comfort Food'],
    servings: 4,
    prepTime: 15,
    cookTime: 45,
    ingredients: [
      '400g spaghetti',
      '500g ground beef',
      '1 onion, diced',
      '2 cloves garlic, minced',
      '400g canned tomatoes',
      '2 tbsp tomato paste',
      '1 tsp dried oregano',
      'Salt and pepper',
      'Olive oil'
    ],
    steps: [
      'Cook spaghetti according to package instructions.',
      'Heat olive oil, sauté onion and garlic until soft.',
      'Add ground beef and cook until browned.',
      'Stir in tomatoes, tomato paste, oregano, salt, and pepper.',
      'Simmer for 25–30 minutes. Serve over spaghetti.'
    ]
  },
  {
    id: 'chicken-caesar-salad',
    title: 'Chicken Caesar Salad',
    description: 'Crisp romaine, grilled chicken, and creamy Caesar dressing.',
    image: 'https://images.unsplash.com/photo-1551892589-865f69869443?q=80&w=1200&auto=format&fit=crop',
    tags: ['Lunch', 'Salad'],
    servings: 2,
    prepTime: 15,
    cookTime: 10,
    ingredients: [
      '2 cups romaine lettuce, chopped',
      '1 chicken breast, grilled and sliced',
      'Croutons',
      'Parmesan shavings',
      'Caesar dressing'
    ],
    steps: [
      'Grill chicken and slice.',
      'Toss lettuce with Caesar dressing.',
      'Top with chicken, croutons, and Parmesan.'
    ]
  },
  {
    id: 'chocolate-chip-cookies',
    title: 'Chocolate Chip Cookies',
    description: 'Chewy and delicious cookies loaded with chocolate chips.',
    image: 'https://images.unsplash.com/photo-1607958996333-41aef9a9d7d0?q=80&w=1200&auto=format&fit=crop',
    tags: ['Dessert', 'Baking', 'Snack'],
    servings: 24,
    prepTime: 15,
    cookTime: 12,
    ingredients: [
      '2 1/4 cups all-purpose flour',
      '1 tsp baking soda',
      '1 tsp salt',
      '1 cup butter, softened',
      '3/4 cup sugar',
      '3/4 cup brown sugar',
      '2 large eggs',
      '2 tsp vanilla extract',
      '2 cups chocolate chips'
    ],
    steps: [
      'Preheat oven to 375°F (190°C).',
      'Combine flour, baking soda, and salt.',
      'Beat butter and sugars until creamy; add eggs and vanilla.',
      'Gradually add flour mixture; stir in chocolate chips.',
      'Drop by rounded tablespoons onto baking sheet.',
      'Bake 9–12 minutes until golden edges form.'
    ]
  }
];

export function getRecipeById(id) {
  // PUBLIC_INTERFACE
  /** Returns a single recipe by id. */
  return recipes.find(r => r.id === id);
}
