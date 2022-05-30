import React from 'react';
import RecipeList from './RecipeList';
import '../css/app.css'

const App = () => {
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

  return (
    <>
      <RecipeList recipes={sampleRecipes} />
    </>
  );
};

export default App;
