import React from 'react';

const RecipeIngredientEdit = (props) => {
  const { ingredient, handleIngredientChange, handleIngredientDelete } = props;
  console.log(ingredient);

  function handleChange(changes) {
    handleIngredientChange(ingredient.id, { ...ingredient, ...changes });
  }
  return (
    <>
      <input
        className="recipe-edit__input"
        type="text"
        value={ingredient.name}
        onInput={(e) => handleChange({ name: e.target.value })}
      />
      <input
        className="recipe-edit__input"
        type="text"
        value={ingredient.ammount}
        onInput={(e) => handleChange({ ammount: e.target.value })}
      />
      <button
        onClick={() => handleIngredientDelete(ingredient.id)}
        className="btn btn--danger"
      >
        &times;
      </button>
    </>
  );
};

export default RecipeIngredientEdit;
