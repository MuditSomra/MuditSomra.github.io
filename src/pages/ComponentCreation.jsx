import { Box, Heading, Text, Flex, Image, useColorModeValue } from "@chakra-ui/react";
import React from 'react';

function ComponentCreation() {
    const bgColor2 = useColorModeValue("white", "gray.700");
    const buttonComp = require('../assets/buttonComponent.png');
    const buttonCompUse = require('../assets/useButtonComponent.png');
  return (
    <Box bg={bgColor2} maxW="800px" mx="auto" py={8} px={8} borderRadius={"19"}>
      <Heading as="h1" size="xl" mb={4}>
        How to Create a Component in a React Application
      </Heading>
      <Text mb={4}>
        React is a popular JavaScript library used for building user
        interfaces. One of the key features of React is its component-based
        architecture, which allows developers to create reusable and modular UI
        components. In this tutorial, we'll walk you through the process of
        creating a basic React component from scratch.
      </Text>
      <Heading as="h2" size="lg" mb={2}>
        Step 1: Create a new React component
      </Heading>
      <Text mb={4}>
        To create a new React component, you can either create a new file or add
        the component to an existing file. Let's say we want to create a new
        component called "Button". We can create a new file called `Button.js`
        and add the following code:
      </Text>
      <Flex justifyContent="center">
        <Image
          src={buttonComp}
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
      <Text mb={4}>
        In the above code, we're importing the React library and defining a new
        function called "Button". This function returns a simple button element
        with the text "Click me". Finally, we're exporting the component using
        the `export default` syntax.
      </Text>
      <Heading as="h2" size="lg" mb={2}>
        Step 2: Use the new component
      </Heading>
      <Text mb={4}>
        Now that we have created our new component, we can use it in our
        application. Let's say we want to add the Button component to a new file
        called `App.js`. We can add the following code:
      </Text>
      <Flex justifyContent="center">
        <Image
          src={buttonCompUse}
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
      <Text mb={4}>
        In the above code, we're importing the React library and our new Button
        component. We then define a new function called "App" which returns a
        simple div element containing our Button component. Finally, we're
        exporting the App component using the `export default` syntax.
      </Text>
      </Box>
     );}
     export default ComponentCreation;

