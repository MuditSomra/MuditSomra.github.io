import React, { useState } from 'react';
import {
   Box,
   Input,
    Button,
    useColorModeValue,
    Heading,
    Text,
    Flex,
    Image
  
  } from '@chakra-ui/react';
import ButtonComp from './PropOutput';

function PropInput(props) {
  const [propValue, setPropValue] = useState('');

  const handleChange = (event) => {
    setPropValue(event.target.value);
  }
  const bgColor2 = useColorModeValue('gray.100', 'black');
  const ButtonCall = require('../assets/ButtonCall.png');
  const ButtonCompImg = require('../assets/ButtonComp.png');
  return (
   
      <Box bg={bgColor2} maxW="800px" mx="auto" py={8} px={8} borderRadius={'19'}>
        <Heading>Feel it guys..</Heading>
        <Text fontWeight={"semibold"} my={4}>Input your prop over here</Text>
        <Text>The value you will be typing will get store in propvalue constant and its getting sent as prop to ButtonComp and ButtonComp will recieve that Prop and use that Prop to set its name.</Text>
        <Input placeholder='Type "Click here"' type="text" value={propValue} onChange={handleChange} />
        <Flex justifyContent="center">
        <Image
          src={ButtonCall}
          alt=""
          htmlWidth={'50%'}
          htmlHeight="auto"
          style={{
            borderRadius: '10px',
            marginTop: '2rem',
            marginBottom: '1rem',
          }}
        />
      </Flex>
        <Flex justifyContent="center">
        <Image
          src={ButtonCompImg}
          alt=""
          htmlWidth={'50%'}
          htmlHeight="auto"
          style={{
            borderRadius: '10px',
            marginTop: '1rem',
            marginBottom: '1rem',
          }}
        />
      </Flex>


        <ButtonComp text={propValue}/>

      </Box>
   
  );
}

export default PropInput;
