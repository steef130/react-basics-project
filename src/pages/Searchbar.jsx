import { useState } from 'react';
import { data } from '../utils/data';
import { RecipeListPage } from './RecipeListPage';
import { TextInput } from './TextInput';



export const Searchbar = ({ onClick }) => {
  const [searchField, setSearchField] = useState('');

  const matchedDish = data.hits.filter((item) => {
    return item.recipe.label.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };
 
console.log(matchedDish)
console.log(searchField)
  return (
  
    <>
      <TextInput placeholder="Search for" onChange={handleChange} w={200} mb={8} bg="white" /> 
      <RecipeListPage  onClick={onClick} items={matchedDish} />
     </>
    
  );
};