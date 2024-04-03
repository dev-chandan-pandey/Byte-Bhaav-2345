import { Box, Grid } from '@chakra-ui/react';
import React from 'react';
import ViewPosts from '../components/ViewPosts';
import AddNewPost from '../components/AddNewPost';

const Posts = () => {
  return (
    <Grid
      gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
      display={"flex"}
      flexWrap={"wrap"}
      marginTop={"100px"}
      marginLeft={"100px"}
    >
      <Box height={"200px"} width={"calc(40% - 20px)"} padding={"20px"} margin={"10px"}>
        <AddNewPost />
      </Box>
    
      {/* middle part start */}
      <Box
        width={{ base: "100%", md: "calc(60% - 20px)" }}
        padding={"20px"}
        margin={"10px auto"}
        overflowY={"auto"}
        maxHeight={"calc(100vh)"} // Adjust the height as needed
      >
        <ViewPosts />
      </Box>
      {/* middle part ends */}
    </Grid>
  );
};

export default Posts;
