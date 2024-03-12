import { Image, Box ,Flex, Text } from '@chakra-ui/react'; 
import { Button } from './Button';


export const RecipePage = ({ item, clickFn }) => {

const healthLabels= item.recipe.healthLabels.map(label => label);
const Ingredients= item.recipe.ingredientLines.map(label => label);
const Diet=  item.recipe.dietLabels.map(label => label);
const Cautions= item.recipe.cautions.map(label => label);
console.log(item.recipe.label)

 return (
  
  <Box  bg="gray.100"    >
    <Button clickFn={() => clickFn()}>Other choice</Button>
    <Image src={item.recipe.image} alt={item.recipe.label} width={'100vw'} height={'40vh'}/>
    <Flex  flexDir={{ base: 'column', md: 'row' }} fontSize={{ base: 12, sm: 24 }} >
		
      <Box >	
      <Text >{item.recipe.mealType}</Text>
       <Text fontWeight="bold" >{item.recipe.label}</Text>
       <Text>Dish Type: {item.recipe.dishType}</Text>
       <Text>Total Cooking Time: {item.recipe.totalTime} min</Text>
       <Text>Servings:  {item.recipe.yield}</Text>
       <Text>Ingredients: </Text> 
       <Text>{Ingredients}</Text>
      </Box>  
     <Box   marginLeft={"2em"}>
      <Text >Health labels: </Text>
      <Text bg="purple.200">{healthLabels.join(', ')}</Text>
      <Text >Diet: </Text>
      <Text  bg="green.200">{Diet.join(', ')}</Text>
      <Text >Cautions: </Text>
      <Text bg="red.200">{Cautions.join(', ')}</Text> 
      <Text >Total nutrients:</Text>
      <Text >{item.recipe.totalNutrients.ENERC_KCAL.quantity} kcal</Text>
      <Text >Calories</Text>
      <Text >{item.recipe.totalNutrients.PROCNT.quantity} g</Text>
      <Text >Protein</Text>
      <Text >{item.recipe.totalNutrients.FAT.quantity} g</Text>
      <Text >Fat</Text>
      <Text >{item.recipe.totalNutrients.CHOCDF.quantity} g</Text>
      <Text >Carbs</Text>
      <Text >{item.recipe.totalNutrients.CHOLE.quantity} mg</Text>
      <Text >Cholesterol</Text>
      <Text >{item.recipe.totalNutrients.NA.quantity}  mg</Text>
      <Text >Sodium</Text>
    </Box> 
    </Flex>
    </Box>
);
};