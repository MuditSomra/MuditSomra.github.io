import {
  Box,
  Flex,
  Image,
  Heading,
  Text,
  Button,
  Stack,
  Center,
  Link
} from '@chakra-ui/react';

import Topic from '../components/Topic';
// import heroImage from "./assets/hero-image.jpg";

function Home() {
  return (
    <Box px={8} py={12} maxW="1200px" mx="auto">
      <Flex alignItems="center" justifyContent="space-between">
        <Box>
          <Heading as="h1" fontSize="5xl" mb={6}>
            Learn ReactJS with Me rounting one
          </Heading>
          <Text fontSize="xl" mb={8} mr={8}>
            This is the web application created using ReactJS, I will teach you
            React implementation with help of this web application only. It will
            be kind of mix of blog and implementation. I will refer to this web
            application when i will explain implementation so that you can get
            to know how it actually work and feel it.
          </Text>
          <Button colorScheme="blue" size="lg" mb={8}>
            <Link to="/blog">Read the Blog</Link>
          </Button>
        </Box>
        <Image
          src="https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Hero Image"
          w="50%"
          borderRadius="md"
          boxShadow="xl"
        />
      </Flex>
      {/* <Box mt={16}>
        <Heading as="h2" fontSize="4xl" mb={8}>
          Featured Articles
        </Heading>
        <Stack spacing={8}>
          <Box borderWidth="1px" borderRadius="md" overflow="hidden">
            <Image src="https://via.placeholder.com/800x400.png?text=Article+Image" alt="Article Image" />
            <Box p={6}>
              <Heading as="h3" fontSize="xl" mb={4}>
                The Fundamentals of React Hooks
              </Heading>
              <Text fontSize="md" mb={4}>
                In this article, we'll explore the basics of React Hooks and how they can simplify your code.
              </Text>
              <Button colorScheme="blue" size="sm">
                <Link to="/blog/fundamentals-of-react-hooks">Read More</Link>
              </Button>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="md" overflow="hidden">
            <Image src="https://via.placeholder.com/800x400.png?text=Article+Image" alt="Article Image" />
            <Box p={6}>
              <Heading as="h3" fontSize="xl" mb={4}>
                Building a Custom React Component Library
              </Heading>
              <Text fontSize="md" mb={4}>
                Learn how to create a custom React component library that can be reused across multiple projects.
              </Text>
              <Button colorScheme="blue" size="sm">
                <Link to="/blog/custom-react-component-library">Read More</Link>
              </Button>
            </Box>
          </Box>
        </Stack>
      </Box> */}
      <Box  borderRadius="md" boxShadow="md" p={6} mb={6} mt={'5rem'}>
        <Flex
          alignItems="center"
          justifyContent="space-between"
          flexDirection="column"
        >
          <Heading as="h2" fontSize="4xl" mb={4}>
            Why I am writing this Blog??
          </Heading>
          <Text fontSize="xl" mb={8} mt={5} textAlign={'center'}>
            Its a continuation of my previous blog in which i explained
            <Link
              href="https://medium.com/@muditsomra9/my-react-js-journey-and-its-main-concepts-dff7e63ec691"
              target="_blank"
              color="blue.500"
              _hover={{ textDecoration: 'underline' }}
            > My React JS journey and its main concepts 
            </Link> to which i got really good feedback and now its time to implement
            the knowledge in actual react application. To keep it interesting i
            am trying something new this time, instead of writing just a normal
            blog i am creating a web application using react and use this web
            application experience to explain the implementation. I hope it help
            you learn the ReactJS implementaion so lets not waste time and move
            forward to actual learning part
          </Text>
          <Text fontSize="xl" mb={8} mt={5} textAlign={'center'}>
            Below given are the cards you can click the card to learn more about
            the concept you want to learn about and how i used that concept in
            the webapplication you are using right now. Is it not fun!!! so go
            ahead..
          </Text>
          <Topic />
        </Flex>
      </Box>
    </Box>
  );
}

export default Home;
