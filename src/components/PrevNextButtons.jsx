import { Button, Flex } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { ArrowBackIcon,ArrowForwardIcon } from "@chakra-ui/icons";


const PrevNextButtons = ({ prevUrl, nextUrl }) => {
  return (
    <Flex justify="space-between" mb={8}>
      {prevUrl && (
        <Button   as={RouterLink}
        to={prevUrl}
        leftIcon={<ArrowBackIcon />}
        colorScheme="blue"
        variant="solid"
        size="sm"
        fontWeight="bold"
        px={4}
        py={2}
        _hover={{ bg: "blue.500" }}>
          Previous
        </Button>
      )}
      {nextUrl && (
        <Button  as={RouterLink}
        to={nextUrl}
        rightIcon={<ArrowForwardIcon />}
        colorScheme="blue"
        variant="solid"
        size="sm"
        fontWeight="bold"
        px={4}
        py={2}
        _hover={{ bg: "blue.500" }}>
          Next
        </Button>
      )}
    </Flex>
  );
};

export default PrevNextButtons;
