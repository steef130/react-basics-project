import {  Image, Box, Text } from '@chakra-ui/react';  


export const Recipe = ({ item, onClick }) => { 


  return (
  

    <Box 
    height="400px"  
    width="200px" 
    bg="gray.200" 
    display="flex"
    flexDirection="column"
    alignItems= "center"
    borderRadius='lg'
    cursor={ 'pointer' } 
    onClick={() => onClick(item)} >  
         <Image src={item.recipe.image} alt={item.recipe.label} width={'100vw'} height={'100px'}/>
         <Text fontSize="xs">{item.recipe.mealType.join(', ')}</Text>
         <Text fontSize="lg" fontWeight="bold" >{item.recipe.label}</Text>
         <Text fontSize='xs' bg='purple.300'>{item.recipe.dietLabels.join(', ')}</Text>
         <Text fontSize='xs'>Dish: {item.recipe.dishType}</Text>
         <Text fontSize='xs' bg='red.200'>Cautions: {item.recipe.cautions.join(', ')}</Text> 
             {item.recipe.healthLabels && (
         <div>
         <Text fontSize='xs'>Health Labels:</Text>
         {item.recipe.healthLabels.includes('Vegan') && <Text fontSize='xs' bg="green.200">Vegan</Text>}
          {item.recipe.healthLabels.includes('Vegetarian') && <Text fontSize='xs' bg='green.200'>Vegetarian</Text>}
          </div>
       )}
      
   </Box>  
   )} ;