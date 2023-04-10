import {
  Box,
  Flex,
  Image,
  Heading,
  Text,
  Button,
  Stack,
  Center,
  Link,
  LinkBox
} from '@chakra-ui/react';

import Topic from '../components/Topic';
function Home() {
  return (
    <Box px={8} py={12} maxW="1200px" mx="auto">
      <Flex alignItems="center" justifyContent="space-between">
        <Box>
          <Heading as="h1" fontSize="5xl" mb={6}>
            Learn ReactJS with Mudit Somra
          </Heading>
          <Text fontSize="xl" mb={8} mr={8}>
            This is the web application created using ReactJS, I will teach you
            React implementation with help of this web application only. It will
            be kind of mix of blog and implementation. I will refer to this web
            application when i will explain implementation so that you can get
            to know how it feel and implemented in real life.Let me not forget to mention
            that all the code of this web application will be on my Github account under 
            <Link
              href="https://github.com/MuditSomra/MuditSomra.github.io"
              target="_blank"
              color="blue.500"
              _hover={{ textDecoration: 'underline' }}
            > MuditSomra.github.io
            </Link> 
          </Text>
         
        </Box>
        <Image
          src="https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Hero Image"
          w="50%"
          borderRadius="md"
          boxShadow="xl"
        />
      </Flex>
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
