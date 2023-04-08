import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useColorModeValue,
  Flex,
  Image,
  Text
} from '@chakra-ui/react';
import Counter from '../components/Counter';
import PrevNextButtons from '../components/PrevNextButtons';
function UseStates() {

  // Declare state variables for the counter
  const [count, setCount] = useState(0);
  const bgColor2 = useColorModeValue('white', 'gray.700');
  const counterjsx = require('../assets/counterjsx.png');

  // Event handlers for incrementing and decrementing the counter
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <Box bg={bgColor2} maxW="800px" mx="auto" py={8} px={8} borderRadius={'19'}>
      <Stack spacing={4}>
        <Box>
          <h1>Understanding State and Hooks in React</h1>
          <Text>
            React is a popular JavaScript library for building user interfaces.
            One of the key features of React is its ability to manage state, or
            the data that a component displays and interacts with.
            On this page, we'll explore the basics of state in React and how to use
            hooks to manage state in functional components.
          </Text>
        </Box>

        <Box>
          <h2>What is State in React?</h2>
          <Text>
           The state is a built-in React object that is used to store data and information about the component. The component state can change at any time and whenever it changes the component get re-enders. 
          </Text>
          <Text>
            In React class components, state is managed using the{' '}
            <code>setState</code> method. When you call <code>setState</code>,
            React will re-render your component and update the displayed values
            to reflect the updated state.
          </Text>
        </Box>

        <Box>
          <h2>Introducing Hooks</h2>
          <Text>
            Before the introduction of React Hooks in React 16.8, functional
            components were stateless and could not use lifecycle methods or
            manage state. This is where Hooks come in.
          </Text>
          <Text>
            Hooks are a new addition to React that allow you to use state and
            other React features in functional components. There are several
            built-in hooks available, but the most commonly used one is the
            <code>useState</code> hook.
          </Text>
        </Box>

        <Box>
          <h2>Using the useState Hook</h2>
          <Text>
            The <code>useState</code> hook is a function that takes an initial
            value and returns an array with two items: the current state value
            and a function to update it. You can then use these values to manage
            the state of your component.
          </Text>
          <Text>
            Here's an example of how to use the <code>useState</code> hook in a
            functional component:
          </Text>
          <Flex justifyContent="center">
        <Image
          src={counterjsx}
          alt=""
          htmlWidth={'auto'}
          htmlHeight="auto"
          style={{
            borderRadius: '10px',
            marginTop: '3rem',
            marginBottom: '3rem',
          }}
        />
      </Flex>
          <Text marginBottom={'3rem'}>
            In the above example, we use the <code>useState</code> hook to
            declare a state variable called <code>count</code>, and we initialized it to value zero. We also declared two function which is being called when you click button. Both functions have setCount method which changes the value of count varible and re-ender the component when being called. Below is the working of above code however i added code to make it good which you dont have to focus now.
          </Text>
          <Counter/>
          <Box my={5}>
            <h2>Conclusion</h2>
            <Text>
              State and hooks are essential concepts in React that allow you to
              manage the data and behavior of your components. By understanding
              how to use hooks like <code>useState</code>, you can easily add
              state to your functional components and create dynamic and
              interactive user interfaces.
            </Text>
          </Box>
        </Box>
      </Stack>
      <PrevNextButtons  prevUrl="/props" nextUrl="/event"/>
    </Box>
  );
}
export default UseStates;
