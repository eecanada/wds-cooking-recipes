import React, { useContext } from 'react';
import Recipe from './Recipe';
import { RecipeContext } from './App';

const RecipeList = ({ recipes }) => {
  const { handleRecipeAdd } = useContext(RecipeContext);
  return (
    <>
      <div>
        {recipes.map((recipe) => {
          return <Recipe key={recipe.id} recipe={recipe} />;
        })}
      </div>
      <button onClick={handleRecipeAdd}>Add Recipe</button>
    </>
  );
};

export default RecipeList;
