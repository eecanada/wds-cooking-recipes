import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import RecipeList from './RecipeList';
import '../css/app.css';

export const RecipeContext = React.createContext();
const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes';

const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions:
      '1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken',
    ingredients: [
      { id: 1, name: 'Chicken', ammount: '2 Pounds' },
      { id: 2, name: 'Salt', ammount: '1 Tbs' },
    ],
  },
  {
    id: 2,
    name: 'Plain Pork',
    servings: 5,
    cookTime: '0:45',
    instructions: '1. Put paprika on pork\n2. Put pork in oven\n3. Eat pork',
    ingredients: [
      { id: 1, name: 'Pork', ammount: '1 Pounds' },
      { id: 2, name: 'Paprika', ammount: '2 Tbs' },
    ],
  },
];

const App = () => {
  const [recipes, setRecipes] = useState(sampleRecipes);

  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (recipeJSON == null) setRecipes(JSON.parse(recipeJSON));
  }, []);
  
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
  }, [recipes]);


  const handleRecipeAdd = () => {
    const newRecipe = {
      id: uuidv4(),
      name: 'Pozole',
      servings: 1,
      cookTime: '1:00',
      instructions: 'instr.',
      ingredients: [
        {
          id: uuidv4(),
          name: 'Beef Chunks',
          ammount: '2 Pounds',
        },
      ],
    };
    setRecipes([...recipes, newRecipe]);
  };

  const handleRecipeDelete = (id) => {
    const filteredRecipes = recipes.filter((recipe) => {
      return recipe.id != id;
    });
    setRecipes(filteredRecipes);
  };

  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
  };

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList recipes={recipes} />
    </RecipeContext.Provider>
  );
};

export default App;
