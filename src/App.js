
import { React,useState } from 'react';
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

// import TopicItem from './components/TopicItem';
import Topic from './components/Topic';
import Home from './pages/Home';
import QuickStart from './pages/QuickStart';
// const theme = extendTheme({
//   config: {
//     initialColorMode: 'light',
//     useSystemColorMode: false,
//   },
//   colors: {
//     brand: {
//       100: '#f7fafc',
//       // ...
//     },
//   },
//   styles: {
//     global: (props) => ({
//       body: {
//         bg: mode('white', 'gray.800')(props),
//         color: mode('gray.800', 'white')(props),
//       },
//     }),
//   },
// });

function App() {
  // const[mode, setMode] = useState('light');
  // const toggleMode=()=> {
  //   if(mode==='dark'){
  //   setMode('light');
  //   document.body.style.backgroundColor='white';
  //    }
  //  else{
  //     setMode('dark');
  //     document.body.style.backgroundColor='#202223';
       
  //     }
  // }
 
  return (
    <ChakraProvider >
      <Router>
    <Navbar/>
    <div style={{ marginLeft: '4rem' }}>
      <Routes>
      <Route path="/temp" element={<QuickStart/>} />
      <Route path="/" element={<Home/>} />
      <Route
            path="*"
            element={<>404 Error Page, Page not found. Thanks</>}
          />
      </Routes>
      
    </div>
    </Router>
  </ChakraProvider>
  );
}

export default App;
