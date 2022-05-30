import React from 'react';
import Recipe from './Recipe';

const RecipeList = ({ recipes, handleRecipeAdd, handleRecipeDelete }) => {
  return (
    <div className="recipe-list">
      <div>
        <div>
          {recipes.map((recipe) => {
            return <Recipe key={recipe.id} {...recipe} handleRecipeDelete={handleRecipeDelete} />;
          })}
        </div>
        <div className="recipe-list__add-recipe-btn-container">
          <button onClick={handleRecipeAdd} className="btn btn--primary">
            Add Recipe
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeList;
