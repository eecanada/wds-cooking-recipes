import React, { useContext } from 'react';
import IngredientList from './IngredientList';
import { RecipeContext } from './App';

const Recipe = ({ recipe }) => {
  const { id, name, instructions, cookTime, servings, ingredients } = recipe;
  const { handleRecipeDelete } = useContext(RecipeContext);
  return (
    <div>
      <div>
        <h3>{name}</h3>
        <div>
          <button>Edit</button>
          <button onClick={() => handleRecipeDelete(id)}>Delete</button>
        </div>
      </div>
      <div>
        <span>Cook Time:</span>
        <span>{cookTime}</span>
      </div>
      <div>
        <span>Servings:</span>
        <span>{servings}</span>
      </div>
      <div>
        <span>Instructions:</span>
        <div>{instructions}</div>
      </div>
      <div>
        <span>Ingredients:</span>
        <div>
          <IngredientList ingredients={ingredients} />
        </div>
      </div>
    </div>
  );
};

export default Recipe;
