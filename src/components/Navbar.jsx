import { useState } from 'react';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import {Link} from "react-router-dom";
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import ThemeToggleButton from './ThemeToggleButton';

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const [isMobileNav, setIsMobileNav] = useState(false);

  return (
    <Box position="sticky" top="0" zIndex="sticky" bg={useColorModeValue('white', 'gray.800')}>
      <Flex
        direction={useBreakpointValue({ base: 'column', md: 'row' })}
        justify="space-between"
        align="center"
        px={{ base: 4, md: 8 }}
        py={4}
        borderBottom={1}
        borderStyle="solid"
        borderColor={useColorModeValue('gray.200', 'gray.900')}
      >
        <Flex align="center" >
          <Text fontSize="xl" fontWeight="bold" marginTop="0.8rem" letterSpacing="tight">
            MS blogs
          </Text>
        </Flex>

        <Box display={{ base: 'block', md: 'none' }}  onClick={() => setIsMobileNav(!isMobileNav)}>
          {isMobileNav ? (
            <IconButton icon={<CloseIcon />} variant="ghost" aria-label="Close menu" />
          ) : (
            <IconButton icon={<HamburgerIcon />} variant="ghost" aria-label="Open menu" />
          )}
        </Box>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: isMobileNav ? 'block' : 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
          ml={4}
        >
            <Link to='/'>
          <Button variant="ghost">
            Home
          </Button>
          </Link>
          <Link to='/about'>
          <Button variant="ghost">
            About
          </Button>
          </Link>
         
          <Link to='/contact'>
          <Button variant="ghost" href="#">
            Contact
          </Button>
          </Link>
        </Stack>

        <Box>
          <ThemeToggleButton/>
        </Box>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Stack
          bg={useColorModeValue('white', 'gray.800')}
          p={4}
          display={{ md: 'none' }}
          onClick={() => setIsMobileNav(false)}
        >
           <Link to={'/'}>
          <Button variant="ghost">
            Home
          </Button>
          </Link>
          <Link to={'/about'}>
          <Button variant="ghost" href="#">
            About
          </Button>
          </Link>
          <Link to={'/contact'}>
          <Button variant="ghost" href="#">
            Contact
          </Button>
          </Link>
        </Stack>
      </Collapse>
    </Box>
  );
}
