import { Box, Heading, Text, Flex, Image, UnorderedList,useColorModeValue, ListItem } from '@chakra-ui/react';
import React from 'react';
import PrevNextButtons from '../components/PrevNextButtons';
function FileStructure() {
  const FileStructureImage = require('../assets/react_app_file_structure.png');
  const indexFile = require('../assets/react_app_index_file.png');
  const indexjsFile = require('../assets/react_app_indexjs.png');
  const publicFolder = require('../assets/react_app_public_folder.png');
  const appjsFile = require('../assets/react_app_appjs.png');
  const componentsFolder = require('../assets/react_app_component_folder.png');
  const pagesFolder = require('../assets/react_app_pages_folder.png');
  const homepageFile = require('../assets/react_app_homejsx.png');

  const assetsFolder = require('../assets/asset_folder.png');
  const assetsImage2 = require('../assets/asset_image_2.png');
  const assetsImage3 = require('../assets/asset_image_3.png');

  const bgColor = useColorModeValue("gray.100", "gray.700");
  const bgColor2 = useColorModeValue("white", "gray.700");

  return (
    <Box bg={bgColor2} maxW="800px" mx="auto" py={8} px={8} borderRadius={"19"} >
      <Heading as="h1" size="xl" mb={4}>
        Understanding the File Structure of a React App
      </Heading>
      <Flex justifyContent="center">
        <Image
          src={FileStructureImage}
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
      <Text mb={8}>
        When you create a new React app using the React app toolchain, you'll
        notice that it generates a number of files and folders. Understanding
        the purpose of each of these files and folders is important for building
        and maintaining your React app.
        <br/>
        For building the project, these file must exist with same file name
      </Text>
      <UnorderedList>
        <ListItem><Box bg={bgColor} borderWidth="1px" borderRadius="lg" display="inline-block" paddingLeft={"0.5rem"} paddingRight={"0.5rem"}> public/index.html</Box> is the page template.</ListItem>
        <Flex justifyContent="center">
        <Image
          src={indexFile}
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
        <ListItem><Box bg={bgColor} borderWidth="1px" borderRadius="lg" display="inline-block" paddingLeft={"0.5rem"} paddingRight={"0.5rem"}> src/index.js</Box> is the JavaScrip entry point.</ListItem>
        <Flex justifyContent="center">
        <Image
          src={indexjsFile}
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
      </UnorderedList>
      <Heading as="h2" size="lg" mb={4}>
        The public Folder
      </Heading>
      <Text >
      The public folder is a folder in a React app created with the Create React App toolchain. It contains files that will be served directly to the client, such as index.html, favicon.ico, and other static assets like images or videos.
</Text><Text >
When you run the npm start command, the contents of the public folder will be served at the root URL of the app. This means that any files you place in the public folder will be accessible to the user without being processed or optimized by Webpack bundler.
</Text><Text >
You can use the public folder to place your custom index.html file, or any other static files that your app needs. For example, if you need to add a custom font to your app, you can place the font files in the public folder and reference them in your CSS or HTML.
      </Text>
      <Flex justifyContent="center">
        <Image
          src={publicFolder}
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
      <Heading as="h2" size="lg" mb={4}>
        The src Folder
      </Heading>
      <Text mb={8}>
        The src folder is where you'll write most of your code. It contains
        the components, styles, and other files that make up your app. In src folder you will 
        find index.js file which is the entry point of your app. It imports and render the app App component
        , which is typically stroed in a serprate file within same folder.
      </Text>
      <Heading as="h3" size="md" mb={4}>
        The index.js File
      </Heading>
      <Text >
        The index.js file is the entry point to your React app. It renders the
        top-level component of your app and mounts it to the DOM. It call the component app and render it.
      </Text>
      <Flex justifyContent="center">
        <Image
          src={indexjsFile}
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
      <Heading as="h3" size="md" mb={4}>
        The App.js File
      </Heading>
      <Text >
        The App.js file is the main component of your app. It's responsible
        for rendering the components that make up your app, and for managing the
        state of your app. 
      </Text>
      <Flex justifyContent="center">
        <Image
          src={appjsFile}
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
      <Heading as="h2" size="lg" mb={4}>
        The Folder I added
      </Heading>
      <Text mb={8}>
        The file explained above are the crucial file that are needed to explain. Lets move on to the folder which we are going to create for own application so that we keep it structured
        </Text>
      <Heading as="h3" size="md" mb={4}>
        The components Folder
      </Heading>
      <Text >
        The components folder is where you'll place your reusable UI
        components. Each component should be defined in its own file and
        exported for use in other parts of your app.
      </Text>
          <Text mb={8}>
           For instance, you might have seen those card on home page (TopicItem.jsx) that was a reusable component or navbar (Navbar.jsx) that is reusable component thus i kept those component in this folder
          </Text>
      <Flex justifyContent="center">
        <Image
          src={componentsFolder}
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
      <Heading as="h3" size="md" mb={4}>
        The pages Folder
      </Heading>
      <Text mb={8}>
        The pages folder is where you can place your page layout or a big component that represent your whole page view of your application</Text>
        <Flex justifyContent="center">
        <Image
          src={pagesFolder}
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
        <Text> By organizing your pages into separate folder, you can easiley locate and manage the code that is responsible for rendering each page of your app. This is especially helpful in larger application with many pages and components. It streamline the development process as you can easily find the bugs and navigate</Text> 
        <Text> Let's take our MS blogs as an example. The time when i am making this page, I have three different page in my page folder. For instance, my home page it have all the content which i have to put on my home page and it even call component Topic component from components folders.</Text> 
        <Flex justifyContent="center">
        <Image
          src={homepageFile}
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
      <Heading as="h3" size="md" mb={4}>
        The assets Folder
      </Heading>
      <Text >
      The assets folder in a React application is typically used to store static files that are used throughout the application, such as images, fonts, and other media files.
      </Text>
      <Flex justifyContent="center">
        <Image
          src={assetsFolder}
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
      <Text mb={8}>
       Take the example of above image. I have it stored in my assets folder and here i am calling it from there in Image tag of Chakra UI.
      </Text>
      <Flex justifyContent="center">
        <Image
          src={assetsImage2}
          alt=""
          htmlWidth={'70%'}
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
          src={assetsImage3}
          alt=""
          htmlWidth={'70%'}
          htmlHeight="auto"
          style={{
            borderRadius: '10px',
            marginTop: '3rem',
            marginBottom: '3rem',
          }}
        />
      </Flex>
      <PrevNextButtons  prevUrl="/start" nextUrl="/component"/>
    </Box>
  );
}

export default FileStructure;
