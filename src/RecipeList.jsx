import React from 'react';
import Recipe from './Recipe';
const RecipeList = ({ recipes, handleRecipeAdd, handleRecipeDelete }) => {
  return (
    <>
      <div>
        {recipes.map((recipe) => {
          return (
            <Recipe
              handleRecipeDelete={handleRecipeDelete}
              key={recipe.id}
              recipe={recipe}
            />
          );
        })}
      </div>
      <button onClick={handleRecipeAdd}>Add Recipe</button>
    </>
  );
};

export default RecipeList;
