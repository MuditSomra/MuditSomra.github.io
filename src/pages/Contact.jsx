import { Heading, Text, Box, Link, Icon, Flex,useColorModeValue } from "@chakra-ui/react";
import { FaEnvelope, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";


const Contact = () => {
    const bgColor2 = useColorModeValue("gray.100", "gray.700");
  return (
    <>
  
    <Box bg={bgColor2} maxW="800px" mx="auto" py={8} px={8} borderRadius={"19"} marginTop={"3rem"}>
      <Heading mb={4}>Contact Me</Heading>
      <Box maxW="sm">
        <Text fontSize="lg" mb={2}>
        <strong>Email:</strong> muditsomra9@gmail.com
        </Text>
        <Text fontSize="lg" mb={2}>
        <strong>Address:</strong> Calgary,Alberta
        </Text>
        <Text fontSize="lg" mb={2}>
          Follow me on social media:
        </Text>
        <Flex alignItems="center">
          <Link href="https://www.linkedin.com/in/muditsomra"  target="_blank" mr={4} fontSize="2xl">
            <Icon as={FaLinkedin} />
          </Link>
          <Link href="https://github.com/MuditSomra"  target="_blank" fontSize="2xl">
            <Icon as={FaGithub} />
          </Link>
        </Flex>
      </Box>
    </Box></>
  );
};

export default Contact;
