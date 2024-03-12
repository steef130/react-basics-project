import {  Flex } from '@chakra-ui/react';
import { data } from '../utils/data';
import { Recipe } from './Recipe';

export const RecipeListPage = ({ items, onClick }) => {
  // You can play around with the console log, but ultimately remove it once you are done

  console.log(data.hits[0].recipe.label);
 
  //const labels = data.hits.map(item => item.recipe.label);
  //const images = data.hits.map(item => item.recipe.image);
  //const mealTypes = data.hits.map(item => item.recipe.mealType);
  //console.log(labels);
 

  return (
    <Flex
        gap={16}
        w={['full', '75%']}
        flexWrap='wrap'
        flexDir= {['column', 'row']}
        justify='space-around'
        alignItems="center">
        
      
       {items.map((item) => (
        <Recipe key={item.recipe.label} item={item} onClick={onClick} />
       ))}
    </Flex>
  
  );
};

