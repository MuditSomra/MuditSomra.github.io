import React from 'react';
import {Button} from '@chakra-ui/react'

function ButtonComp(props) {
  return (
    <Button bg="green.400" my={5}>{props.text}</Button>
  );
}

export default ButtonComp;
