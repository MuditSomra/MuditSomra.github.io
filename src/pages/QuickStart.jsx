import React from 'react';
import { ChakraProvider, Flex, Box, Heading, Text, Image, useColorModeValue, Divider,extendTheme,ChakraBaseProvider} from '@chakra-ui/react';
import PrevNextButtons from '../components/PrevNextButtons';
const customTheme = extendTheme({
  breakpoints: {
    sm: "480px",
    md: "600px",
    lg: "1300px",
    xl: "1536px",
  },
});

function QuickStart() {
    const bannerImage = require("../assets/charkra_home_page.png");
    const bannerImage2 = require("../assets/chakra_framework_page.png");
    const bannerImage3 = require("../assets/chakra_framework_page_2.png");
    const bannerImage4 = require("../assets/react_app_home_page.png");
    const bannerImage5 = require("../assets/terminal_npm_start.png");
    const bannerImage6 = require("../assets/terminal_react_app.png");
    const bgColor = useColorModeValue("gray.100", "gray.700")
    const bgColor2 = useColorModeValue("white", "gray.700");
  return (
    
    <Box bg={bgColor2} maxW="800px" mx="auto" py={8} px={8} borderRadius={"19"} >
    <Box>
  
      <Box p="6">
        <Box d="flex" alignItems="baseline">
         
        </Box>
        <Heading as="h1" size="xl" mb={4}>
          How to start?
        </Heading>
        <Divider  borderWidth="1px" my={4}/>
        <Heading as="h4" size="l" my="4" fontWeight={"semibold"}>
          Create a React web application using Chakra UI and Create-React-App
        </Heading>
        <Divider  borderWidth="1px" my={4}/>
        <Flex justifyContent="center">
        <Image src={bannerImage} alt="" htmlWidth={"70%"} htmlHeight="auto" style={{ borderRadius: "10px", marginTop: "3rem", marginBottom: "3rem" }}/>
        </Flex>
        <Text  my="5"  >
          React is a popular front-end JavaScript library for building user
          interfaces. Chakra UI is a simple and modular component library that
          provides reusable UI components that can be used to create beautiful
          and responsive web applications.
        </Text>

        <Text  my="5">
          To create a React web application using Chakra UI and
          Create-React-App, follow these steps:
        </Text>

        <Text  my="5">
          1. Install Node.js and NPM on your computer if you haven't already
          done so. Node.js is a JavaScript runtime that allows you to run
          JavaScript on the server side, and NPM is a package manager that
          allows you to install and manage Node.js packages.
        </Text>

        <Text  my="5">
          2. Install the Create-React-App CLI tool by running the following
          command in your terminal:
        </Text>

        <Box bg={bgColor} p="4" my="5" borderWidth="1px" borderRadius="lg">
          <Text >$ npm install -g create-react-app</Text>
        </Box>
        <Text  my="5">
          3. Create React App allows users to create a project using a template,
          which determines the files and dependencies included with the
          generated project. The template we are going to use is similar to the
          base create-react-app template. However, it come with Chakra UI
          dependencies pre-installed and include Chakra-specific functionality.
        <Flex justifyContent="center">
        <Image src={bannerImage2} alt="" htmlWidth={"70%"} htmlHeight="auto" style={{ borderRadius: "10px", marginTop: "3rem", marginBottom: "3rem" }}/>
        </Flex>
        <Flex justifyContent="center">
        <Image src={bannerImage3} alt="" htmlWidth={"70%"} htmlHeight="auto" style={{ borderRadius: "10px", marginTop: "3rem", marginBottom: "3rem" }}/>
        </Flex>
        <Flex justifyContent="center">
        <Image src={bannerImage6} alt="" htmlWidth={"70%"} htmlHeight="auto" style={{ borderRadius: "10px", marginTop: "3rem", marginBottom: "3rem" }}/>
        </Flex>
        </Text>

        {/* <Box bg="gray.50" p="4" my="5" borderWidth="1px" borderRadius="lg">
          <Text >npx create-react-app my-app --template @chakra-ui</Text>
        </Box> */}

        <Text  my="5">
          This command creates a new React web application in a directory named
          `my-app`.
        </Text>

        <Text  my="5">
          4. Change into the `my-app` directory by running the following command
          in your terminal:
        </Text>

        <Box bg={bgColor} p="4" my="5" borderWidth="1px" borderRadius="lg">
          <Text >$ cd my-app</Text>
        </Box>
        <Text  my="5">
          5. Run npm start in the terminal which will start your react application at localhost
        </Text>

        <Box bg={bgColor} p="4" my="5" borderWidth="1px" borderRadius="lg">
          <Text >npm start</Text>
        </Box>
        <Flex justifyContent="center">
        <Image src={bannerImage5} alt="" htmlWidth={"70%"} htmlHeight="auto" style={{ borderRadius: "10px", marginTop: "3rem", marginBottom: "3rem" }}/>
       </Flex>
        <Text  my="5">
          6. This is how your initial application will look like
        </Text>
        <Flex justifyContent="center">
        <Image src={bannerImage4} alt="" htmlWidth={"70%"} htmlHeight="auto" style={{ borderRadius: "10px", marginTop: "3rem", marginBottom: "3rem" }}/>
       </Flex>
      </Box>
    </Box>
    
    <PrevNextButtons  prevUrl="/" nextUrl="/file"/>
    </Box>
  );
}
export default QuickStart;
