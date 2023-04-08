
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
import ComponentCreation from './pages/ComponentCreation';
import ScrollToTop from './components/ScrollToTop';
import Props from './pages/Props';
import UseStates from './pages/Usestate';
import Event from './pages/Event';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <ChakraProvider>
      <Router>
      <ScrollToTop/>
        <Navbar />
        <Routes>
          <Route path="/start" element={<QuickStart />} />
          <Route path="/file" element={<FileStructure />} />
          <Route path="/props" element={<Props/>} />
          <Route path="/state" element={<UseStates/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/event" element={<Event/>} />
          <Route path="/component" element={<ComponentCreation/>} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<>404 Error Page, Page not found. Thanks</>}/>
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
