import React, { useState } from 'react';
import {
  Box,
  useColorModeValue,
  Button,
  Heading,
  Text,
  Flex,
  Image
} from '@chakra-ui/react';
function Counter() {
  const bgColor2 = useColorModeValue('gray.100', 'black');
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const [imageS,setImage]=useState('')
  const increment = require('../assets/increment.png');
  const decrement = require('../assets/decrement.png');
  const handleIncrement = () => {
    
    setCount(count + 1);
    setText(
      'You clicked Increment button which called handleIncrement function and in that function you call setState function and once you do that it re-ender our component and update the displayed value to reflect the updated state.'
    );
    setImage(increment);
  };

  const handleDecrement = () => {
    setCount(count - 1);
    setText(
      'You clicked Decrement button which called handleDecrement function and in that function you call setState function i.e. setCount and once you do that it re-ender our component and update the displayed value to reflect the updated state.'
    );
    setImage(decrement)
  };

  return (
    <Box bg={bgColor2} maxW="800px" mx="auto" py={8} px={8} borderRadius={'19'}>
      <Heading>Count: {count}</Heading>
      <Button p={5} onClick={handleIncrement}>
        Increment
      </Button>
      <Button p={5} marginLeft={4} onClick={handleDecrement}>Decrement</Button>
      <Text my={5}>
        {text}
      </Text>
      <Flex justifyContent="center">
        <Image
          src={imageS}
          alt=""
          htmlWidth={'50%'}
          htmlHeight="auto"
          style={{
            borderRadius: '10px',
            marginTop: '3rem',
            marginBottom: '3rem',
          }}
        />
      </Flex>
    </Box>
  );
}

export default Counter;
