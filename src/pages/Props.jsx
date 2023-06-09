import React from 'react';
import { Box, Heading, Text, Flex, Image } from '@chakra-ui/react';
import PropInput from '../components/PropInput';
import PrevNextButtons from '../components/PrevNextButtons';
function Props() {
  const topicjsx = require('../assets/Topicjsx.png');
  const topicjsx2 = require('../assets/Topicjsx2.png');
  const topicitemjsx = require('../assets/TopicItemjsx.png');
  const ButtonCompImg = require('../assets/ButtonComp.png');
  const ButtonCall2 = require('../assets/ButtonCall2.png');
  const ButtonImage = require('../assets/buttonImage.png');
  return (
    <Box maxW="800px" mx="auto" py={8} px={4}>
      <Heading as="h1" mb={4}>
        What are Props in React
      </Heading>
      <Text mb={4}>
        In React JS, the props are a type of object that store the value of
        attributes of the tag. The word "Props" itself means "properties", and
        its functionality is the same as HTML attributes and is read-only. This
        allows you to create reusable components that can be customized and
        configured to display different information or perform different
        actions.
      </Text>
      <Text mb={4}>
        When you define a component in React, you can specify `props` as a
        parameter to the component function. For example:
      </Text>
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
      <Text mb={4}>
        In this example, props is an object that contains any properties
        passed to the component. The ButtonComp function uses props.text
        as button text
      </Text>
      <Text mb={4}>
        We can pass `props` to a component when you call that component from
        another component. For example:
      </Text>
      <Flex justifyContent="center">
        <Image
          src={ButtonCall2}
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
      <Text mb={4}>
        In this example, `MyApp` is the parent component, and it passes a
        `text` prop with the value "Prop Content Text" to the ButtonComp child
        component. The ButtonComp component then displays the button with Prop Content as its name
      </Text>
      <Flex justifyContent="center">
        <Image
          src={ButtonImage}
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
      <Text>
        Overall, `props` are an essential part of building React applications
        because they allow you to create flexible and reusable components that
        can be easily customized and configured to suit different needs.
      </Text>
      <Heading as="h3" size="lg" mb={4}>
        Props in MS Blogs
      </Heading>
      <Text mb={4}>
        In our application, we used props at various location but the most good
        examples which you can relate and see how use full it is those cards at
        home page that took you to this page. In my application, I have two file
        for those cards, the first one is child component that is TopicItem.jsx
        that is component that have and styles Card component. This component
        contains an Image, Heading, and Text component, which are populated with
        the imageURL,heading and description values from the prop.
      </Text>
      <Text mb={3}>
        Since the styling of every card is same and i can reuse that component
        so we had one base stucture for that component and data is passed form
        Topic.jsx thus it propmotes code reusability.
      </Text>
      <Text>
        Down below are the images of code you can have a look and see how it
        works
      </Text>
      <Flex justifyContent="center">
        <Image
          src={topicjsx}
          alt=""
          htmlWidth={'auto'}
          htmlHeight="auto"
          style={{
            borderRadius: '10px',
            marginTop: '3rem',
            marginBottom: '3rem',
          }}
        />
      </Flex>
      <Flex justifyContent="center">
        <Image
          src={topicjsx2}
          alt=""
          htmlWidth={'auto'}
          htmlHeight="auto"
          style={{
            borderRadius: '10px',
            marginTop: '3rem',
            marginBottom: '3rem',
          }}
        />
      </Flex>
      <Text>
        Above is the Topic.jsx which is having constant data and passing that to
        TopicItem.jsx which is going to use heading,description,image and link part of data to render cards on home page .{' '}
      </Text>
      <Flex justifyContent="center">
        <Image
          src={topicitemjsx}
          alt=""
          htmlWidth={'auto'}
          htmlHeight="auto"
          style={{
            borderRadius: '10px',
            marginTop: '3rem',
            marginBottom: '3rem',
          }}
        />
      </Flex>
      <Box>
      <PropInput/>
      
          </Box>
          <PrevNextButtons  prevUrl="/component" nextUrl="/state"/>
    </Box>
  );
}

export default Props;
