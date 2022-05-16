import React from 'react';

const Ingredient = ({ ingredient }) => {
  const { name, ammount } = ingredient;
  return (
    <>
      <div>
        <span>{name}: </span>
        <span>{ammount}</span>
      </div>
    </>
  );
};

export default Ingredient;
