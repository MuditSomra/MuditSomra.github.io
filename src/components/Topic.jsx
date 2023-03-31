import React from 'react';
import { useState } from 'react';

import TopicItem from './TopicItem';
function Topic() {
  const [data, setData] = useState([
    {
      heading: 'How to start',
      description: 'As mentioned in previous blog i used create react app toolchain and used chakra ui for styling. So how i began process...',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      heading: 'File Structure',
      description: 'Description for second card',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      heading: 'Props',
      description: 'Description for third card',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      heading: 'UseState',
      description: 'Description for third card',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      heading: 'Hooks',
      description: 'Description for third card',
      image: 'https://via.placeholder.com/300x200',
    },
  ]);
  return (
    <div>
      <TopicItem data={data} />
    </div>
  );
}

export default Topic;
