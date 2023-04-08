import React from 'react';
import {
  Container,
  Heading,
  Text,
  Stack,
  Box,
  Image,
  Link,
  Button,
  Flex,
  useColorModeValue
} from '@chakra-ui/react';
import Counter from '../components/Counter';
import PrevNextButtons from '../components/PrevNextButtons';
const Event = () => {
    const eventImg = require('../assets/eventImg.png');
    const bgColor2 = useColorModeValue("white", "gray.700");
  return (
    <Box bg={bgColor2} maxW="800px" mx="auto" py={8} px={8} borderRadius={"19"}>
      <Stack spacing={8}>
        <Box>
          <Heading as="h1" size="2xl">
            What is Event and Event Handling in React?
          </Heading>
          <Text mt={4}>
            In React, events are interactions that users have with your
            application, such as clicking a button or typing in a form field.
            These interactions trigger event handlers, which are functions that
            are executed in response to an event. Event handling is an important
            part of building web applications.
          </Text>
          <Text mt={4}>
            In React, you can add event handlers to any JSX element using the
            syntax: <code>on[EventName]</code>. For example, if you want to add
            a click event handler to a button element, you would use the
            <code>onClick</code> attribute:
          </Text>

          <Box mt={4} mb={8}>



            <Button onClick={() => alert('Hey you clicked the Button!')}>
              Click me!
            </Button>


            

          </Box>
          <Text mt={4}>
            When the button is clicked, the <code>alert()</code> function will
            be called, displaying an alert dialog with the message "Button
            clicked!".
          </Text>
          <Flex justifyContent="center">
            <Image
              src={eventImg}
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
          <Text mt={4}>
            Event handlers can also be defined as separate functions and passed
            as props to child components. For example, you could define a
            function that updates the state of a parent component when a button
            is clicked, and pass that function as a prop to a child component
            that contains the button.
          </Text>
          <Text>To know how it is different from handling event with DOM elements refer to my previous blog
          <Link
              href="https://medium.com/@muditsomra9/my-react-js-journey-and-its-main-concepts-dff7e63ec691"
              target="_blank"
              color="blue.500"
              _hover={{ textDecoration: 'underline' }}
            > click here
            </Link></Text>
        </Box>
        <Box>
          <Heading as="h2" size="xl">
            Conclusion
          </Heading>
          <Text mt={4}>
            Event handling is a fundamental concept in React, and is essential
            for building dynamic, interactive web applications. By attaching
            event handlers to JSX elements, you can define how your application
            responds to user interactions, and create a more engaging user
            experience.
          </Text>
        </Box>
      </Stack>
      <PrevNextButtons  prevUrl="/state" nextUrl="/about"/>
    </Box>
  );
};



export default Event;
