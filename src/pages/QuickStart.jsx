import React from 'react';
import { ChakraProvider, Flex, Box, Heading, Text, Image } from '@chakra-ui/react';


function QuickStart() {
    const bannerImage = require("../assets/charkra_home_page.png");
    const bannerImage2 = require("../assets/chakra_framework_page.png");
    const bannerImage3 = require("../assets/chakra_framework_page_2.png");
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Text fontSize="sm" color="gray.500">
            March 31, 2023
          </Text>
        </Box>
        <Heading as="h1" size="xl" my="2">
          How to start?
        </Heading>
        <Heading as="h2" size="l" my="4">
          Create a React web application using Chakra UI and Create-React-App
        </Heading>
        <Flex justifyContent="center">
        <Image src={bannerImage} alt="Blog post header image" htmlWidth={"70%"} htmlHeight="auto" style={{ borderRadius: "10px" }}/>
        </Flex>
        <Text fontSize="md" my="5">
          React is a popular front-end JavaScript library for building user
          interfaces. Chakra UI is a simple and modular component library that
          provides reusable UI components that can be used to create beautiful
          and responsive web applications.
        </Text>

        <Text fontSize="md" my="5">
          To create a React web application using Chakra UI and
          Create-React-App, follow these steps:
        </Text>

        <Text fontSize="md" my="5">
          1. Install Node.js and NPM on your computer if you haven't already
          done so. Node.js is a JavaScript runtime that allows you to run
          JavaScript on the server side, and NPM is a package manager that
          allows you to install and manage Node.js packages.
        </Text>

        <Text fontSize="md" my="5">
          2. Install the Create-React-App CLI tool by running the following
          command in your terminal:
        </Text>

        <Box bg="gray.50" p="4" my="5" borderWidth="1px" borderRadius="lg">
          <Text fontSize="md">$ npm install -g create-react-app</Text>
        </Box>
        <Text fontSize="md" my="5">
          3. Create React App allows users to create a project using a template,
          which determines the files and dependencies included with the
          generated project. The template we areg going to use id similar to the
          base create-react-app template. However, it come with Chakra UI
          dependencies pre-installed and include Chakra-specific functionality.
        <Flex justifyContent="center">
        <Image src={bannerImage2} alt="Blog post header image" htmlWidth={"70%"} htmlHeight="auto" style={{ borderRadius: "10px" }}/>
        </Flex>
        <Flex justifyContent="center">
        <Image src={bannerImage3} alt="Blog post header image" htmlWidth={"70%"} htmlHeight="auto" style={{ borderRadius: "10px" }}/>
        </Flex>
        </Text>

        {/* <Box bg="gray.50" p="4" my="5" borderWidth="1px" borderRadius="lg">
          <Text fontSize="md">npx create-react-app my-app --template @chakra-ui</Text>
        </Box> */}

        <Text fontSize="md" my="5">
          This command creates a new React web application in a directory named
          `my-app`.
        </Text>

        <Text fontSize="md" my="5">
          4. Change into the `my-app` directory by running the following command
          in your terminal:
        </Text>

        <Box bg="gray.50" p="4" my="5" borderWidth="1px" borderRadius="lg">
          <Text fontSize="md">$ cd my-app</Text>
        </Box>

       
      </Box>
    </Box>
  );
}
export default QuickStart;
