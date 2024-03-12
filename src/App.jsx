import { Searchbar } from './pages/Searchbar';
import { useState } from 'react';
import { RecipePage } from './pages/RecipePage';
import { Center, Heading } from '@chakra-ui/react';  

  



export const App = () => {

  const [selectOption, setSelectOption] = useState();

  
 

   const greeting = 'Winc Recipe Checker';

    return (   
   
       <Center minH="100vh" flexDir="column" bg="blue.400" >	
        
        { selectOption ? (
        <RecipePage item={selectOption} onClickFn={setSelectOption}/> 
      
       ) : (
       
        <>
        <Heading size="2xl" mb={8} color="white">
           {greeting}
        </Heading>
        <Searchbar onClick={setSelectOption} />
        
        </>

       )}
      </Center>
    
    );
   
 };

