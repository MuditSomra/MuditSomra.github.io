import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,

} from '@chakra-ui/react';
function TopicItem(props) {
  const data = props.data;

  return (
    <Flex flexWrap="wrap" justifyContent="space-evenly">
      {data.map((item, index) => (
        <Card maxW="sm" key={index} marginTop="2rem">
          <CardBody>
            <Image
              src={require(`../assets/${item.image}`)}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
              height={"50%"}
              width={"auto"}
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">{item.heading}</Heading>
              <Text fontSize="md" fontWeight={'semibold'}>
                {item.description}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Link to={item.link}>
                <Button variant="solid" colorScheme="blue">
                  {' '}
                  Read more{' '}
                </Button>{' '}
              </Link>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
    </Flex>
  );
}

export default TopicItem;
