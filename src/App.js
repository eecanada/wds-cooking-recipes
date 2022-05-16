import React, { useState, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import RecipeList from './RecipeList';

export const RecipeContext = React.createContext();

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes);

  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
  };

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: 'Pozole',
      servings: 4,
      cookTime: '1:30',
      instructions:
        '1. Put delicious seasoning on stew.\n 2. Put Pork in stew.\n  3. Let simmer for 1:30',
      ingredients: [
        {
          id: 1,
          name: 'Pork',
          ammount: '2 Pounds',
        },
        {
          id: 2,
          name: 'Hominy',
          ammount: '1 Pound',
        },
      ],
    };

    const newRecipes = [...recipes, newRecipe];
    setRecipes(newRecipes);
  }

  function handleRecipeDelete(id) {
    const filteredRecipes = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(filteredRecipes);
  }
  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList
        recipes={recipes}
      />
    </RecipeContext.Provider>
  );
}

const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions:
      '1. Put salt on chicken.\n 2. Put chicken in oven.\n  3. Eat Chicken',
    ingredients: [
      {
        id: 1,
        name: 'Chicken',
        ammount: '2 Pounds',
      },
      {
        id: 2,
        name: 'Salt',
        ammount: '1 Tbs',
      },
    ],
  },
  {
    id: 2,
    name: 'Plain Pork',
    servings: 5,
    cookTime: '0:45',
    instructions: `1. Put salt on Pork.\n 2. Put Pork in oven.\n 3. Eat Pork`,
    ingredients: [
      {
        id: 1,
        name: 'Pork',
        ammount: '3 Pounds',
      },
      {
        id: 2,
        name: 'Paprika',
        ammount: '2 Tbs',
      },
    ],
  },
];

export default App;
