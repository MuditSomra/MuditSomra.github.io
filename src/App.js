
import { React, useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
  useColorModeValue,
  ChakraProvider,
  extendTheme
} from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Topic from './components/Topic';
import Home from './pages/Home';
import QuickStart from './pages/QuickStart';
import FileStructure from './pages/FileStructure';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/temp" element={<QuickStart />} />
          <Route path="/file" element={<FileStructure />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<>404 Error Page, Page not found. Thanks</>}/>
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
