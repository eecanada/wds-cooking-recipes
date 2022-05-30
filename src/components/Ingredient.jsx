import React from 'react';

const Ingredient = ({name, ammount}) => {
  return ( 
    <>
      <span>{name}</span>
      <span>{ammount}</span>
    </>
   );
}
 
export default Ingredient;