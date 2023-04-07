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
      link: '/temp',
    },
    {
      heading: 'File Structure',
      description: 'Description for second card',
      image: 'filestructure.png',
      link: '/file',
    },
    {
      heading: 'How to create a simple component',
      description: 'Description for third card',
      image: 'component.jpg',
      link: '/component',
    },
    {
      heading: 'Props',
      description: 'Description for third card',
      image: 'asset_folder.png',
      link: '/props',
    },
    {
      heading: 'Hooks',
      description: 'Description for third card',
      image: 'asset_folder.png',
      link: '/hooks',
    },
  ]);
  return (
    <div>
      <TopicItem data={data} />
    </div>
  );
}

export default Topic;
