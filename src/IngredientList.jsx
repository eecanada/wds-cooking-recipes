import React from 'react';
import Ingredient from './Ingredient';

const IngredientList = ({ ingredients }) => {
  // console.log('ingedietns:',ingredients )
  const ingredientElement = ingredients.map((ingredient) => {
    return <Ingredient key={ingredient.key} ingredient={ingredient} />;
  });
  return <div>{ingredientElement}</div>;
};

export default IngredientList;
