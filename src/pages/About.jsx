import { Avatar, Box, Container, Heading, Image, Text,useColorModeValue } from "@chakra-ui/react";

function About() {
    const bgColor2 = useColorModeValue("white", "gray.700");
    const MudtImg = require('../assets/mudit.png');
  return (
    <Box bg={bgColor2} maxW="800px" mx="auto" py={8} px={8} borderRadius={"19"}>
      <Box textAlign="center" py="10">
      <Avatar size='xl' name='Mudit Somra' src={MudtImg} mb={5} />
        <Heading as="h1" size="2xl" fontWeight="bold">
          Hi, I'm Mudit Somra
        </Heading>
        <Text fontSize="xl" mt="4">
          I'm a Web Developer based in Calgary,Canada. I specialize in creating
          responsive and user-friendly web applications using React. 
        </Text>
      </Box>

      <Box my="16">
        <Heading as="h2" size="xl" fontWeight="bold">
          Skills
        </Heading>
        <Box display="flex" justifyContent="space-between" >
          <Box  mt="8">
            <Heading as="h3" size="lg" fontWeight="bold">
              Front-end Development
            </Heading>
            <Text fontSize="lg" mt="4">
              I have experience in HTML, CSS, JavaScript, and React. I can create
              responsive and user-friendly web pages using modern web
              technologies.
            </Text>
          </Box>
          <Box  mt="8">
            <Heading as="h3" size="lg" fontWeight="bold">
              Back-end Development
            </Heading>
            <Text fontSize="lg" mt="4">
              I have experience in Java, Node.js, and MySQL. I can develop and
              maintain server-side applications and databases to support web
              applications.
            </Text>
          </Box>
        </Box>
      </Box>

      <Box my="16">
        <Heading as="h2" size="xl" fontWeight="bold">
          Projects
        </Heading>
        <Box mt="8">
          <Heading as="h3" size="lg" fontWeight="bold">
            Memory Spot
          </Heading>
          <Text fontSize="lg" mt="4">
            It is social media website which will let you share location based memories and your friends have to travel to the location to view your memories giving the realistic experience of sharing memories
          </Text>
        </Box>
        <Box mt="8">
          <Heading as="h3" size="lg" fontWeight="bold">
            MS Blogs
          </Heading>
          <Text fontSize="lg" mt="4">
           This is one of the assignment for creating blog regarding React and post it on blog page. However, I created my own React Application to help my fellow mates learn React based on interactive learning and real life example from this web application only. 
          </Text>
        </Box>
      </Box>

      <Box my="16">
        <Heading as="h2" size="xl" fontWeight="bold">
          Education
        </Heading>
        <Box mt="8">
          <Heading as="h3" size="lg" fontWeight="bold">
            Information Technology Diploma, Software Development
          </Heading>
          <Text fontSize="lg" mt="4">
            Southern Alberta Institute of Technology (SAIT), Calgary, AB
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default About;
