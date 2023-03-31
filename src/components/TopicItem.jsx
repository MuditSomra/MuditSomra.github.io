import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Flex, Image, Stack, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react';
function TopicItem(props) {
  const data = props.data;
  

  return (
    <Flex flexWrap="wrap" justifyContent="space-between">
      {data.map((item, index) => (
        <Card maxW="sm" key={index}>
          <CardBody>
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">{item.heading}</Heading>
              <Text>${item.description}</Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="blue">
                Read more..
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
    </Flex>
  );
}

export default TopicItem;
