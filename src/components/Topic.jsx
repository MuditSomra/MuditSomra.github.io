import React from 'react';
import { useState } from 'react';

import TopicItem from './TopicItem';
function Topic() {

  const [data, setData] = useState([
    {
      heading: 'How to create React Application',
      description:
        'As mentioned in previous blog i used create react app toolchain and used chakra ui for styling. So how i began process...',
      image: 'start.jpg',
      link: '/start',
    },
    {
      heading: 'File Structure',
      description: 'When you create a new React app using the React app toolchain, you will notice that it generates...',
      image: 'filestructure.png',
      link: '/file',
    },
    {
      heading: 'How to create a simple component',
      description: ' React is a popular JavaScript library used for building user interfaces. One of the key features of React is its...',
      image: 'component.jpg',
      link: '/component',
    },
    {
      heading: 'Props in React',
      description: ' In React JS, the props are a type of object that store the value of attributes of the tag. The word "Props" itself means...',
      image: 'ButtonComp.png',
      link: '/props',
    },
    {
      heading: 'State and Hooks in React',
      description: ' React is a popular JavaScript library for building user interfaces.One of the key features of React is its ability to...',
      image: 'useStatePlaceholder.png',
      link: '/state',
    },
    {
      heading: 'Event and Event Handling',
      description: 'In React, events are interactions that users have with your application, such as clicking a button or typing in ...',
      image: 'eventStatePlaceholder.png',
      link: '/event',
    }
  ]);
  return (
    <div>
      <TopicItem data={data} />
    </div>
  );
}

export default Topic;
