import React, {useContext} from 'react';
import Recipe from './Recipe';
import {RecipeContext} from './App'


const RecipeList = ({ recipes }) => {
  // const value = useContext(RecipeContext)
  // Destructuring value 
  const {handleRecipeAdd} = useContext(RecipeContext)
  
  return (
    <div className="recipe-list">
      <div>
        <div>
          {recipes.map((recipe) => {
            return <Recipe key={recipe.id} {...recipe}  />;
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
